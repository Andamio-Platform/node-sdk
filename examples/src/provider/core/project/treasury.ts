import AndamioSDK from "@andamiojs/sdk";

/**
 * Fetches the treasury address and UTXOs for a given project policy.
 * @param sdk - The Andamio SDK instance
 * @param projectNftPolicy - The NFT policy ID of the project
 */
export async function treasury(sdk: AndamioSDK, projectNftPolicy: string) {
    const address = await sdk.provider.core.project.treasury.getAddress(projectNftPolicy);
    const utxos = await sdk.provider.core.project.treasury.getUtxos(projectNftPolicy);

    return {
        address,
        utxos,
    };
}

/**
 * Logs a summary of the treasury UTXOs.
 * @param info - The object returned from `treasury()`
 */
export function summarizeTreasuryInfo(info: any) {
    const sampleUtxos = info.utxos.slice(0, 3).map((utxo: any, i: number) => ({
        index: i,
        txoRef: utxo.txoRef,
        parsedValued: '[Output omitted]',
        nativeBytes: `[Uint8Array length=${utxo.nativeBytes.length}]`,
    }));

    console.log('Treasury Info Summary:\n', {
        address: info.address,
        utxos: [
            ...sampleUtxos,
            `...and ${info.utxos.length - sampleUtxos.length} more`
        ]
    });
}
