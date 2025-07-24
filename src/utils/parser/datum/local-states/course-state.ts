import { builtinByteString, bytesToHex, list, stringToHex } from "@meshsdk/common";
import { cardano } from "@utxorpc/spec";

type CourseStateDatum = {
    plutusData: {
        case: "array";
        value: {
            items: {
                plutusData: {
                    case: "boundedBytes";
                    value: Uint8Array;
                };
            }[];
        };
    };
}

export function isCourseStateDatum(datum: any): datum is cardano.PlutusData & CourseStateDatum {
    return datum.plutusData?.case === "array" && Array.isArray(datum.plutusData.value.items) && datum.plutusData.value.items.every((item: { plutusData: { case: string; }; }) => item.plutusData?.case === "boundedBytes");
}

export function toMeshCourseStateDatum(
    datum: CourseStateDatum,
    newCompletedAssignments?: string
) {
    const completedAssignmentsList = datum.plutusData.value.items.map(item => builtinByteString(bytesToHex(item.plutusData.value)))
    if (newCompletedAssignments) {
        completedAssignmentsList.push(builtinByteString(stringToHex(newCompletedAssignments)));
    }
    return list(completedAssignmentsList)
}