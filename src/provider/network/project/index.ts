import { bytesToHex } from "@meshsdk/common";
import { SdkError } from "../../../error";
import { Core } from "../../core";
import { deserializePlutusScript } from "@meshsdk/core-csl";
import cbor from "cbor";

export class Project {
    constructor(private readonly core: Core) { }

    async getTreasuryTokenPolicy(projectNftPolicy: string): Promise<string> {
        try {
            // Fetch the treasury token ref UTXO from the instance validator
            const treasuryTokenRefUtxo = await this.core.network.instance.getUtxos(projectNftPolicy, "TreasuryToken")

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

}