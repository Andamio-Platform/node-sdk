import { deserializeTx } from "@meshsdk/core-csl";
import { SdkError } from "../../common/error";

export default function redeemersFromCbor(cbor: string) {
    const txJsBody = deserializeTx(cbor).to_js_value();
    if (!txJsBody.witness_set || !txJsBody.witness_set.redeemers || txJsBody.witness_set.redeemers.length === 0) {
        throw new SdkError("No redeemers found in the transaction.");
    }
    return txJsBody.witness_set.redeemers
}