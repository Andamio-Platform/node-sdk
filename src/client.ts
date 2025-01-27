import axios from "axios";
import { User, Post } from "./types";
import { SdkError } from "./errors";
import { logger } from "./utils/logger";
import { CardanoQueryClient } from "@utxorpc/sdk";

export class JsonPlaceholderClient {
  private baseUrl: string;

  constructor(baseUrl: string = "https://jsonplaceholder.typicode.com") {
    this.baseUrl = baseUrl;
  }

  async getParams(): Promise<any> {
    try {
      logger.log("Fetching network params");
      const cardanoQueryClient = new CardanoQueryClient({
        uri: "https://preprod.utxorpc-v0.demeter.run:443",
        headers: {
          "dmtr-api-key": "...",
        },
      });
      const response = await cardanoQueryClient.readParams();
      return response;
    } catch (error) {
      throw new SdkError("Failed to fetch network params.");
    }
  }

  async getUser(userId: number): Promise<User> {
    try {
      logger.log(`Fetching user ${userId}`);
      const response = await axios.get<User>(`${this.baseUrl}/users/${userId}`);
      return response.data;
    } catch (error) {
      throw new SdkError("Failed to fetch user data.");
    }
  }

  async getUserPosts(userId: number): Promise<Post[]> {
    try {
      logger.log(`Fetching posts for user ${userId}`);
      const response = await axios.get<Post[]>(
        `${this.baseUrl}/users/${userId}/posts`
      );
      return response.data;
    } catch (error) {
      throw new SdkError("Failed to fetch user posts.");
    }
  }
}
