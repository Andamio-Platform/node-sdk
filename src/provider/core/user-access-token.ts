import { stringToHex } from "@meshsdk/common";
import { UtxorpcClient } from "../../common/u5c";
import { rpcUtxoToMeshUtxo, Utxo } from "../../common/utxo";

export class UserAccessToken {

    constructor(private readonly client: UtxorpcClient) { }

    async getUtxoByAlias(alias: string): Promise<Utxo> {
        try {
            const accessTokenPolicyId = this.client.andamioConfig.indexMS.mSCPolicyID;
            const tokenNameHex =  "323232" + stringToHex(alias)
            const utxos = await this.client.getUtxosByAsset(accessTokenPolicyId, tokenNameHex);
            if (utxos.length === 0) {
                throw new Error(`No UTXOs found for alias: ${alias}`);
            }
            return utxos[0]; // Return the first UTXO found
        } catch (err) {
            throw new Error(`Failed to fetch UTXO by alias: ${err}`);
        }
    }

    async getAddressByAlias(alias: string): Promise<string> {
        try {
            const utxo = await this.getUtxoByAlias(alias);
            return rpcUtxoToMeshUtxo(utxo).output.address;
        } catch (err) {
            throw new Error(`Failed to fetch address by alias: ${err}`);
        }
    }
}