import { BuiltinByteString, builtinByteString, conStr0, conStr1, deserializeAddress, List, list, stringToHex } from "@meshsdk/core";
import { SerializeAddressToDatumStakedScriptAddress } from "../../../cardano/serialize-address-to-datum-staked-script-address";

export function AssignmentStateDatum(moduleTokenName: string, courseStateTokenPolicy: string, alias: string, courseStateAddress: string, courseStateDatum: List<BuiltinByteString>, assignmentEvidenceInHex?: string) {
    const courseStateAddressDatum = SerializeAddressToDatumStakedScriptAddress(courseStateAddress);
    return conStr0([
        builtinByteString(stringToHex(moduleTokenName)),
        assignmentEvidenceInHex ? conStr0([builtinByteString(assignmentEvidenceInHex)]) : conStr1([]),
        builtinByteString(courseStateTokenPolicy),
        builtinByteString(stringToHex(alias)),
        courseStateAddressDatum,
        courseStateDatum
    ])
}