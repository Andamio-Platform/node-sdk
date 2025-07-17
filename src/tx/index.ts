import { UtxorpcClient } from "../common/u5c";
import { Provider } from "../provider";
import { buildTx } from "./mint-access-token";
import { buildTxSponsor } from "./sponsor-mint-access-token";

export class Transaction {

    constructor(private readonly client: UtxorpcClient, private readonly provider: Provider) { }

    public mintAccessToken = async ({ userAddress, alias }: { userAddress: string, alias: string }) => buildTx({ client: this.client, provider: this.provider, userAddress, alias })

    public sponsorMintAccessToken = async ({ userAddress, alias }: { userAddress: string, alias: string }) => buildTxSponsor({ client: this.client, provider: this.provider, userAddress, alias })
}