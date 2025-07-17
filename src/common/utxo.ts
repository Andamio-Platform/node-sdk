import { Asset, UTxO } from "@meshsdk/common";
import { CardanoQueryClient } from "@utxorpc/sdk";
import type * as spec from "@utxorpc/spec";
import { Address, CardanoSDKUtil } from "@meshsdk/core-cst";


export type Utxo = Awaited<
    ReturnType<CardanoQueryClient["searchUtxosByAddress"]>
>[number];


export function rpcUtxoToMeshUtxo(
    utxo: Utxo,
  ): UTxO {
    const rpcTxoRef: spec.query.TxoRef = utxo.txoRef;
    if (utxo.parsedValued === undefined) {
      throw new Error("rpcTxOutput is undefined");
    }
    const rpcTxOutput: spec.cardano.TxOutput = utxo.parsedValued

    const amount: Asset[] = [
      {
        unit: "lovelace",
        quantity: rpcTxOutput.coin.toString(),
      },
    ];
    rpcTxOutput.assets.forEach((ma) => {
      ma.assets.forEach((asset) => {
        amount.push({
          unit:
            Buffer.from(ma.policyId).toString("hex") +
            Buffer.from(asset.name).toString("hex"),
          quantity: asset.outputCoin.toString(),
        });
      });
    });

    let dataHash: string | undefined = undefined;
    let plutusData: string | undefined = undefined;

    if (rpcTxOutput.datum !== undefined) {
      if (
        rpcTxOutput.datum?.originalCbor &&
        rpcTxOutput.datum.originalCbor.length > 0
      ) {
        dataHash = Buffer.from(rpcTxOutput.datum.hash).toString("hex");
        plutusData = Buffer.from(rpcTxOutput.datum.originalCbor).toString(
          "hex",
        );
      } else if (rpcTxOutput.datum?.hash && rpcTxOutput.datum.hash.length > 0) {
        dataHash = Buffer.from(rpcTxOutput.datum.hash).toString("hex");
      }
    }

    let scriptRef: string | undefined = undefined;
    let scriptHash: string | undefined = undefined;

    if (rpcTxOutput.script !== undefined) {
      // TODO: Implement scriptRef
      // TODO: Implement scriptHash
    }

    return {
      input: {
        outputIndex: rpcTxoRef.index,
        txHash: Buffer.from(rpcTxoRef.hash).toString("hex"),
      },
      output: {
        address: Address.fromBytes(
          CardanoSDKUtil.HexBlob.fromBytes(rpcTxOutput.address),
        ).toBech32(),
        amount: amount,
        dataHash: dataHash,
        plutusData: plutusData,
        scriptRef: scriptRef,
        scriptHash: scriptHash,
      },
    };
  }