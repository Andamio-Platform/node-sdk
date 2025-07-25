import { UtxorpcClient } from "../../common/u5c";
import { SdkError } from "../../common/error";
import { Utxo } from "../../common/utxo";
import { bytesToHex, hexToString, stringToHex } from "@meshsdk/common";

/**
 * Represents the global state of the system.
 * This class provides methods to interact with the global state UTXOs.
 * @internal
 */
export class GlobalState {
    /**
     * The address associated with the global state.
     */
    public readonly address: string;

    /**
     * The policy ID associated with the global state.
     */
    public readonly policy: string;

    /**
     * Creates a new GlobalState instance.
     * @param client - The UTXO RPC client used to interact with the blockchain.
     */
    constructor(private readonly client: UtxorpcClient) {
        this.address = this.client.andamioConfig.globalStateS.sCAddress;
        this.policy = this.client.andamioConfig.indexMS.mSCPolicyID;
    }

    /**
     * Retrieves all UTXOs associated with the global state.
     * @returns A promise that resolves to an array of UTXOs.
     * @throws {SdkError} If fetching UTXOs fails.
     */
    async getUtxos(): Promise<Utxo[]> {
        try {
            const utxos = await this.client.getUtxos(this.address, this.policy);
            return utxos;
        } catch (err) {
            throw new SdkError(`Failed to fetch UTXOs: ${err}`);
        }
    }


    /**
     * Retrieves a specific UTXO by its alias from the global state.
     * @param alias - The alias of the UTXO to retrieve.
     * @returns A promise that resolves to the requested UTXO.
     * @throws {SdkError} If the UTXO with the specified alias is not found or if fetching fails.
     */
    async getUtxoByAlias(alias: string): Promise<Utxo> {
        try {
            let utxo = await this.client.getUtxos(this.address, this.policy, "313030" + stringToHex(alias));
            // utxo = byAlias({
            //     utxos: utxo,
            //     alias,
            // });
            if (utxo.length === 0) {
                throw new SdkError(`No UTXO found for alias: ${alias}`);
            } else {
                return utxo[0];
            }
        } catch (err) {
            throw new SdkError(`Failed to fetch UTXO: ${err}`);
        }
    }
}