import { UtxorpcClient } from "../../../u5c";
import { SdkError } from "../../../error";
import { Utxo } from "../../../utxo";
import { cardano } from "@utxorpc/spec";

export class Governance  {
    public readonly address: string;

    constructor(private readonly client: UtxorpcClient) {
        this.address = this.client.andamioConfig.governanceS.sCAddress;
    }

    async getUtxos(): Promise<Utxo[]> {
        try {
            let utxos = await this.client.getUtxos(this.address);
            utxos = filterByDatumStructure(utxos);
            return utxos;
        } catch (err) {
            throw new SdkError(`Failed to fetch UTXOs: ${err}`);
        }
    }
}

function filterByDatumStructure(utxos:Utxo[]): Utxo[] {
    return utxos.filter((utxo) => {
        const datum = utxo.parsedValued?.datum?.payload?.plutusData.value as cardano.Constr
        return (
            datum &&
            datum.fields[0] instanceof cardano.PlutusData &&
            datum.fields[0].plutusData.case === "array" &&
            datum.fields[1] instanceof cardano.PlutusData &&
            datum.fields[1].plutusData.case === "boundedBytes"
        );
    });
}