import {
  Asset,
  bytesToHex,
  hexToBytes,
  Quantity,
  Unit,
  UTxO,
} from "@meshsdk/common";
import { CardanoQueryClient } from "@utxorpc/sdk";
import type * as spec from "@utxorpc/spec";
import { Address, CardanoSDKUtil } from "@meshsdk/core-cst";

export type BlockfrostUTxO = {
  address: string;
  tx_hash: string;
  output_index: number;
  amount: {
    unit: string;
    quantity: string;
  }[];
  block: string;
  data_hash: string | null;
  inline_datum: string | null;
  reference_script_hash: string | null;
};

export function rpcUtxoToBlockfrostUtxo(utxo: Utxo): BlockfrostUTxO {
  const rpcTxoRef: spec.query.TxoRef = utxo.txoRef;
  if (utxo.parsedValued === undefined) {
    throw new Error("rpcTxOutput is undefined");
  }
  const rpcTxOutput: spec.cardano.TxOutput = utxo.parsedValued;

  const amount = [
    {
      unit: "lovelace",
      quantity: rpcTxOutput.coin.toString(),
    },
  ];

  rpcTxOutput.assets.forEach((ma) => {
    ma.assets.forEach((asset) => {
      amount.push({
        unit: bytesToHex(ma.policyId) + bytesToHex(asset.name),
        quantity: asset.outputCoin.toString(),
      });
    });
  });

  let dataHash: string | null = null;
  let plutusData: string | null = null;

  if (rpcTxOutput.datum !== undefined) {
    if (
      rpcTxOutput.datum?.originalCbor &&
      rpcTxOutput.datum.originalCbor.length > 0
    ) {
      dataHash = Buffer.from(rpcTxOutput.datum.hash).toString("hex");
      plutusData = Buffer.from(rpcTxOutput.datum.originalCbor).toString("hex");
    } else if (rpcTxOutput.datum?.hash && rpcTxOutput.datum.hash.length > 0) {
      dataHash = Buffer.from(rpcTxOutput.datum.hash).toString("hex");
    }
  }

  let scriptHash: string | null = null;

  if (rpcTxOutput.script !== undefined) {
    switch (rpcTxOutput.script.script.case) {
      case "native":
        // TODO: Handle native script
        break;
      case "plutusV1":
        // TODO: Handle Plutus V1 script
        break;
      case "plutusV2":
        // TODO: Handle Plutus V2 script
        break;
      case "plutusV3":
        // Handle Plutus V3 script
        break;
      default:
        // Fallback for unexpected cases
        scriptHash = null;
        break;
    }
  }

  return {
    address: Address.fromBytes(
      CardanoSDKUtil.HexBlob.fromBytes(rpcTxOutput.address)
    ).toBech32(),
    tx_hash: bytesToHex(rpcTxoRef.hash),
    output_index: rpcTxoRef.index,
    amount: amount,
    block: "",
    data_hash: dataHash,
    inline_datum: plutusData,
    reference_script_hash: scriptHash,
  };
}

export type Utxo = Awaited<
  ReturnType<CardanoQueryClient["searchUtxosByAddress"]>
>[number];

export function rpcUtxoToMeshUtxo(utxo: Utxo): UTxO {
  const rpcTxoRef: spec.query.TxoRef = utxo.txoRef;
  if (utxo.parsedValued === undefined) {
    throw new Error("rpcTxOutput is undefined");
  }
  const rpcTxOutput: spec.cardano.TxOutput = utxo.parsedValued;

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
      plutusData = Buffer.from(rpcTxOutput.datum.originalCbor).toString("hex");
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
        CardanoSDKUtil.HexBlob.fromBytes(rpcTxOutput.address)
      ).toBech32(),
      amount: amount,
      dataHash: dataHash,
      plutusData: plutusData,
      scriptRef: scriptRef,
      scriptHash: scriptHash,
    },
  };
}
