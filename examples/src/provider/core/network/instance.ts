import AndamioSDK from "@andamiojs/sdk";

/**
 * Fetches all UTXOs from the instance address.
 * @param sdk - The Andamio SDK instance
 */
export async function instance(sdk: AndamioSDK) {
    const address = sdk.provider.core.network.instance.address;
    const policy = sdk.provider.core.network.instance.policy;
    const utxos = await sdk.provider.core.network.instance.getUtxos();
    // Optionally, you can fetch specific UTXOs by the instance's policy
    const utxosByPolicy = await sdk.provider.core.network.instance.getUtxos("07ce13dd93e5c2721cbf3241f83a11a65a50fc2281d15490a3c961af");
    // If you need to fetch UTXOs by a specific filter, you can do so as well
    const utxosByFilter = await sdk.provider.core.network.instance.getUtxos(undefined, "TreasuryScripts");
    // Or both
    const utxoByPolicyAndFilter = await sdk.provider.core.network.instance.getUtxos("07ce13dd93e5c2721cbf3241f83a11a65a50fc2281d15490a3c961af", "TreasuryScripts");

    return {
        address,
        policy,
        utxos,
        utxosByPolicy,
        utxosByFilter,
        utxoByPolicyAndFilter,
    };
}

/**
 * Logs a summary of the instance UTXOs.
 * @param info - The object returned from `instance()`
 */
export function summarizeInstanceInfo(info: any) {
    function preview(label: string, utxos: any[]) {
        const sample = utxos.slice(0, 2).map((utxo: any, i: number) => ({
            index: i,
            txoRef: utxo.txoRef,
            parsedValued: '[Output omitted]',
            nativeBytes: `[Uint8Array length=${utxo.nativeBytes.length}]`,
        }));
        return {
            label,
            sample,
            count: utxos.length,
        };
    }

    console.log('Instance Info Summary:\n', {
        address: info.address,
        policy: info.policy,
        utxos: preview('All', info.utxos),
        utxosByPolicy: preview('By Policy', info.utxosByPolicy),
        utxosByFilter: preview('By Filter', info.utxosByFilter),
        utxoByPolicyAndFilter: preview('By Policy + Filter', info.utxoByPolicyAndFilter),
    });
}

