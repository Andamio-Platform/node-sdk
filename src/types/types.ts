import { CardanoQueryClient } from "@utxorpc/sdk";
import { Network } from "./network";

export type UtxorpcClientParams = {
  baseUrl: string;
  network?: Network;
  dmtr_api_key?: string;
  redisUrl?: string;
};

export interface CacheConfig {
  utxoTtl: number; // TTL for UTXO cache in seconds
  paramsTtl: number; // TTL for network params cache in seconds
}

export type Utxo = Awaited<
  ReturnType<CardanoQueryClient["searchUtxosByAddress"]>
>[number];
