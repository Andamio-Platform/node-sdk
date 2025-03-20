import { Utxo } from "../../../utxo";
import { SdkError } from "../../../error";
import { UtxorpcClient } from "../../../u5c";
import { getAddress } from "../utils";
import { logger } from "../../../logger";


export class ModuleRef {
  constructor(private readonly client: UtxorpcClient) { }

  async getAddress(courseNftPolicy: string): Promise<string> {
    try {
      return await getAddress(this.client, courseNftPolicy, "ModuleScripts");
    } catch (error) {
      throw new SdkError(`Failed to derive address: ${error}`);
    }
  }

  async getUtxos(courseNftPolicy: string): Promise<Utxo[]> {
    try {
      const address = await this.getAddress(courseNftPolicy);
      logger.log(`ModuleRef address: ${address}`);
      return await this.client.getUtxos(address);
    } catch (error) {
      throw new SdkError(`Failed to fetch UTXOs: ${error}`);
    }
  }
}