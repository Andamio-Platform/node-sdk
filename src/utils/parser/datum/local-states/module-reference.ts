import { builtinByteString, conStr0, conStr1, list, stringToHex } from "@meshsdk/common";
import { SerializeAddressToDatumStakedScriptAddress } from "../../../cardano/serialize-address-to-datum-staked-script-address";

export type ModuleDetails = {
    moduleTokenName: string;
    slts: {
        sltId: string;
        sltDescription: string;
    }[];
    assignment?: {
        assignmentDescription: string;
        assignmentDecider: string;  // address
        allowedStudents: string[];  // course local state token policies
        prerequisites: string[];  // module token names of prerequisite modules
    };
}

export function ModuleReferenceDatum(moduleDetails: ModuleDetails) {
    const { moduleTokenName, slts, assignment } = moduleDetails;

    const sltDetailsList = slts.map(slt => conStr0([
        builtinByteString(stringToHex(slt.sltId)),
        builtinByteString(stringToHex(slt.sltDescription))
    ]));

    let assignmentDetails
    if (assignment) {
        const deciderAddress = SerializeAddressToDatumStakedScriptAddress(assignment.assignmentDecider)
        assignmentDetails = conStr0([
            conStr0([
                builtinByteString(stringToHex(assignment.assignmentDescription)),
                deciderAddress,
                list(assignment.allowedStudents.map(s => builtinByteString(s))),
                list(assignment.prerequisites.map(p => builtinByteString(stringToHex(p))))
            ])
        ]);
    }

    return conStr0([
        list(sltDetailsList),
        assignment ? assignmentDetails : conStr1([])
    ])
}
