import { Utxo } from "../../../utxo";
import { SdkError } from "../../../error";
import { UtxorpcClient } from "../../../u5c";
import { getAddress } from "../utils";


export class Escrow {
  constructor(private readonly client: UtxorpcClient) { }

  async getUtxos(projectNftPolicy: string): Promise<Utxo[]> {
    try {
      const address = await getAddress(this.client, projectNftPolicy, "Escrow1");
      return await this.client.getUtxos(address);
    } catch (error) {
      throw new SdkError(`Failed to fetch UTXOs: ${error}`);
    }
  }
}