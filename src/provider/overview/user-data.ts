import { cardano } from "@utxorpc/spec";
import { Core } from "../core";
import { allInstances as allInstancesList } from "./all-instances";
import { bytesToHex, hexToString } from "@meshsdk/common";
import { SdkError } from "../../common/error";

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

            const challenges = ((challengesField as cardano.PlutusData).plutusData
                .value as cardano.PlutusDataArray).items.map((c) =>
                    bytesToHex(c.plutusData.value as Uint8Array)
                );

            const completed =
                ((completedField as cardano.PlutusData).plutusData.value as cardano.Constr).tag === 121;

            const instance: Instance = { policy, challenges, completed };

            if (allInstances.courses.includes(policy)) {
                courses.push(instance);
            } else if (allInstances.projects.includes(policy)) {
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