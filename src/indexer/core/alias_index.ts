import AndamioConfig from "@andamio-config";
import { UtxorpcClient } from "~/client";
import { SdkError } from "~/utils/errors";
import { Utxo, UtxorpcClientParams } from "~/types/types";

export class AliasIndex {
  public readonly address: string = AndamioConfig.indexMS.mSCAddress;

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
