import { logger } from "../logger";

export interface AliasIndexDatum {
    tag: number;
    anyConstructor: bigint;
    fields: [any, any];
}

/**
 * Parse a generic PlutusData into an AliasIndexDatum
 * Returns null if invalid.
 */
export function parseAliasIndexDatum(data: any): AliasIndexDatum | null {
    if (data.case !== "constr") {
        console.warn("[parseAliasIndexDatum] Expected constr, got", data.case);
        return null;
    }

    const constr = data.value;

    if (!constr || constr.fields.length !== 2) {
        console.warn("[parseAliasIndexDatum] Expected exactly 2 fields");
        return null;
    }

    const [field0, field1] = constr.fields;

    if (field0.plutusData.case !== "boundedBytes" || field1.plutusData.case !== "boundedBytes") {
        console.warn("[parseAliasIndexDatum] Fields must be boundedBytes, got", field0.plutusData.case, field1.plutusData.case);
        return null;
    }

    return {
        tag: constr.tag,
        anyConstructor: BigInt(constr.anyConstructor),
        fields: [field0.plutusData.value, field1.plutusData.value],
    };
}
