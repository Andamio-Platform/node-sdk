import { UtxorpcClient } from "../../../common/u5c";
import { SdkError } from "../../../common/error";
import { Utxo } from "../../../common/utxo";
import { bytesToHex, hexToString, stringToHex } from "@meshsdk/common";

export type InstanceFilter =
    | 'ModuleScripts'
    | 'CourseStateScripts'
    | 'AssignmentValidator'
    | 'TreasuryScripts'
    | 'TreasuryToken'
    | 'Escrow1'
    | 'ContributorStateScripts'

/**
 * Represents an instance in the Andamio network.
 * 
 * This class provides methods to interact with a specific instance address and policy,
 * allowing access to UTXOs and other instance-related operations.
 * @internal
 */
export class Instance {
    /**
     * The address of the instance.
     */
    public readonly address: string;

    /**
     * The policy ID of the instance.
     */
    public readonly policy: string;

    /**
     * Creates a new instance.
     * 
     * @param client - The UtxorpcClient to use for network operations.
     */
    constructor(private readonly client: UtxorpcClient) {
        this.address = this.client.andamioConfig.instanceMS.mSCAddress;
        this.policy = this.client.andamioConfig.instanceMS.mSCPolicyID;
    }

    /**
     * Retrieves UTXOs for the instance.
     * 
     * @param policy - Optional policy ID to filter UTXOs.
     * @param filter - Optional filter to apply to the UTXOs.
     * @returns A promise that resolves to an array of UTXOs.
     * @throws {SdkError} If fetching UTXOs fails.
     */
    async getUtxos(policy?: string, filter?: InstanceFilter): Promise<Utxo[]> {
        try {
            let utxos;
            utxos = await this.client.getUtxos(
                this.address,
                this.policy,
                // asset_name,
            );
            // remove when utxorpc node-sdk gets updated
            if (filter) {
                utxos = byFilter({
                    utxos,
                    filter,
                });
            }
            // till here
            if (policy) {
                utxos = byInstancePolicy({
                    utxos,
                    policy,
                });
            }
            return utxos;
        } catch (err) {
            throw new SdkError(`Failed to fetch UTXOs: ${err}`);
        }
    }
}

// remove when utxorpc node-sdk gets updated
function byFilter({
    utxos,
    filter,
}: {
    utxos: Utxo[];
    filter: string;
}): Utxo[] {
    const filteredUtxos = utxos.filter((utxo) =>
        utxo.parsedValued?.assets?.some((asset) =>
            asset.assets.some((a) => hexToString(bytesToHex(a.name)) === filter),
        ),
    );

    if (filteredUtxos.length === 0) {
        throw new Error("Filter not found in Instance Validator UTxOs");
    }

    return filteredUtxos;
}
// till here

function byInstancePolicy({
    utxos,
    policy,
}: {
    utxos: Utxo[];
    policy: string;
}): Utxo[] {
    const filteredUtxos = utxos.filter((utxo) => {
        const nftPolicy = bytesToHex(
            utxo.parsedValued?.datum?.payload?.plutusData.value as Uint8Array,
        );
        return nftPolicy === policy;
    });

    if (filteredUtxos.length === 0) {
        throw new Error("Policy not found in Instance Validator UTxOs");
    }

    return filteredUtxos;
}