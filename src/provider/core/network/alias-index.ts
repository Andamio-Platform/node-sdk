import AndamioConfig from "../../../andamio-config.json";
import { UtxorpcClient } from "../../../u5c";
import { SdkError } from "../../../error";
import { Utxo } from "../../../utxo";

export class AliasIndex {
    public readonly address: string = AndamioConfig.indexMS.mSCAddress;
    public readonly policy: string = AndamioConfig.indexMS.mSCPolicyID;
  
    constructor(private readonly client: UtxorpcClient) { }

    async getUtxos(): Promise<Utxo[]> {
        try {
            const utxos = await this.client.getUtxos(this.address, this.policy);
            return utxos;
        } catch (err) {
            throw new SdkError(`Failed to fetch UTXOs: ${err}`);
        }
    }
}