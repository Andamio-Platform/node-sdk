import AndamioConfig from "@andamio-config";
import { UtxorpcClient } from "~/client";
import { SdkError } from "~/utils/errors";
import { Utxo, UtxorpcClientParams } from "~/types/types";
import { cardano } from "@utxorpc/spec";

export class GlobalState {
  public readonly address: string = AndamioConfig.globalStateS.sCAddress;
  public readonly policy: string = AndamioConfig.indexMS.mSCPolicyID;

  constructor(private readonly client: UtxorpcClient) {}

  async getUtxos(): Promise<Utxo[]> {
    try {
      const utxos = await this.client.getUtxos(this.address, this.policy);
      return utxos;
    } catch (err) {
      throw new SdkError(`Failed to fetch UTXOs: ${err}`);
    }
  }
}
