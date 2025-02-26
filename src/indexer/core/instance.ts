import AndamioConfig from "@andamio-config";
import {
  bytesToHex,
  hexToString,
  PlutusScript,
  stringToHex,
} from "@meshsdk/common";
import { deserializePlutusScript, scriptHashToBech32 } from "@meshsdk/core-cst";
import { UtxorpcClient } from "~/client";
import { SdkError } from "~/utils/errors";
import { Utxo, UtxorpcClientParams } from "~/types/types";
import { InstanceFilter } from "./instance.d";

export class Instance {
  public readonly address: string = AndamioConfig.instanceMS.mSCAddress;
  public readonly policy: string = AndamioConfig.instanceMS.mSCPolicyID;

  constructor(private readonly client: UtxorpcClient) { }

  async getUtxos(policy?: string, filter?: InstanceFilter): Promise<Utxo[]> {
    try {
      let asset_name;
      if (filter) {
        asset_name = stringToHex(filter);
      }
      let utxos;
      utxos = await this.client.getUtxos(
        this.address,
        this.policy,
        asset_name,
      );
      // remove when utxorpc node-sdk gets updated
      if (filter) {
        utxos = byFilter({
          utxos,
          filter,
        });
      }
      // till here
      if (policy) {
        utxos = byInstancePolicy({
          utxos,
          policy,
        });
      }
      return utxos;
    } catch (err) {
      throw new SdkError(`Failed to fetch UTXOs: ${err}`);
    }
  }
}

// remove when utxorpc node-sdk gets updated
function byFilter({
  utxos,
  filter,
}: {
  utxos: Utxo[];
  filter: string;
}): Utxo[] {
  const filteredUtxos = utxos.filter((utxo) =>
    utxo.parsedValued?.assets?.some((asset) =>
      asset.assets.some((a) => hexToString(bytesToHex(a.name)) === filter),
    ),
  );

  if (filteredUtxos.length === 0) {
    throw new Error("Filter not found in Instance Validator UTxOs");
  }

  return filteredUtxos;
}
// till here

function byInstancePolicy({
  utxos,
  policy,
}: {
  utxos: Utxo[];
  policy: string;
}): Utxo[] {
  const filteredUtxos = utxos.filter((utxo) => {
    const nftPolicy = bytesToHex(
      utxo.parsedValued?.datum?.payload?.plutusData.value as Uint8Array,
    );
    return nftPolicy === policy;
  });

  if (filteredUtxos.length === 0) {
    throw new Error("Policy not found in Instance Validator UTxOs");
  }

  return filteredUtxos;
}
