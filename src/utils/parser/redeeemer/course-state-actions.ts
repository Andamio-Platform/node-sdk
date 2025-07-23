import { builtinByteString, conStr0, conStr1, stringToHex } from "@meshsdk/common";

export function CourseStateCommitAssignmentAction(alias: string, moduleTokenName: string, assignmentEvidenceInHex?: string) {
    return conStr1([
        conStr0([
            builtinByteString(stringToHex(alias)),
            builtinByteString(stringToHex(moduleTokenName)),
            assignmentEvidenceInHex ? conStr0([builtinByteString(assignmentEvidenceInHex)]) : conStr1([])
        ])
    ])
}