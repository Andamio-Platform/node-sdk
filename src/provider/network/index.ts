import { bytesToHex, hexToString, stringToHex } from "@meshsdk/common";
import { SdkError } from "../../error";
import { Core } from "../core";
import { cardano } from "@utxorpc/spec";

/**
 * Network class for querying Andamio network data.
 */
export class Network {

  /**
   * Constructs a new Network instance.
   *
   * @param core - The Core instance used to interact with the blockchain.
   */
  constructor(private readonly core: Core) { }

  /**
   * Retrieves all aliases from the network.
   * 
   * @returns A promise that resolves to an array of alias strings.
   * @throws {SdkError} If the operation fails.
   */
  async getAllAliases(): Promise<string[]> {
    try {
      const utxos = await this.core.network.globalState.getUtxos();
      const aliases: string[] = [];

      utxos.forEach((utxo) => {
        const datum = utxo.parsedValued?.datum?.payload?.plutusData.value as cardano.Constr
        const alias = (datum.fields[1] as cardano.PlutusData).plutusData.value as Uint8Array
        aliases.push(
          hexToString(bytesToHex(alias)),
        );
      });

      return aliases;
    } catch (err) {
      throw new SdkError(`Failed to fetch all aliases: ${err}`);
    }
  }

  /**
   * Retrieves user data for a specific alias.
   * 
   * @param alias - The alias to fetch data for.
   * @returns A promise that resolves to an object containing user info and data.
   * @throws {SdkError} If the operation fails.
   */
  async getUserData(alias: string): Promise<{ info: string, data: aliasData }> {
    try {
      const utxo = await this.core.network.globalState.getUtxoByAlias(alias);
      const allInstances = await this.getAllInstancesList();

      const datum = utxo.parsedValued?.datum?.payload?.plutusData.value as cardano.Constr
      const info = (datum.fields[3] as cardano.PlutusData).plutusData.value as Uint8Array
      const data = (datum.fields[2] as cardano.PlutusData).plutusData.value as cardano.PlutusDataArray

      let courses: instance[] = [];
      let projects: instance[] = [];

      data.items.map((item) => {
        const policy = bytesToHex((item.plutusData.value as cardano.Constr).fields[0].plutusData.value as Uint8Array)
        const instance = {
          policy: policy,
          challenges: ((item.plutusData.value as cardano.Constr).fields[1].plutusData.value as cardano.PlutusDataArray).items.map((item) =>
            bytesToHex(item.plutusData.value as Uint8Array)
          ),
          completed: ((item.plutusData.value as cardano.Constr).fields[2].plutusData.value as cardano.Constr).tag === 121 ? true : false
        }
        if (allInstances.courses.includes(policy)) {
          courses.push(instance);
        } else if (allInstances.projects.includes(policy)) {
          projects.push(instance);
        }
      });

      return {
        info: hexToString(bytesToHex(info)),
        data: {
          courses: courses,
          projects: projects
        }
      }
    } catch (err) {
      throw new SdkError(`Failed to fetch user data: ${err}`);
    }
  }

  /**
   * Retrieves all available instances categorized as courses or projects.
   * 
   * @returns A promise that resolves to an object containing arrays of course and project policy IDs.
   * @throws {SdkError} If the operation fails.
   */
  async getAllInstancesList(): Promise<{ courses: string[]; projects: string[] }> {
    try {
      const utxos = await this.core.network.governance.getUtxos();
      const courses: string[] = [];
      const projects: string[] = [];

      utxos.forEach((utxo) => {
        utxo.parsedValued?.assets.forEach((asset) => {
          asset.assets.forEach((item) => {
            const datum = utxo.parsedValued?.datum?.payload?.plutusData.value as cardano.Constr
            const instancePolicy = (datum.fields[1] as cardano.PlutusData).plutusData
            if (instancePolicy.case === "boundedBytes") {

              const assetName = bytesToHex(item.name);

              if (assetName === stringToHex("CourseNFT")) {
                courses.push(bytesToHex(instancePolicy.value));
              } else if (assetName === stringToHex("ProjectNFT")) {
                projects.push(bytesToHex(instancePolicy.value));
              }

            }
          });
        });
      });

      return { courses, projects };
    } catch (err) {
      throw new SdkError(`Failed to fetch all instances: ${err}`);
    }
  }

}

/**
 * Represents an instance with policy ID, challenges, and completion status.
 */
type instance = {
  /** The policy ID of the instance */
  policy: string;
  /** Array of challenge identifiers */
  challenges: string[];
  /** Whether the instance is completed */
  completed: boolean;
}

/**
 * Structure containing user's courses and projects data.
 */
type aliasData = {
  /** Array of course instances */
  courses: instance[];
  /** Array of project instances */
  projects: instance[];
}