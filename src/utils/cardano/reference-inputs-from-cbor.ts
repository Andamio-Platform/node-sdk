import { deserializeTx } from "@meshsdk/core-csl";
import { SdkError } from "../../error";

export default function referenceInputsFromCbor(cbor: string) {
    const txJsBody = deserializeTx(cbor).to_js_value();
    if (!txJsBody.body || !txJsBody.body.reference_inputs || txJsBody.body.reference_inputs.length === 0) {
        throw new SdkError("No reference inputs found in the transaction.");
    }
    return txJsBody.body.reference_inputs;
}