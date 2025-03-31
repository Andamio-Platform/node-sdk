import { UtxorpcClient } from "../../../u5c";
import { SdkError } from "../../../error";
import { Utxo } from "../../../utxo";

/**
 * AliasIndex class manages alias indexing functionality.
 * 
 * This class provides methods to interact with UTXOs associated with a specific address and policy.
 * It leverages the UtxorpcClient to perform network operations.
 */
export class AliasIndex {
    /**
     * The address used for UTXO queries.
     */
    public readonly address: string;

    /**
     * The policy ID used for UTXO filtering.
     */
    public readonly policy: string;

    /**
     * Creates a new instance of AliasIndex.
     * 
     * @param client - The UtxorpcClient instance used to make network requests.
     */
    constructor(private readonly client: UtxorpcClient) {
        this.address = this.client.andamioConfig.indexMS.mSCAddress;
        this.policy = this.client.andamioConfig.indexMS.mSCPolicyID;
    }

    /**
     * Retrieves UTXOs for the configured address and policy.
     * 
     * @returns A promise that resolves to an array of UTXOs.
     * @throws {SdkError} If fetching the UTXOs fails.
     */
    async getUtxos(): Promise<Utxo[]> {
        try {
            const utxos = await this.client.getUtxos(this.address, this.policy);
            return utxos;
        } catch (err) {
            throw new SdkError(`Failed to fetch UTXOs: ${err}`);
        }
    }
}