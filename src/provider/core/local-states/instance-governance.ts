import { UtxorpcClient } from "../../../common/u5c";
import { SdkError } from "../../../common/error";
import { Utxo } from "../../../common/utxo";
import { cardano } from "@utxorpc/spec";
import { bytesToHex } from "@meshsdk/common";
import { isInstanceGovernanceDatum } from "../../../utils/parser/datum/local-states/instance-governance";

/**
 * Represents a Governance entity for managing the governance smart contract.
 * Provides functionality to interact with the governance entity's UTXOs.
 * @internal
 */
export class InstanceGovernance {
    /**
     * The address of the governance smart contract.
     */
    public readonly address: string;

    /**
     * Creates a new Governance instance.
     * @param client - The UtxorpcClient used for blockchain interactions.
     */
    constructor(private readonly client: UtxorpcClient) {
        this.address = this.client.andamioConfig.governanceS.sCAddress;
    }

    /**
     * Retrieves the UTXOs associated with the governance smart contract address.
     * Filters UTXOs by datum structure.
     * @returns A promise that resolves to an array of UTXOs.
     * @throws {SdkError} If fetching UTXOs fails.
     */
    async getUtxos(): Promise<Utxo[]> {
        try {
            let utxos = await this.client.getUtxos(this.address);
            utxos = utxos.filter(utxo => utxo.parsedValued?.datum?.payload && isInstanceGovernanceDatum(utxo.parsedValued.datum.payload));
            return utxos;
        } catch (err) {
            throw new SdkError(`Failed to fetch UTXOs: ${err}`);
        }
    }

    async getUtxoByCourseIdOrProjectId(id: string): Promise<Utxo> {
        try {
            let utxos = await this.getUtxos();
            const utxo = utxos.find((utxo) => {
                const datum = utxo.parsedValued?.datum?.payload?.plutusData.value as cardano.Constr;
                if (datum.fields[1].plutusData.case == "boundedBytes") {
                    return bytesToHex(datum.fields[1].plutusData.value) === id;
                }
                return false;
            })
            if (!utxo) {
                throw new SdkError("No UTXO found with the specified courseId or projectId.");
            }
            return utxo;
        } catch (err) {
            throw new SdkError(`Failed to fetch UTXOs: ${err}`);
        }
    }
}