import AndamioSDK from "@andamiojs/sdk";

/**
 * Fetches the assignment state address and UTXOs for a given course NFT policy.
 * @param sdk - The Andamio SDK instance
 * @param courseNftPolicy - The NFT policy ID of the course
 */
export async function assignmentState(sdk: AndamioSDK, courseNftPolicy: string) {
    const address = await sdk.provider.core.course.assignmentState.getAddress(courseNftPolicy);
    const utxos = await sdk.provider.core.course.assignmentState.getUtxos(courseNftPolicy);

    return {
        address,
        utxos,
    };
}

/**
 * Logs a summary of the assignment state UTXOs.
 * @param info - The object returned from `assignmentState()`
 */
export function summarizeAssignmentStateInfo(info: any) {
    const sampleUtxos = info.utxos.slice(0, 3).map((utxo: any, i: number) => ({
        index: i,
        txoRef: utxo.txoRef,
        parsedValued: '[Output omitted]',
        nativeBytes: `[Uint8Array length=${utxo.nativeBytes.length}]`,
    }));

    console.log('AssignmentState Info Summary:\n', {
        address: info.address,
        utxos: [
            ...sampleUtxos,
            `...and ${info.utxos.length - sampleUtxos.length} more`
        ]
    });
}
