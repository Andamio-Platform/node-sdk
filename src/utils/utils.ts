import { UtxorpcClient } from "../common/u5c";
import { Instance, InstanceFilter } from "../provider/core/local-states/instance";
import { bytesToHex, PlutusScript } from "@meshsdk/common";
import cbor from "cbor";
import { NetworkId } from "../common/network";
import { SdkError } from "../common/error";
import { deserializePlutusScript, scriptHashToBech32 } from "@meshsdk/core-cst";
import { logger } from "../common/logger";
import { deserializeAddress } from "@meshsdk/core";

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

        logger.log(`Serializing validator address...`);

        if (!instanceUtxos[0].parsedValued?.script?.script.value) {
            throw new Error("Invalid UTXO: missing script value");
        }

        const cborHex = bytesToHex(
            instanceUtxos[0].parsedValued.script.script.value as Uint8Array,
        );
        const doubleEncodedCborHex = cbor
            .encode(Buffer.from(cborHex, "hex"))
            .toString("hex");

        const serializedScript = serializePlutusScript(
            { code: doubleEncodedCborHex, version: "V3" },
            client.andamioConfig.stakingSH,
            NetworkId[client.network],
            true,
        );

        return serializedScript.address;
    } catch (error) {
        throw new SdkError(`Failed to derive address: ${error}`);
    }
}

export async function getLocalStatePolicy(client: UtxorpcClient, courseNftPolicy: string, filter: InstanceFilter): Promise<string> {
    const address = await getAddress(client, courseNftPolicy, filter);
    return deserializeAddress(address).scriptHash;
}