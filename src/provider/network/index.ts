import { bytesToHex, stringToHex } from "@meshsdk/common";
import { SdkError } from "../../error";
import { Core } from "../core";
import { cardano } from "@utxorpc/spec";

export class Network {

  /**
   * Constructs a new Network instance and initializes its components.
   *
   * @param client - The UtxorpcClient instance used to initialize the components.
   */
  constructor(private readonly core: Core) { }

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