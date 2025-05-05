import { UtxorpcClient } from "../../../u5c";
import { SdkError } from "../../../error";
import { Utxo } from "../../../utxo";
import { AliasIndexDatum, parseAliasIndexDatum } from "../../../utils/alias-index";
import { bytesToHex, stringToHex } from "@meshsdk/common";
import { logger } from "../../../logger";
import * as spec from "@utxorpc/spec";


/**
 * AliasIndex class manages alias indexing functionality.
 * 
 * This class provides methods to interact with UTXOs associated with a specific address and policy.
 * It leverages the UtxorpcClient to perform network operations.
 * @internal
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

    async getUtxoByNewAlias(alias: string): Promise<Utxo> {
        const alias_hex = stringToHex(alias)
        const utxos = await this.getUtxos();
        const filteredUtxo = utxos.find((utxo) => {
            if (!utxo.parsedValued?.datum?.payload?.plutusData) {
                return false;
            }
            
            const datum = parseAliasIndexDatum(utxo.parsedValued.datum.payload.plutusData as unknown as spec.cardano.PlutusData);
            if (datum === null) {
                return false;
            }

            const prior_alias = bytesToHex(datum.fields[0]);
            const subsequent_alias = bytesToHex(datum.fields[1]);

            logger.log(
                `Alias: ${alias_hex}, Prior Alias: ${prior_alias}, Subsequent Alias: ${subsequent_alias}`
            );

            // Compare hexadecimal values
            if (
                alias_hex === prior_alias ||
                alias_hex === subsequent_alias
            ) {
                throw new Error('Alias already exists')
            } else if (
                prior_alias <= alias_hex &&
                alias_hex <= subsequent_alias
            ) {
                return true
            }

            return false;
        });
        if (!filteredUtxo) {
            throw new SdkError(`No UTXO found for alias: ${alias}`);
        }
        return filteredUtxo;
    }
}