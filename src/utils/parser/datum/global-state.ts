import { cardano } from "@utxorpc/spec";
import { Utxo } from "../../../common/utxo";
import { builtinByteString, bytesToHex, conStr0, conStr1, hexToString, list, stringToHex } from "@meshsdk/common";
import { UtxorpcClient } from "../../../common/u5c";

type Credentials = {
    plutusData: {
        case: "constr";
        value: {
            constructor: number; // 121
            fields: [
                {
                    plutusData: {
                        case: "boundedBytes";
                        value: Uint8Array;
                    };
                },
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
                        case: "constr";
                        value: {
                            constructor: number; // 122
                            fields: []; // []
                        };
                    };
                }
            ];
        };
    };
};


type GlobalStateDatum = {
    plutusData: {
        case: "constr";
        value: {
            constructor: number; // usually the same as tag
            fields: [
                {
                    plutusData: {
                        case: "boundedBytes";
                        value: Uint8Array;
                    };
                },
                {
                    plutusData: {
                        case: "boundedBytes";
                        value: Uint8Array;
                    };
                },
                {
                    plutusData: {
                        case: "array";
                        value: {
                            items: Credentials[];
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

export function isGlobalStateDatum(
    data: cardano.PlutusData
): data is cardano.PlutusData & GlobalStateDatum {
    const fields = data.plutusData?.case === "constr" ? data.plutusData.value.fields : [];

    return (
        data.plutusData?.case === "constr" &&
        fields.length === 4 &&
        fields[0].plutusData?.case === "boundedBytes" &&
        fields[1].plutusData?.case === "boundedBytes" &&
        fields[2].plutusData?.case === "array" &&
        Array.isArray(fields[2].plutusData.value.items) &&
        fields[2].plutusData.value.items.every(localState => {
            if (
                localState.plutusData?.case !== "constr" ||
                localState.plutusData.value.fields.length !== 3
            )
                return false;

            const [f0, f1, f2] = localState.plutusData.value.fields;

            return (
                f0.plutusData?.case === "boundedBytes" &&
                f1.plutusData?.case === "array" &&
                Array.isArray(f1.plutusData.value.items) &&
                f1.plutusData.value.items.every(
                    (item: any) => item.plutusData?.case === "boundedBytes"
                ) &&
                f2.plutusData?.case === "constr" &&
                Array.isArray(f2.plutusData.value.fields) &&
                f2.plutusData.value.fields.length === 0
            );
        }) &&
        fields[3].plutusData?.case === "boundedBytes"
    );
}

export function DatumForAlias(utxos: Utxo[]): Array<{ alias: string; datum: GlobalStateDatum }> {
    const datums = utxos.map(utxo => {
        const datum = cardano.PlutusData.fromJson(JSON.parse(JSON.stringify(utxo.parsedValued!.datum!.payload)))
        if (isGlobalStateDatum(datum)) {
            const alias = hexToString(bytesToHex(datum.plutusData.value.fields[1].plutusData.value));
            return {
                alias: alias,
                datum: datum
            }
        }
    });
    return datums.filter(datum => datum !== undefined);
}


export function meshGlobalStateDatum(client: UtxorpcClient, alias: string, info?: string) {
    const accessTokenPolicyId = client.andamioConfig.indexMS.mSCPolicyID;
    const tokenNameHex = stringToHex(alias);
    const infoHex = info ? stringToHex(info) : "20";
    return conStr0([
        builtinByteString(accessTokenPolicyId),
        builtinByteString(tokenNameHex),
        list([]),
        builtinByteString(infoHex)
    ])
}


export function toMeshGlobalStateDatum(
    datum: GlobalStateDatum,
    newLocalStatePolicy?: string
) {
    let credentialsPart = []
    for (const credential of datum.plutusData.value.fields[2].plutusData.value.items) {
        const parseIsCompletedPart = JSON.parse(JSON.stringify(credential.plutusData.value.fields[2].plutusData.value));
        const isCompleted = parseIsCompletedPart.tag === 121;
        const credentialData = conStr0([
            builtinByteString(bytesToHex(credential.plutusData.value.fields[0].plutusData.value)),
            list(credential.plutusData.value.fields[1].plutusData.value.items.map(item => {
                return builtinByteString(bytesToHex(item.plutusData.value))
            })),
            isCompleted ? conStr0([]) : conStr1([])
        ])
        credentialsPart.push(credentialData);
    }
    if (newLocalStatePolicy) {
        credentialsPart.push(conStr0([
            builtinByteString(newLocalStatePolicy),
            list([]),
            conStr1([]),
        ]));
    }
    return conStr0([
        builtinByteString(bytesToHex(datum.plutusData.value.fields[0].plutusData.value)),
        builtinByteString(bytesToHex(datum.plutusData.value.fields[1].plutusData.value)),
        list(credentialsPart),
        builtinByteString(bytesToHex(datum.plutusData.value.fields[3].plutusData.value))
    ])
}

