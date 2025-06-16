import { bytesToHex, hexToString, stringToHex } from "@meshsdk/common";
import { SdkError } from "../../error";
import { Core } from "../core";
import { cardano } from "@utxorpc/spec";
import { Project } from "./project";

/**
 * Represents an instance with policy ID, challenges, and completion status.
 */
type Instance = {
  policy: string;
  challenges: string[];
  completed: boolean;
};

/**
 * Structure containing user's courses and projects data.
 */
type AliasData = {
  courses: Instance[];
  projects: Instance[];
};

/**
 * Provides network-level utilities to query aliases and instances on Andamio.
 */
export class Network {

  public project: Project;

  constructor(private readonly core: Core) {
    this.project = new Project(this.core);
  }

  /**
   * Fetches all known aliases from the network.
   */
  async getAllAliases(): Promise<string[]> {
    try {
      const utxos = await this.core.network.globalState.getUtxos();

      return utxos.map((utxo) => {
        const aliasBytes = (
          (utxo.parsedValued?.datum?.payload?.plutusData.value as cardano.Constr)
            .fields[1] as cardano.PlutusData
        ).plutusData.value as Uint8Array;

        return hexToString(bytesToHex(aliasBytes));
      });
    } catch (err) {
      throw new SdkError(`Failed to fetch all aliases: ${err}`);
    }
  }

  /**
   * Fetches user data associated with a specific alias.
   */
  async getUserData(alias: string): Promise<{ info: string; data: AliasData }> {
    try {
      const utxo = await this.core.network.globalState.getUtxoByAlias(alias);
      const allInstances = await this.getAllInstancesList();

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

  /**
   * Fetches all policy IDs categorized as courses or projects.
   */
  async getAllInstancesList(): Promise<{ courses: string[]; projects: string[] }> {
    try {
      const utxos = await this.core.network.governance.getUtxos();
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
}
