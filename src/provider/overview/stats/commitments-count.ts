import { InstanceAddresses } from "../../../utils/instance-validator";
import { instanceGovernanceDatumForPolicy, instanceGovernancePoliciesForAlias } from "../../../utils/parser/datum/local-states/instance-governance";
import { Core } from "../../core";


export async function commitmentCount(core: Core, policies: string[]): Promise<{
    policy: string;
    state: string;
    committed: number;
}[]> {
    try {
        const instanceUtxos = await core.localStates.instance.getUtxos();
        const instanceAddresses: {
            address: string;
            state: string;
            policy: string;
        }[] = InstanceAddresses(instanceUtxos, core.andamioConfig.stakingSH, core.network, policies);

        const filteredAddresses = instanceAddresses.filter(address =>
            address.state === 'Escrow1' ||
            address.state === 'AssignmentValidator'
        );

        // Track both commitments and state for each policy
        const policyData = new Map<string, {
            commitments: number;
            state: string;
        }>();

        for (const address of filteredAddresses) {
            const utxos = await core.client.getUtxos(address.address);

            if (!policyData.has(address.policy)) {
                policyData.set(address.policy, {
                    commitments: 0,
                    state: address.state
                });
            }

            const data = policyData.get(address.policy)!;
            data.commitments += utxos.length;
        }

        // Transform to final result with correct state mapping
        const result = Array.from(policyData.entries()).map(([policy, data]) => ({
            policy,
            state: data.state === 'Escrow1' ? 'Project' : 'Course',
            committed: data.commitments
        }));

        return result;
    } catch (error) {
        console.error(`❌ Error getting commitments count for policies ${policies}:`, error);
        return [];
    }
}


export async function commitmentCountUnderAlias(core: Core, alias: string): Promise<{
    policy: string;
    state: string;
    committed: number;
}[]> {
    const governanceUtxos = await core.localStates.instanceGovernance.getUtxos();
    const policies = instanceGovernancePoliciesForAlias(governanceUtxos, alias);
    const commitments = await commitmentCount(core, policies);
    return commitments
}