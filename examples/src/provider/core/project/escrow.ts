import AndamioSDK from "@andamiojs/sdk";

/**
 * Fetches the escrow address and UTXOs for a given project policy.
 * @param sdk - The Andamio SDK instance
 * @param projectNftPolicy - The NFT policy ID of the project
 */
export async function escrow(sdk: AndamioSDK, projectNftPolicy: string) {
    const address = await sdk.provider.core.project.escrow.getAddress(projectNftPolicy);
    const utxos = await sdk.provider.core.project.escrow.getUtxos(projectNftPolicy);

    return {
        address,
        utxos,
    };
}

/**
 * Logs a summary of the escrow UTXOs.
 * @param info - The object returned from `escrow()`
 */
export function summarizeEscrowInfo(info: any) {
    const sampleUtxos = info.utxos.slice(0, 3).map((utxo: any, i: number) => ({
        index: i,
        txoRef: utxo.txoRef,
        parsedValued: '[Output omitted]',
        nativeBytes: `[Uint8Array length=${utxo.nativeBytes.length}]`,
    }));

    console.log('Escrow Info Summary:\n', {
        address: info.address,
        utxos: [
            ...sampleUtxos,
            `...and ${info.utxos.length - sampleUtxos.length} more`
        ]
    });
}
