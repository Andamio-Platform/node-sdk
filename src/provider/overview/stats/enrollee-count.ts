import { bytesToHex, hexToString } from "@meshsdk/common";
import { DatumForAlias } from "../../../utils/parser/datum/global-state";
import { SdkError } from "../../../common/error";
import { InstanceAddresses } from "../../../utils/instance-validator";
import { Core } from "../../core";

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

        const utxoMap: Record<string, { course: number; project: number }> = {};

        for (const address of filteredAddresses) {
            const utxos = await core.localStates.course.courseState.getUtxos('', address.address);

            if (!utxoMap[address.policy]) {
                utxoMap[address.policy] = { course: 0, project: 0 };
            }

            if (address.state === 'ContributorStateScripts') {
                const seenAssets = new Set<string>();
                let counted = 0;

                for (const utxo of utxos) {
                    const assetGroups = utxo.parsedValued?.assets ?? [];

                    const currentAssetKeys: string[] = [];

                    for (const group of assetGroups) {
                        for (const asset of group.assets) {
                            const assetKey = `${group.policyId}:${hexToString(bytesToHex(asset.name))}`;
                            currentAssetKeys.push(assetKey);
                        }
                    }

                    // If ANY asset in the UTXO was seen before, skip this UTXO
                    const isAllNew = currentAssetKeys.every(key => !seenAssets.has(key));

                    if (isAllNew) {
                        counted += 1;
                        currentAssetKeys.forEach(key => seenAssets.add(key));
                    }
                }

                utxoMap[address.policy].project += counted;
            } else if (address.state === 'CourseStateScripts' || address.state === 'AssignmentValidator') {
                const count = utxos.length;
                utxoMap[address.policy].course += count;
            }
        }

        // Now structure the final array
        const result = Object.entries(utxoMap).flatMap(([policy, { course, project }]) => {
            const entries: { policy: string; state: string; enrolled: number, completed: number }[] = [];
            if (course > 0) {
                entries.push({ policy, state: 'Course', enrolled: course, completed: completed.find(c => c.policy === policy)?.aliases.length || 0 });
            }
            if (project > 0) {
                entries.push({ policy, state: 'Project', enrolled: project, completed: completed.find(c => c.policy === policy)?.aliases.length || 0 });
            }
            return entries;
        });

        return result
    } catch (err) {
        throw new SdkError(`Failed to fetch enrollee count: ${err}`);
    }
}