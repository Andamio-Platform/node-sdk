import AndamioSDK from "@andamiojs/sdk";

/**
 * Fetches the module reference address and UTXOs for a given course NFT policy.
 * @param sdk - The Andamio SDK instance
 * @param courseNftPolicy - The NFT policy ID of the course
 */
export async function moduleRef(sdk: AndamioSDK, courseNftPolicy: string) {
    const address = await sdk.provider.core.course.moduleRef.getAddress(courseNftPolicy);
    const utxos = await sdk.provider.core.course.moduleRef.getUtxos(courseNftPolicy);

    return {
        address,
        utxos,
    };
}

/**
 * Logs a summary of the module reference UTXOs.
 * @param info - The object returned from `moduleRef()`
 */
export function summarizeModuleRefInfo(info: any) {
    const sampleUtxos = info.utxos.slice(0, 3).map((utxo: any, i: number) => ({
        index: i,
        txoRef: utxo.txoRef,
        parsedValued: '[Output omitted]',
        nativeBytes: `[Uint8Array length=${utxo.nativeBytes.length}]`,
    }));

    console.log('ModuleRef Info Summary:\n', {
        address: info.address,
        utxos: [
            ...sampleUtxos,
            `...and ${info.utxos.length - sampleUtxos.length} more`
        ]
    });
}
