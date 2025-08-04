import { UtxorpcClient } from "../../common/u5c";
import { Utxo } from "../../common/utxo";

export class Stake {
    public readonly stakingScriptHash: string;

    constructor(private readonly client: UtxorpcClient) {
        this.stakingScriptHash = this.client.andamioConfig.stakingSH;
    }

    getUtxos(): Promise<Utxo[]> {
        return this.client.getUtxosByStakingPart(this.stakingScriptHash);
    }

    getTotalLovelaceStaked(): Promise<number> {
        const utxos = this.getUtxos();
        return utxos.then(utxos => {
            return utxos.reduce((total, utxo) => total + Number(utxo.parsedValued?.coin || 0), 0);
        });
    }
}