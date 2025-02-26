import { Utxo } from "~/types/types";
import { SdkError } from "~/utils/errors";
import { UtxorpcClient } from "~/client";
import { getAddress } from "../utils/get_address";


export class Module {
  constructor(private readonly client: UtxorpcClient) { }

  async getUtxos(courseNftPolicy: string): Promise<Utxo[]> {
    try {
      const address = await getAddress(this.client, courseNftPolicy, "ModuleScripts");
      return await this.client.getUtxos(address);
    } catch (error) {
      throw new SdkError(`Failed to fetch UTXOs: ${error}`);
    }
  }
}
