import AndamioConfig from "@andamio-config";
import { UtxorpcClient } from "~/client";
import { SdkError } from "~/errors";
import { Utxo, UtxorpcClientParams } from "~/types";

export class GlobalState {
  public readonly address: string = AndamioConfig.globalStateS.sCAddress;

  constructor(private readonly client: UtxorpcClient) {}

  async getUtxos(): Promise<Utxo[]> {
    try {
      const utxos = await this.client.getUtxos(this.address);
      return utxos;
    } catch (err) {
      throw new SdkError(`Failed to fetch UTXOs: ${err}`);
    }
  }
}
