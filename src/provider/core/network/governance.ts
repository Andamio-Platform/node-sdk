import { UtxorpcClient } from "../../../u5c";
import { SdkError } from "../../../error";
import { Utxo } from "../../../utxo";

export class Governance  {
    public readonly address: string;

    constructor(private readonly client: UtxorpcClient) {
        this.address = this.client.andamioConfig.governanceS.sCAddress;
    }

    async getUtxos(): Promise<Utxo[]> {
        try {
            const utxos = await this.client.getUtxos(this.address);
            return utxos;
        } catch (err) {
            throw new SdkError(`Failed to fetch UTXOs: ${err}`);
        }
    }
}