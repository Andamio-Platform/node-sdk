import { CardanoQueryClient } from "@utxorpc/sdk";

export type Utxo = Awaited<ReturnType<CardanoQueryClient["searchUtxosByAddress"]>>[number];
