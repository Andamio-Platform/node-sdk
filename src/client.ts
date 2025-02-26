import { Utxo, UtxorpcClientParams, CacheConfig } from "./types/types";
import { SdkError } from "./utils/errors";
import { logger } from "./utils/logger";
import { CardanoQueryClient } from "@utxorpc/sdk";
import { cardano } from "@utxorpc/spec";
import { toAddress } from "@meshsdk/core-csl";
import Redis from "ioredis";
import { hexToBytes, stringToHex } from "@meshsdk/common";
import { RedisManager } from "./redis";
import { Network } from "./types/network";

export class UtxorpcClient {
  public readonly network: Network;
  private readonly redisManager: RedisManager;
  private readonly cardanoQueryClient: CardanoQueryClient;
  private readonly cacheConfig: CacheConfig = {
    utxoTtl: 60, // 1 minute
    paramsTtl: 300, // 5 minutes
  };

  constructor(private readonly params: UtxorpcClientParams) {
    this.network = params.network || "Preprod";
    this.redisManager = new RedisManager(params.redisUrl);
    this.cardanoQueryClient = this.initializeCardanoClient();
  }

  private initializeCardanoClient(): CardanoQueryClient {
    return new CardanoQueryClient({
      uri: this.params.baseUrl,
      headers: {
        "dmtr-api-key": this.params.dmtr_api_key || "",
      },
    });
  }

  /**
   * Fetch UTXOs for a given address with optional caching
   */
  async getUtxos(
    address: string,
    policy?: string,
    name?: string,
  ): Promise<Utxo[]> {
    const cacheKey = this.buildUtxoCacheKey(address, policy, name);

    // Try cache first
    const cachedData = await this.redisManager.get(cacheKey);
    if (cachedData) {
      logger.log("Returning cached UTXOs");
      return JSON.parse(cachedData);
    }

    // Fetch from gRPC
    const utxos = await this.fetchUtxosFromGrpc(address, policy, name);

    // Cache the results
    await this.redisManager.set(
      cacheKey,
      JSON.stringify(utxos),
      this.cacheConfig.utxoTtl,
    );

    return utxos;
  }

  private buildUtxoCacheKey(
    address: string,
    policy?: string,
    name?: string,
  ): string {
    const parts = [`utxos:${address}`];
    if (policy) parts.push(`policy:${policy}`);
    if (name) parts.push(`name:${name}`);
    return parts.join(":");
  }

  private async fetchUtxosFromGrpc(
    address: string,
    policy?: string,
    name?: string,
  ): Promise<Utxo[]> {
    logger.log("Fetching UTXOs from gRPC...");
    try {
      const addressBytes = toAddress(address).to_bytes();
      let response: Utxo[];

      if (policy || name) {
        response = await this.fetchUtxosWithAsset(addressBytes, policy, name);
      } else {
        response =
          await this.cardanoQueryClient.searchUtxosByAddress(addressBytes);
      }

      logger.log("UTXOs fetched");
      return response;
    } catch (error) {
      logger.error(JSON.stringify(error, null, 2));
      throw new SdkError("Failed to fetch UTXOs.");
    }
  }

  private async fetchUtxosWithAsset(
    addressBytes: Uint8Array,
    policy?: string,
    name?: string,
  ): Promise<Utxo[]> {
    const asset_policy = policy ? hexToBytes(policy) : undefined;
    const asset_name = name ? hexToBytes(name) : undefined;

    return await this.cardanoQueryClient.searchUtxosByAddressWithAsset(
      addressBytes,
      asset_policy,
      asset_name,
    );
  }

  /**
   * Fetch network parameters with optional caching
   */
  async getParams(): Promise<cardano.PParams> {
    const cacheKey = "network_params";

    // Try cache first
    const cachedData = await this.redisManager.get(cacheKey);
    if (cachedData) {
      logger.log("Returning cached network params");
      return JSON.parse(cachedData);
    }

    // Fetch from gRPC
    logger.log("Fetching network params...");
    try {
      const params = await this.cardanoQueryClient.readParams();
      logger.log("Network params fetched");

      // Cache the results
      await this.redisManager.set(
        cacheKey,
        JSON.stringify(params),
        this.cacheConfig.paramsTtl,
      );

      return params;
    } catch (error) {
      logger.error(JSON.stringify(error, null, 2));
      throw new SdkError("Failed to fetch network params.");
    }
  }

  /**
   * Graceful shutdown
   */
  async disconnect(): Promise<void> {
    await this.redisManager.disconnect();
  }
}
