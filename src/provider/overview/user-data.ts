import { cardano } from "@utxorpc/spec";
import { Core } from "../core";
import { allInstances as allInstancesList } from "./all-instances";
import { bytesToHex, hexToString } from "@meshsdk/common";
import { SdkError } from "../../common/error";
import { isCourseStateDatum } from "../../utils/parser/datum/local-states/course-state";

/**
 * Structure containing user's courses and projects data.
 */
export type AliasData = {
    courses: Instance[];
    projects: Instance[];
};

/**
 * Represents an instance with policy ID, challenges, and completion status.
 */
type Instance = {
    policy: string;
    challenges: string[];
    completed: boolean;
    completedChallengesInLocalState: string[] | null;
};



export async function userData(core: Core, alias: string): Promise<{ info: string; data: AliasData }> {
    try {
        const utxo = await core.globalState.getUtxoByAlias(alias);
        const allInstances = await allInstancesList(core);

        const datum = utxo.parsedValued?.datum?.payload?.plutusData.value as cardano.Constr;

        const infoBytes = (datum.fields[3] as cardano.PlutusData).plutusData.value as Uint8Array;
        const dataArray = (datum.fields[2] as cardano.PlutusData).plutusData
            .value as cardano.PlutusDataArray;

        const dataItems = dataArray.items ?? [];

        const courses: Instance[] = [];
        const projects: Instance[] = [];

        for (const item of dataItems) {
            const [policyField, challengesField, completedField] = (item.plutusData
                .value as cardano.Constr).fields;

            const policy = bytesToHex(
                (policyField as cardano.PlutusData).plutusData.value as Uint8Array
            );
            const localStateType: "course" | "project" | "unknown" = allInstances.courses.includes(policy)
                ? "course"
                : allInstances.projects.includes(policy)
                    ? "project"
                    : "unknown";

            const challenges = ((challengesField as cardano.PlutusData).plutusData
                .value as cardano.PlutusDataArray).items.map((c) =>
                    bytesToHex(c.plutusData.value as Uint8Array)
                );

            const completed =
                ((completedField as cardano.PlutusData).plutusData.value as cardano.Constr).tag === 121;

            let completedChallengesInLocalState: string[] | null = null;
            if (!completed) {
                completedChallengesInLocalState = await getCompletedLocalStateChallenges(core, policy, localStateType, alias);
            }

            const instance: Instance = { policy, challenges, completed, completedChallengesInLocalState };

            if (localStateType === "course") {
                courses.push(instance);
            } else if (localStateType === "project") {
                projects.push(instance);
            }
        }

        return {
            info: hexToString(bytesToHex(infoBytes)),
            data: { courses, projects },
        };
    } catch (err) {
        throw new SdkError(`Failed to fetch user data: ${err}`);
    }
}

async function getCompletedLocalStateChallenges(
    core: Core,
    policy: string,
    localStateType: "course" | "project" | "unknown",
    alias: string
): Promise<string[]> {
    const completedLocalStateChallenges: string[] = [];
    if (localStateType === "course") {
        try {
            const courseState = await core.localStates.course.courseState.getUtxoByAlias(policy, alias);
            const datum = courseState.parsedValued?.datum?.payload;
            if (isCourseStateDatum(datum)) {
                datum.plutusData.value.items.map(item => completedLocalStateChallenges.push(hexToString(bytesToHex(item.plutusData.value as Uint8Array))));
            }
        } catch (err) {
            if (err instanceof SdkError && err.message.includes("No UTXO found with the specified courseId and alias")) {
                const assignmentState = await core.localStates.course.assignmentState.getUtxoByAlias(policy, alias);
                const datum = assignmentState.parsedValued?.datum?.payload?.plutusData.value as cardano.Constr;
                const courseStateDatum = datum.fields[5] as cardano.PlutusData;
                if (isCourseStateDatum(courseStateDatum)) {
                    courseStateDatum.plutusData.value.items.map(item => completedLocalStateChallenges.push(hexToString(bytesToHex(item.plutusData.value as Uint8Array))));
                }
            }
            throw err;
        }
    } else if (localStateType === "project") {
        // TODO: Implement project local state challenge fetching
    }
    return completedLocalStateChallenges;
}