import { UTxO } from "@meshsdk/common";
import { SdkError } from "../../common/error";

export function getCollateralUtxoFromUtxosList(utxos: UTxO[]): UTxO {
    const possible_collateral_utxos = utxos.filter((utxo) => {
        if (utxo.output.amount.length === 1) {
            const lovelace_amount = parseInt(utxo.output.amount[0].quantity)
            if (5000000 <= lovelace_amount && lovelace_amount <= 20000000) {
                return utxo
            }
        }
    })
    if (possible_collateral_utxos.length === 0)
        throw new SdkError('No valid collateral utxos found')
    const collateral_utxo = possible_collateral_utxos.reduce(
        (minUtxo, currentUtxo) => {
            const minLovelace = parseInt(minUtxo.output.amount[0].quantity)
            const currentLovelace = parseInt(
                currentUtxo.output.amount[0].quantity
            )
            return currentLovelace < minLovelace ? currentUtxo : minUtxo
        }
    )
    return collateral_utxo
}
