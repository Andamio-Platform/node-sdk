import { Utxo } from "../../../utxo";
import { SdkError } from "../../../error";
import { UtxorpcClient } from "../../../u5c";
import { getAddress } from "../utils";
import { logger } from "../../../logger";


export class Escrow {
  constructor(private readonly client: UtxorpcClient) { }

  async getAddress(projectNftPolicy: string): Promise<string> {
    try {
      return await getAddress(this.client, projectNftPolicy, "Escrow1");
    } catch (error) {
      throw new SdkError(`Failed to derive address: ${error}`);
    }
  }

  async getUtxos(projectNftPolicy: string): Promise<Utxo[]> {
    try {
      const address = await this.getAddress(projectNftPolicy);
      logger.log(`Escrow address: ${address}`);
      return await this.client.getUtxos(address);
    } catch (error) {
      throw new SdkError(`Failed to fetch UTXOs: ${error}`);
    }
  }
}