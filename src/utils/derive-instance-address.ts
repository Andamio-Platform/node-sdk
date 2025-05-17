import { PlutusScript } from "@meshsdk/common";
import { serializePlutusScript } from "@meshsdk/core";
import cbor from "cbor";
import AndamioConfigPreprod from "../andamio-config-preprod.json";

export function deriveInstanceAddress(plutusScript: string) {
    const double_encoded_cbor_hex = cbor
        .encode(Buffer.from(plutusScript, 'hex'))
        .toString('hex')
    const script: PlutusScript = {
        code: double_encoded_cbor_hex,
        version: "V3"
    }
    const scriptAddress = serializePlutusScript(script, AndamioConfigPreprod.stakingSH, 0, true);
    return scriptAddress.address;
}