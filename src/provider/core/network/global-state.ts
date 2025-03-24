import { UtxorpcClient } from "../../../u5c";
import { SdkError } from "../../../error";
import { Utxo } from "../../../utxo";
import { bytesToHex, hexToString } from "@meshsdk/common";

export class GlobalState {
    public readonly address: string;
    public readonly policy: string;

    constructor(private readonly client: UtxorpcClient) {
        this.address = this.client.andamioConfig.globalStateS.sCAddress;
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

    async getUtxoByAlias(alias: string): Promise<Utxo> {
        try {
            let utxo = await this.client.getUtxos(this.address, this.policy, alias);
            utxo = byAlias({
                utxos: utxo,
                alias,
            });
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


// remove when utxorpc node-sdk gets updated
function byAlias({
    utxos,
    alias,
}: {
    utxos: Utxo[];
    alias: string;
}): Utxo[] {
    const aliasUtxo = utxos.filter((utxo) =>
        utxo.parsedValued?.assets?.some((asset) =>
            asset.assets.some((a) => hexToString(bytesToHex(a.name).substring(6)) === alias),
        ),
    );

    return aliasUtxo;
}
// till here