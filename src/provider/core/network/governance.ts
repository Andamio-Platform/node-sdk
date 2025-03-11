import AndamioConfig from "../../../andamio-config.json";
import { UtxorpcClient } from "../../../u5c";
import { SdkError } from "../../../error";
import { Utxo } from "../../../utxo";

export class Governance  {
    public readonly address: string = AndamioConfig.governanceS.sCAddress;

    constructor(private readonly client: UtxorpcClient) { }

    async getUtxos(): Promise<Utxo[]> {
        try {
            const utxos = await this.client.getUtxos(this.address);
            return utxos;
        } catch (err) {
            throw new SdkError(`Failed to fetch UTXOs: ${err}`);
        }
    }
}