import { UtxorpcClient } from "../../../u5c";
import { SdkError } from "../../../error";
import { Utxo } from "../../../utxo";

export class AliasIndex {
    public readonly address: string;
    public readonly policy: string;
  
    constructor(private readonly client: UtxorpcClient) {
        this.address = this.client.andamioConfig.indexMS.mSCAddress;
        this.policy = this.client.andamioConfig.indexMS.mSCPolicyID;
    }

    async getUtxos(): Promise<Utxo[]> {
        try {
            const utxos = await this.client.getUtxos(this.address, this.policy);
            return utxos;
        } catch (err) {
            throw new SdkError(`Failed to fetch UTXOs: ${err}`);
        }
    }
}