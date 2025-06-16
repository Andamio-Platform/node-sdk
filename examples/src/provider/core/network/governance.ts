import AndamioSDK from "@andamiojs/sdk";

/**
 * Fetch governance-related UTXOs and address details.
 * @param sdk - Instance of AndamioSDK
 * @returns An object containing the governance address and filtered UTXOs
 */
export async function governance(sdk: AndamioSDK) {
    const address = sdk.provider.core.network.governance.address;
    const utxos = await sdk.provider.core.network.governance.getUtxos();

    return {
        address,
        utxos,
    };
}

/**
 * Summarizes governance UTXOs and logs details for inspection.
 * @param info - Object containing address and UTXOs
 */
export function summarizeGovernanceInfo(info: any) {
    const sampleUtxos = info.utxos.slice(0, 3).map((utxo: any, i: number) => ({
        index: i,
        txoRef: utxo.txoRef,
        parsedValued: '[Output omitted]',
        nativeBytes: `[Uint8Array length=${utxo.nativeBytes.length}]`,
    }));

    console.log('Governance Info Summary:\n', {
        address: info.address,
        utxos: [
            ...sampleUtxos,
            `...and ${info.utxos.length - sampleUtxos.length} more`
        ],
    });
}
