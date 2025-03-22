import { Utxo } from "../../../utxo";
import { SdkError } from "../../../error";
import { UtxorpcClient } from "../../../u5c";
import { getAddress } from "../utils";
import { logger } from "../../../logger";


export class ContributorState {
  constructor(private readonly client: UtxorpcClient) { }

  async getAddress(projectNftPolicy: string): Promise<string> {
    try {
      return await getAddress(this.client, projectNftPolicy, "ContributorStateScripts");
    } catch (error) {
      throw new SdkError(`Failed to derive address: ${error}`);
    }
  }

  async getUtxos(projectNftPolicy?: string, address?: string): Promise<Utxo[]> {
    if (!projectNftPolicy && !address) {
      throw new SdkError("Either projectNftPolicy or address must be provided");
    }
    try {
      if (!address) {
        address = await this.getAddress(projectNftPolicy!);
        logger.log(`ContributorState address: ${address}`);
      }
      return await this.client.getUtxos(address);
    } catch (error) {
      throw new SdkError(`Failed to fetch UTXOs: ${error}`);
    }
  }
}