import { buildTx } from "./mint-access-token";

export class Transaction {
    public mintAccessToken = async ({ userAddress, alias }: { userAddress: string, alias: string }) => buildTx({userAddress, alias})
}