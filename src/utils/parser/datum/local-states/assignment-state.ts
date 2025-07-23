import { builtinByteString, conStr0, conStr1, deserializeAddress, list, stringToHex } from "@meshsdk/core";

export function SerializeAddressToDatumStakedScriptAddress(address: string) {
    const addressObj = deserializeAddress(address);
    return conStr0([
        conStr1([
            builtinByteString(addressObj.scriptHash)
        ]),
        conStr0([
            conStr0([
                conStr1([builtinByteString(addressObj.stakeScriptCredentialHash)])
            ])
        ])
    ])

}



export function CommitAssignmentDatum(moduleTokenName: string, courseStateTokenPolicy: string, alias: string, courseStateAddress: string, assignmentEvidenceInHex?: string) {
    const courseStateAddressDatum = SerializeAddressToDatumStakedScriptAddress(courseStateAddress);
    return conStr0([
        builtinByteString(stringToHex(moduleTokenName)),
        assignmentEvidenceInHex ? conStr0([builtinByteString(assignmentEvidenceInHex)]) : conStr1([]),
        builtinByteString(courseStateTokenPolicy),
        builtinByteString(stringToHex(alias)),
        courseStateAddressDatum,
        list([])
    ])
}