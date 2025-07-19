import { cardano } from "@utxorpc/spec";


export type IndexReferenceDatum = {
    plutusData: {
        case: "constr";
        value: {
            constructor: number; // 121
            fields: [
                {
                    plutusData: {
                        case: "constr";
                        value: {
                            constructor: number; // 121
                            fields: [
                                {
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
                                                }
                                            ];
                                        };
                                    };
                                },
                                {
                                    plutusData: {
                                        case: "constr";
                                        value: {
                                            constructor: number; // 121
                                            fields: [
                                                {
                                                    plutusData: {
                                                        case: "constr";
                                                        value: {
                                                            constructor: number; // 121
                                                            fields: [
                                                                {
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
                                                                                }
                                                                            ];
                                                                        };
                                                                    };
                                                                }
                                                            ];
                                                        };
                                                    };
                                                }
                                            ];
                                        };
                                    };
                                }
                            ];
                        };
                    };
                },
                {
                    plutusData: {
                        case: "constr";
                        value: {
                            constructor: number; // 121
                            fields: [];
                        };
                    };
                },
                {
                    plutusData: {
                        case: "array";
                        value: {
                            items: {
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
                                                    case: "boundedBytes";
                                                    value: Uint8Array;
                                                };
                                            },
                                            {
                                                plutusData: {
                                                    case: "bigInt";
                                                    value: string;
                                                };
                                            }
                                        ];
                                    };
                                };
                            }[];
                        };
                    };
                },
                {
                    plutusData: {
                        case: "array";
                        value: {
                            items: {
                                plutusData: {
                                    case: "constr";
                                    value: {
                                        constructor: number; // 122
                                        fields: [
                                            {
                                                plutusData: {
                                                    case: "boundedBytes";
                                                    value: Uint8Array;
                                                };
                                            }
                                        ];
                                    };
                                };
                            }[];
                        };
                    };
                }
            ];
        };
    };
};


export function isIndexReferenceDatum(
    data: cardano.PlutusData
): data is cardano.PlutusData & IndexReferenceDatum {
    const fields = data.plutusData?.case === "constr" ? data.plutusData.value.fields : [];

    if (
        data.plutusData?.case !== "constr" ||
        fields.length !== 4
    ) {
        return false;
    }

    // Check field 0: nested constr structure
    const field0 = fields[0];
    if (field0.plutusData?.case !== "constr" || field0.plutusData.value.fields.length !== 2) {
        return false;
    }

    const f0_0 = field0.plutusData.value.fields[0];
    const f0_1 = field0.plutusData.value.fields[1];

    if (
        f0_0.plutusData?.case !== "constr" ||
        f0_0.plutusData.value.fields.length !== 1 ||
        f0_0.plutusData.value.fields[0].plutusData?.case !== "boundedBytes"
    ) {
        return false;
    }

    if (
        f0_1.plutusData?.case !== "constr" ||
        f0_1.plutusData.value.fields.length !== 1
    ) {
        return false;
    }

    const f0_1_0 = f0_1.plutusData.value.fields[0];
    if (
        f0_1_0.plutusData?.case !== "constr" ||
        f0_1_0.plutusData.value.fields.length !== 1
    ) {
        return false;
    }

    const f0_1_0_0 = f0_1_0.plutusData.value.fields[0];
    if (
        f0_1_0_0.plutusData?.case !== "constr" ||
        f0_1_0_0.plutusData.value.fields.length !== 1 ||
        f0_1_0_0.plutusData.value.fields[0].plutusData?.case !== "boundedBytes"
    ) {
        return false;
    }

    // Check field 1: constr with empty fields
    const field1 = fields[1];
    if (
        field1.plutusData?.case !== "constr" ||
        field1.plutusData.value.fields.length !== 0
    ) {
        return false;
    }

    // Check field 2: array of constr with 3 fields (boundedBytes, boundedBytes, bigInt)
    const field2 = fields[2];
    if (
        field2.plutusData?.case !== "array" ||
        !Array.isArray(field2.plutusData.value.items)
    ) {
        return false;
    }

    const field2Valid = field2.plutusData.value.items.every(item => {
        if (
            item.plutusData?.case !== "constr" ||
            item.plutusData.value.fields.length !== 3
        ) {
            return false;
        }

        const [f0, f1, f2] = item.plutusData.value.fields;
        return (
            f0.plutusData?.case === "boundedBytes" &&
            f1.plutusData?.case === "boundedBytes" &&
            f2.plutusData?.case === "bigInt"
        );
    });

    if (!field2Valid) {
        return false;
    }

    // Check field 3: array of constr with 1 field (boundedBytes)
    const field3 = fields[3];
    if (
        field3.plutusData?.case !== "array" ||
        !Array.isArray(field3.plutusData.value.items)
    ) {
        return false;
    }

    const field3Valid = field3.plutusData.value.items.every(item => {
        return (
            item.plutusData?.case === "constr" &&
            item.plutusData.value.fields.length === 1 &&
            item.plutusData.value.fields[0].plutusData?.case === "boundedBytes"
        );
    });

    return field3Valid;
}