import { bytesToHex, hexToString } from '@meshsdk/common'
import cbor from 'cbor'
import { serializePlutusScript } from '@meshsdk/core'
import { Utxo } from '../common/utxo';
import { Network, NetworkId } from '../common/network';

function sort(utxos: Utxo[]) {
    const assets = [
        "ModuleScripts",
        "CourseStateScripts",
        "AssignmentValidator",
        "TreasuryScripts",
        "TreasuryToken",
        "Escrow1",
        "ContributorStateScripts"
    ];

    const categorized: Record<string, Utxo[]> = {};

    for (const assetName of assets) {
        categorized[assetName] = utxos.filter(utxo =>
            utxo.parsedValued?.assets?.some(asset =>
                asset.assets?.some(a => hexToString(bytesToHex(a.name)) === assetName)
            )
        );
    }

    return categorized;
}

export function InstanceAddresses(instanceUtxos: Utxo[], stakingSH: string, network: Network, policies?: string[]) {

    const sortedUtxos = sort(instanceUtxos);

    const addresses: { address: string; state: string; policy: string }[] = [];

    for (const [category, utxos] of Object.entries(sortedUtxos)) {
        for (const utxo of utxos) {
            const cborHex = bytesToHex(utxo.parsedValued?.script?.script?.value as Uint8Array<ArrayBufferLike>) || ''
            const doubleEncodedCborHex = cbor
                .encode(Buffer.from(cborHex, "hex"))
                .toString("hex");

            const serializedScript = serializePlutusScript(
                { code: doubleEncodedCborHex, version: "V3" },
                stakingSH,
                NetworkId[network],
                true,
            );

            addresses.push({
                address: serializedScript.address,
                state: category,
                policy: bytesToHex(utxo.parsedValued?.datum?.payload?.plutusData.value as Uint8Array<ArrayBufferLike>) || ''
            });
        }
    }

    if (policies) {
        return addresses.filter(address => policies.includes(address.policy));
    }

    return addresses;
}


