import { Utxo } from "./types";
import { SdkError } from "./errors";
import { logger } from "./utils/logger";
import { CardanoQueryClient } from "@utxorpc/sdk";
import { cardano } from "@utxorpc/spec";
import { toAddress } from "@meshsdk/core-csl";
import Redis from "ioredis";

export class UtxorpcClient {
  private redisClient: Redis | null = null;
  private isRedisAvailable: boolean = false;
  private cardanoQueryClient: CardanoQueryClient;

  constructor(
    private baseUrl: string,
    private dmtr_api_key?: string,
    private redisUrl?: string
  ) {
    // Initialize gRPC client (mandatory)
    this.cardanoQueryClient = new CardanoQueryClient({
      uri: this.baseUrl,
      headers: {
        "dmtr-api-key": this.dmtr_api_key || "",
      },
    });

    // Initialize Redis client if URL is provided
    if (this.redisUrl) {
      this.redisClient = new Redis(this.redisUrl);

      this.redisClient.on("connect", () => {
        this.isRedisAvailable = true;
      });

      this.redisClient.on("error", (err) => {
        this.isRedisAvailable = false;
        if (this.redisClient) {
          this.redisClient.disconnect();
        }
        this.redisClient = null;
      });

      this.redisClient.on("end", () => {
        this.isRedisAvailable = false;
        this.redisClient = null;
      });
    }
  }

  /**
   * Fetch UTXOs for a given address with optional caching
   */
  async getUtxos(address: string): Promise<Utxo[]> {
    const cacheKey = `utxos:${address}`;

    // Try fetching from Redis cache first
    if (this.isRedisAvailable && this.redisClient) {
      try {
        const cachedData = await this.redisClient.get(cacheKey);
        if (cachedData) {
          logger.log("Returning cached UTXOs");
          return JSON.parse(cachedData);
        }
      } catch (error) {
        logger.error(`Redis read error: ${error}`);
      }
    }

    // Fetch from gRPC if not cached or Redis is unavailable
    logger.log("Fetching UTXOs from gRPC...");
    try {
      const addressBytes = toAddress(address).to_bytes();
      const response = await this.cardanoQueryClient.searchUtxosByAddress(addressBytes);
      logger.log("UTXOs fetched");

      // Store in Redis if available
      if (this.isRedisAvailable && this.redisClient) {
        await this.redisClient.set(cacheKey, JSON.stringify(response), "EX", 60);
      }

      return response;
    } catch (error) {
      logger.error(JSON.stringify(error, null, 2));
      throw new SdkError("Failed to fetch UTXOs.");
    }
  }

  /**
   * Fetch network parameters with optional caching
   */
  async getParams(): Promise<cardano.PParams> {
    const cacheKey = `network_params`;

    // Try fetching from Redis cache first
    if (this.isRedisAvailable && this.redisClient) {
      try {
        const cachedData = await this.redisClient.get(cacheKey);
        if (cachedData) {
          logger.log("Returning cached network params");
          return JSON.parse(cachedData);
        }
      } catch (error) {
        logger.error(`Redis read error: ${error}`);
      }
    }

    // Fetch from gRPC if not cached or Redis is unavailable
    logger.log("Fetching network params...");
    try {
      const response = await this.cardanoQueryClient.readParams();
      logger.log("Network params fetched");

      // Store in Redis if available
      if (this.isRedisAvailable && this.redisClient) {
        await this.redisClient.set(cacheKey, JSON.stringify(response), "EX", 300); // Cache for 5 mins
      }

      return response;
    } catch (error) {
      logger.error(JSON.stringify(error, null, 2));
      throw new SdkError("Failed to fetch network params.");
    }
  }

  /**
   * Graceful shutdown: Disconnect Redis if connected
   */
  async disconnect(): Promise<void> {
    if (this.isRedisAvailable && this.redisClient) {
      try {
        await this.redisClient.quit();
        logger.log("Redis disconnected");
      } catch (error) {
        logger.error(`Error disconnecting Redis: ${error}`);
      }
    }
  }
}
