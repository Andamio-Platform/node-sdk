import Redis from "ioredis";
import { logger } from "./utils";

export class RedisManager {
  private client: Redis | null = null;
  private isAvailable: boolean = false;

  constructor(redisUrl?: string) {
    if (redisUrl) {
      this.initializeRedis(redisUrl);
    }
  }

  private initializeRedis(url: string): void {
    this.client = new Redis(url);

    this.client.on("connect", () => {
      this.isAvailable = true;
      logger.log("Redis connected");
    });

    this.client.on("error", (err) => {
      this.isAvailable = false;
      logger.error(`Redis error: ${err}`);
      this.disconnect();
    });

    this.client.on("end", () => {
      this.isAvailable = false;
      this.client = null;
      logger.log("Redis connection ended");
    });
  }

  async get(key: string): Promise<string | null> {
    if (!this.isAvailable || !this.client) return null;

    try {
      return await this.client.get(key);
    } catch (error) {
      logger.error(`Redis read error: ${error}`);
      return null;
    }
  }

  async set(key: string, value: string, ttl: number): Promise<void> {
    if (!this.isAvailable || !this.client) return;

    try {
      await this.client.set(key, value, "EX", ttl);
    } catch (error) {
      logger.error(`Redis write error: ${error}`);
    }
  }

  async disconnect(): Promise<void> {
    if (this.isAvailable && this.client) {
      try {
        await this.client.quit();
        logger.log("Redis disconnected");
      } catch (error) {
        logger.error(`Error disconnecting Redis: ${error}`);
      }
    }
  }

  isRedisAvailable(): boolean {
    return this.isAvailable;
  }
}
