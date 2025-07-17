import { SdkError } from "../../common/error";
import { Core } from "../core";

export async function aliasAvailability(core: Core, alias: string): Promise<boolean> {
    try {
        const utxo = await core.aliasIndex.getUtxoByNewAlias(alias);
        if (utxo) return true; // Alias exists, so not available
        throw new SdkError(`Unknown case: UTXO found but alias availability unclear for "${alias}"`);
    } catch (error) {
        if (error instanceof Error && error.message.includes('Alias already exists')) {
            return false; // Alias exists, so not available
        }
        throw new SdkError(`Failed to check alias availability: ${error}`);
    }
}