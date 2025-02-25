import { Utxo } from "~/types/types";
import { Instance } from "../instance";
import { bytesToHex } from "@meshsdk/common";
import cbor from "cbor";
import AndamioConfig from "@andamio-config";
import { SdkError } from "~/utils/errors";
import { UtxorpcClient } from "~/client";
import { NetworkId } from "~/types/network";
import { serializePlutusScript } from "~/utils/serializer";

export class Course {
  constructor(private readonly client: UtxorpcClient) {}

  public async getAddress(courseNftPolicy: string): Promise<string> {
    const instanceValidator = new Instance(this.client);
    try {
      const instanceUtxos = await instanceValidator.getUtxos(
        courseNftPolicy,
        "CourseStateScripts",
      );

      if (!instanceUtxos[0].parsedValued?.script?.script.value) {
        throw new Error("Invalid course NFT UTXO: missing script value");
      }

      const cborHex = bytesToHex(
        instanceUtxos[0].parsedValued.script.script.value as Uint8Array,
      );
      const doubleEncodedCborHex = cbor
        .encode(Buffer.from(cborHex, "hex"))
        .toString("hex");

      const serializedScript = serializePlutusScript(
        { code: doubleEncodedCborHex, version: "V3" },
        AndamioConfig.stakingSH,
        NetworkId[this.client.network],
        true,
      );

      return serializedScript.address;
    } catch (error) {
      throw new SdkError(`Failed to initialize course: ${error}`);
    }
  }

  async getUtxos(courseNftPolicy: string): Promise<Utxo[]> {
    try {
      const address = await this.getAddress(courseNftPolicy);
      console.log(address);
      return await this.client.getUtxos(address);
    } catch (error) {
      throw new SdkError(`Failed to fetch UTXOs: ${error}`);
    }
  }
}
