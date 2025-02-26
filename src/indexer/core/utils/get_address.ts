import { UtxorpcClient } from "~/client";
import { Instance } from "../instance";
import { InstanceFilter } from "../instance.d";
import { bytesToHex } from "@meshsdk/common";
import cbor from "cbor";
import { serializePlutusScript } from "~/utils/serializer";
import AndamioConfig from "@andamio-config";
import { NetworkId } from "~/types";
import { SdkError } from "~/utils";

export async function getAddress(client: UtxorpcClient, courseNftPolicy: string, filter: InstanceFilter): Promise<string> {
    const instanceValidator = new Instance(client);
    try {
      const instanceUtxos = await instanceValidator.getUtxos(
        courseNftPolicy,
        filter,
      );

      console.log("instanceUtxos", instanceUtxos.length);

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
        NetworkId[client.network],
        true,
      );

      return serializedScript.address;
    } catch (error) {
      throw new SdkError(`Failed to initialize course: ${error}`);
    }
  }