import AndamioConfig from "@andamio-config";
import { UtxorpcClient } from "~/client";
import { env } from "~/env";
import { SdkError } from "~/errors";
import { Utxo } from "~/types";

export class Instance {
  public address: string = AndamioConfig.instanceMS.mSCAddress;
  private client: UtxorpcClient = new UtxorpcClient(
    env.BASE_URL,
    env.DMTR_API_KEY,
    env.REDIS_URL,
  );

  async getUtxos(policy?: string, filter?: string): Promise<Utxo[]> {
    try {
      const utxos = await this.client.getUtxos(this.address);
      return utxos;
    } catch (err) {
      throw new SdkError(`Failed to fetch UTXOs: ${err}`);
    }
  }
}
