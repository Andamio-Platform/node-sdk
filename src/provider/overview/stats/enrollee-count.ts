import { bytesToHex, hexToString } from "@meshsdk/common";
import { DatumForAlias } from "../../../utils/parser/datum/global-state";
import { SdkError } from "../../../common/error";
import { InstanceAddresses } from "../../../utils/instance-validator";
import { Core } from "../../core";
import { Utxo } from "../../../common/utxo";

export async function CompletedLocalStates(core: Core) {
    try {
        const globalStateUtxos = await core.globalState.getUtxos();
        if (!globalStateUtxos) return;

        const datums = DatumForAlias(globalStateUtxos);
        const credentials = datums.map(datum => {
            return {
                alias: datum.alias,
                credential: datum.datum.plutusData.value.fields[2].plutusData.value.items
            }
        })
        const completedStates = credentials.map(cred => {
            return {
                alias: cred.alias,
                completedStates: cred.credential.filter((state) => JSON.parse(JSON.stringify(state.plutusData.value.fields[2].plutusData.value)).tag === 121)
            };
        });
        return completedStates;
    } catch (error) {
        console.error('❌ Error getting completed local states:', error);
    }
}

export async function aliasesWhoCompletedByPolicies(core: Core, policies: string[]) {
    try {
        const completedStates = await CompletedLocalStates(core);
        if (!completedStates) return;

        let filteredStates: {
            policy: string;
            aliases: string[];
        }[] = []

        for (const policy of policies) {
            const aliasesWithCompletedStates = completedStates.map(state => {
                if (state.completedStates.some(localState => bytesToHex(localState.plutusData.value.fields[0].plutusData.value) === policy)) {
                    return state.alias;
                }
                return;
            })
            filteredStates.push({
                policy: policy,
                aliases: aliasesWithCompletedStates.filter(alias => alias !== undefined)
            });
        }
        return filteredStates
    } catch (error) {
        console.error(`❌ Error getting completed local states for policies ${policies}:`, error);
    }
}

export async function enrolleeCount(core: Core, policies: string[]): Promise<{
    policy: string;
    state: string;
    enrolled: number;
    completed: number;
}[]> {
    try {
        const completed = await aliasesWhoCompletedByPolicies(core, policies)
        if (!completed) {
            throw new SdkError("Failed to fetch completed local states");
        }

        const instanceUtxos = await core.localStates.instance.getUtxos();
        const instanceAddresses: {
            address: string;
            state: string;
            policy: string;
        }[] = InstanceAddresses(instanceUtxos, core.andamioConfig.stakingSH, core.network, policies);

        const filteredAddresses = instanceAddresses.filter(address =>
            address.state === 'ContributorStateScripts' ||
            address.state === 'CourseStateScripts' ||
            address.state === 'AssignmentValidator'
        );

        // Helper function to count unique assets in UTXOs
        const countUniqueAssets = (utxos: Utxo[]): number => {
            const seenAssets = new Set<string>();
            let counted = 0;

            for (const utxo of utxos) {
                const assetGroups = utxo.parsedValued?.assets ?? [];
                const currentAssetKeys = assetGroups.flatMap(group =>
                    group.assets.map(asset =>
                        `${group.policyId}:${hexToString(bytesToHex(asset.name))}`
                    )
                );

                const isAllNew = currentAssetKeys.every(key => !seenAssets.has(key));
                if (isAllNew) {
                    counted++;
                    currentAssetKeys.forEach(key => seenAssets.add(key));
                }
            }
            return counted;
        };

        // Process addresses and build policy data
        const policyData = new Map<string, {
            state: string;
            course: number;
            project: number;
        }>();

        for (const address of filteredAddresses) {
            const utxos = await core.client.getUtxos(address.address);

            if (!policyData.has(address.policy)) {
                policyData.set(address.policy, {
                    state: address.state,
                    course: 0,
                    project: 0
                });
            }

            const data = policyData.get(address.policy)!;

            if (address.state === 'ContributorStateScripts') {
                data.project += countUniqueAssets(utxos);
            } else if (address.state === 'CourseStateScripts' || address.state === 'AssignmentValidator') {
                data.course += utxos.length;
            }
        }

        // Transform to final result
        return Array.from(policyData.entries()).flatMap(([policy, data]) => {
            const completedCount = completed?.find(c => c.policy === policy)?.aliases.length || 0;
            const entries = [];

            if (data.state === 'CourseStateScripts' || data.state === 'AssignmentValidator') {
                entries.push({
                    policy,
                    state: 'Course',
                    enrolled: data.course,
                    completed: completedCount
                });
            }

            if (data.state === 'ContributorStateScripts') {
                entries.push({
                    policy,
                    state: 'Project',
                    enrolled: data.project,
                    completed: completedCount
                });
            }

            return entries;
        });

    } catch (err) {
        throw new SdkError(`Failed to fetch enrollee count: ${err}`);
    }
}