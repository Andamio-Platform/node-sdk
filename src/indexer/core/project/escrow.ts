import { Utxo } from "~/types/types";
import { SdkError } from "~/utils/errors";
import { UtxorpcClient } from "~/client";
import { getAddress } from "../utils/get_address";


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
