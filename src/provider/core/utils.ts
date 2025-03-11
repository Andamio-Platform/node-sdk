import { UtxorpcClient } from "../../u5c";
import { Instance } from "./network/instance";
import { InstanceFilter } from "./network/instance";
import { bytesToHex, PlutusScript } from "@meshsdk/common";
import cbor from "cbor";
import AndamioConfig from "../../andamio-config.json";
import { NetworkId } from "../../network";
import { SdkError } from "../../error";
import { deserializePlutusScript, scriptHashToBech32 } from "@meshsdk/core-cst";

const serializePlutusScript = (
    script: PlutusScript,
    stakeCredentialHash?: string,
    networkId = 0,
    isScriptStakeCredential = false,
) => {
    const scriptHash = deserializePlutusScript(script.code, script.version)
        .hash()
        .toString();
    const address = scriptHashToBech32(
        scriptHash,
        stakeCredentialHash,
        networkId,
        isScriptStakeCredential,
    );
    return { address };
};

export async function getAddress(client: UtxorpcClient, courseNftPolicy: string, filter: InstanceFilter): Promise<string> {
    const instanceValidator = new Instance(client);
    try {
        const instanceUtxos = await instanceValidator.getUtxos(
            courseNftPolicy,
            filter,
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
            NetworkId[client.network],
            true,
        );

        return serializedScript.address;
    } catch (error) {
        throw new SdkError(`Failed to derive address: ${error}`);
    }
}