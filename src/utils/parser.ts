import { cardano } from "@utxorpc/spec";
import { bytesToHex } from "@meshsdk/common";

export const plutusData = (
  cardano_pb_PlutusData: cardano.PlutusData,
): string | undefined => {
  const _case = cardano_pb_PlutusData.plutusData.case;
  if (_case === "boundedBytes") {
    const value = cardano_pb_PlutusData.plutusData.value;
    return bytesToHex(value);
  }
};
