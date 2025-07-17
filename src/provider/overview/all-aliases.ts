import { bytesToHex, hexToString } from "@meshsdk/common";
import { cardano } from "@utxorpc/spec";
import { SdkError } from "../../common/error";
import { Core } from "../core";

export async function allAliases(core: Core): Promise<string[]> {
    try {
        const utxos = await core.globalState.getUtxos();

        return utxos.map((utxo) => {
            const aliasBytes = (
                (utxo.parsedValued?.datum?.payload?.plutusData.value as cardano.Constr)
                    .fields[1] as cardano.PlutusData
            ).plutusData.value as Uint8Array;

            return hexToString(bytesToHex(aliasBytes));
        });
    } catch (err) {
        throw new SdkError(`Failed to fetch all aliases: ${err}`);
    }
}