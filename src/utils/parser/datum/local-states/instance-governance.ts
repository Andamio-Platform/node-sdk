import { cardano } from "@utxorpc/spec";
import { Utxo } from "../../../../utxo";
import { bytesToHex, hexToString, stringToHex } from "@meshsdk/common";

type InstanceGovernanceDatum = {
    plutusData: {
        case: "constr";
        value: {
            constructor: number; // 121
            fields: [
                {
                    plutusData: {
                        case: "array";
                        value: {
                            items: {
                                plutusData: {
                                    case: "boundedBytes";
                                    value: Uint8Array;
                                };
                            }[]; // []
                        };
                    };
                },
                {
                    plutusData: {
                        case: "boundedBytes";
                        value: Uint8Array;
                    };
                }
            ];
        };
    };
};


export function isInstanceGovernanceDatum(datum: cardano.PlutusData): datum is cardano.PlutusData & InstanceGovernanceDatum {
    const fields = datum.plutusData?.case === "constr" ? datum.plutusData.value.fields : [];

    return (
        datum.plutusData?.case === "constr" &&
        fields.length === 2 &&
        fields[0].plutusData?.case === "array" &&
        Array.isArray(fields[0].plutusData.value.items) &&
        fields[0].plutusData.value.items.every(item =>
            item.plutusData.case === "boundedBytes" &&
            item.plutusData.value instanceof Uint8Array
        ) &&
        fields[1].plutusData?.case === "boundedBytes"
    );
}

export function instanceGovernanceDatumForPolicy(utxos: Utxo[], policies?: string[]): Array<{ policy: string; datum: InstanceGovernanceDatum }> {
    const datums = utxos.map(utxo => {
        const datum = cardano.PlutusData.fromJson(JSON.parse(JSON.stringify(utxo.parsedValued!.datum!.payload)))
        if (isInstanceGovernanceDatum(datum)) {
            const policy = bytesToHex(datum.plutusData.value.fields[1].plutusData.value);
            return {
                policy: policy,
                datum: datum
            }
        }
    })
    if (policies) {
        return datums.filter(datum => datum !== undefined && policies.includes(datum.policy)) as Array<{ policy: string; datum: InstanceGovernanceDatum }>;
    } else {
        return datums.filter(datum => datum !== undefined)
    }
}

export function instanceGovernancePoliciesForAlias(utxos: Utxo[], alias: string): string[] {
    const datums = instanceGovernanceDatumForPolicy(utxos);
    return datums
        .filter(datum => datum.datum.plutusData.value.fields[0].plutusData.value.items.some(item => {
            return hexToString(bytesToHex(item.plutusData.value)).substring(3) === alias
        }))
        .map(datum => datum.policy);
}