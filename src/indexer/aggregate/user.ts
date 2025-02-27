import { UtxorpcClient } from "~/client";
import { Core } from "../core";
import { SdkError } from "~/utils";
import { bytesToHex, stringToHex } from "@meshsdk/common";
import { cardano } from "@utxorpc/spec";

export class UserInfo {
    private core: Core;

    constructor(private readonly client: UtxorpcClient) {
        this.core = new Core(this.client);
    }

    async joined(alias: string): Promise<number> {
        try {
            const utxos = await this.core.globalState.getUtxos();
            const userUtxo = utxos.find((utxo) => utxo.parsedValued.assets.some((asset) => asset.assets.some((a) => bytesToHex(a.name).substring(6) === stringToHex(alias))));
            const datum = userUtxo.parsedValued.datum.payload.plutusData.value as cardano.Constr
            const joined = datum.fields[2].plutusData.value as cardano.PlutusDataArray
            return joined.items.length;
        } catch (err) {
            throw new SdkError(`Failed to fetch user data: ${err}`);
        }
    }
}