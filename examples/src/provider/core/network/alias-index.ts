import AndamioSDK from "@andamiojs/sdk";

/**
 * Fetch alias index related UTXOs and address details.
 * @param sdk - Instance of AndamioSDK
 * @returns An object containing address, policy, and alias-index UTXOs
 */
export async function aliasIndex(sdk: AndamioSDK) {
    const address = sdk.provider.core.network.aliasIndex.address;
    const policy = sdk.provider.core.network.aliasIndex.policy;
    const utxos = await sdk.provider.core.network.aliasIndex.getUtxos();

    return {
        address,
        policy,
        utxos,
    };
}

/**
 * Summarizes alias index UTXOs and logs details for inspection.
 * @param info - Object containing address, policy, and UTXOs
 */
export function summarizeAliasIndexInfo(info: any) {
    const sampleUtxos = info.utxos.slice(0, 3).map((utxo: any, i: number) => ({
        index: i,
        txoRef: utxo.txoRef,
        parsedValued: '[Output omitted]',
        nativeBytes: `[Uint8Array length=${utxo.nativeBytes.length}]`,
    }));

    console.log('Alias Index Info Summary:\n', {
        address: info.address,
        policy: info.policy,
        utxos: [
            ...sampleUtxos,
            `...and ${info.utxos.length - sampleUtxos.length} more`
        ],
    });
}
