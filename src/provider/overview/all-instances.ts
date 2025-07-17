import { cardano } from "@utxorpc/spec";
import { Core } from "../core";
import { bytesToHex, stringToHex } from "@meshsdk/common";
import { SdkError } from "../../common/error";

export async function allInstances(core: Core): Promise<{ courses: string[]; projects: string[] }> {
    try {
        const utxos = await core.localStates.instanceGovernance.getUtxos();
        const courses: string[] = [];
        const projects: string[] = [];

        for (const utxo of utxos) {
            const datum = utxo.parsedValued?.datum?.payload?.plutusData.value as cardano.Constr;

            const instancePolicyField = datum.fields[1] as cardano.PlutusData;
            if (instancePolicyField.plutusData.case !== "boundedBytes") continue;

            const policy = bytesToHex(instancePolicyField.plutusData.value);
            const assetNameHexes = utxo.parsedValued?.assets.flatMap((asset) =>
                asset.assets.map((item) => bytesToHex(item.name))
            );

            if (!assetNameHexes) continue;

            if (assetNameHexes.includes(stringToHex("CourseNFT"))) {
                courses.push(policy);
            } else if (assetNameHexes.includes(stringToHex("ProjectNFT"))) {
                projects.push(policy);
            }
        }

        return { courses, projects };
    } catch (err) {
        throw new SdkError(`Failed to fetch all instances: ${err}`);
    }
}