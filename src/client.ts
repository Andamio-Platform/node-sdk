import { Utxo } from "./types";
import { SdkError } from "./errors";
import { logger } from "./utils/logger";
import { CardanoQueryClient } from "@utxorpc/sdk";
import { cardano } from "@utxorpc/spec";
import { toAddress } from "@meshsdk/core-csl";

export class UtxorpcClient {
  private baseUrl: string;
  private dmtr_api_key: string | undefined;

  constructor(
    baseUrl: string = "http://localhost:50051",
    dmtr_api_key?: string
  ) {
    this.baseUrl = baseUrl;
    this.dmtr_api_key = dmtr_api_key;
  }

  async getParams(): Promise<cardano.PParams> {
    try {
      logger.log("Fetching network params");
      const cardanoQueryClient = new CardanoQueryClient({
        uri: this.baseUrl,
        headers: {
          "dmtr-api-key": this.dmtr_api_key || "",
        },
      });
      const response = await cardanoQueryClient.readParams();
      logger.log(JSON.stringify(response, null, 2));
      return response;
    } catch (error) {
      logger.error(JSON.stringify(error, null, 2));
      throw new SdkError("Failed to fetch network params.");
    }
  }

  async getUtxos(): Promise<Utxo[]> {
    try {
      logger.log("Fetching network params");
      const cardanoQueryClient = new CardanoQueryClient({
        uri: this.baseUrl,
        headers: {
          "dmtr-api-key": this.dmtr_api_key || "",
        },
      });
      const addressBytes = toAddress("addr_test1xp4dc8aqq65n0ct64hp9s2jq8qqrm89zx9wgwj05ycrnpt9szypvq3txq55ca309x05w6wyqhvdtrrec3p2avmflgh0sgdlkwz").to_bytes();
      const response = await cardanoQueryClient.searchUtxosByAddress(addressBytes);
      logger.log(JSON.stringify(response, null, 2));
      return response;
    } catch (error) {
      logger.error(JSON.stringify(error, null, 2));
      throw new SdkError("Failed to fetch utxos.");
    }
  }

}
