import AndamioSDK from "@andamiojs/sdk";

export async function globalState(sdk: AndamioSDK) {
    const address = sdk.provider.core.network.globalState.address;
    const policy = sdk.provider.core.network.globalState.policy;
    const utxos = await sdk.provider.core.network.globalState.getUtxos();
    const utxoByAlias_genesis = await sdk.provider.core.network.globalState.getUtxoByAlias("  ");

    return {
        address,
        policy,
        utxos,
        utxoByAlias: utxoByAlias_genesis,
    };
}

export function summarizeGlobalStateInfo(info: any) {
    const sampleUtxos = info.utxos.slice(0, 3).map((utxo: any, i: number) => ({
        index: i,
        txoRef: utxo.txoRef,
        parsedValued: '[Output omitted]',
        nativeBytes: `[Uint8Array length=${utxo.nativeBytes.length}]`,
    }));

    console.log('Global State Info Summary:\n', {
        address: info.address,
        policy: info.policy,
        utxos: [
            ...sampleUtxos,
            `...and ${info.utxos.length - sampleUtxos.length} more`
        ],
        utxoByAlias_genesis: {
            txoRef: info.utxoByAlias_genesis.txoRef,
            parsedValued: '[Output omitted]',
            nativeBytes: `[Uint8Array length=${info.utxoByAlias_genesis.nativeBytes.length}]`
        }
    });
}