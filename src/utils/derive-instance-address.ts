import { PlutusScript } from "@meshsdk/common";
import { serializePlutusScript } from "@meshsdk/core";
import cbor from "cbor";
import AndamioConfigPreprod from "../andamio-config-preprod.json";
import { Network, NetworkId } from "../network";
import { AndamioConfig } from "../andamio-config";

export function deriveInstanceAddress(plutusScript: string, network: Network, andamioConfig: AndamioConfig) {
    const double_encoded_cbor_hex = cbor
        .encode(Buffer.from(plutusScript, 'hex'))
        .toString('hex')
    const script: PlutusScript = {
        code: double_encoded_cbor_hex,
        version: "V3"
    }
    const scriptAddress = serializePlutusScript(script, andamioConfig.stakingSH, NetworkId[network], true);
    return scriptAddress.address;
}