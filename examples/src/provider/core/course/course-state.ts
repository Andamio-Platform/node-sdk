import AndamioSDK from "@andamiojs/sdk";

/**
 * Fetches the course state address and UTXOs for a given course NFT policy.
 * @param sdk - The Andamio SDK instance
 * @param courseNftPolicy - The NFT policy ID of the course
 */
export async function courseState(sdk: AndamioSDK, courseNftPolicy: string) {
    const address = await sdk.provider.core.course.courseState.getAddress(courseNftPolicy);
    const utxos = await sdk.provider.core.course.courseState.getUtxos(courseNftPolicy);

    return {
        address,
        utxos,
    };
}

/**
 * Logs a summary of the course state UTXOs.
 * @param info - The object returned from `courseState()`
 */
export function summarizeCourseStateInfo(info: any) {
    const sampleUtxos = info.utxos.slice(0, 3).map((utxo: any, i: number) => ({
        index: i,
        txoRef: utxo.txoRef,
        parsedValued: '[Output omitted]',
        nativeBytes: `[Uint8Array length=${utxo.nativeBytes.length}]`,
    }));

    console.log('CourseState Info Summary:\n', {
        address: info.address,
        utxos: [
            ...sampleUtxos,
            `...and ${info.utxos.length - sampleUtxos.length} more`
        ]
    });
}
