import { bytesToHex } from "@meshsdk/common";
import { Core } from "../../core";
import cbor from "cbor";
import { deserializePlutusScript } from "@meshsdk/core-csl";
import { SdkError } from "../../../common/error";

export async function treasuryTokenPolicy(core: Core, projectNftPolicy: string): Promise<string> {
    try {
        // Fetch the treasury token ref UTXO from the instance validator
        const treasuryTokenRefUtxo = await core.localStates.instance.getUtxos(projectNftPolicy, "TreasuryToken")

        // Get the reference script attached to the UTXO and derive the policy from it
        const treasuryTokenRefScript = treasuryTokenRefUtxo[0].parsedValued?.script?.script.value as Uint8Array;
        const cborHex = bytesToHex(treasuryTokenRefScript);
        const doubleEncodedCborHex = cbor
            .encode(Buffer.from(cborHex, "hex"))
            .toString("hex");
        const policy = deserializePlutusScript(doubleEncodedCborHex, "V3");
        return policy.hash().to_hex();
    } catch (err) {
        throw new SdkError(`Failed to get treasury token policy: ${err}`);
    }
}