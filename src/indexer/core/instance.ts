import AndamioConfig from "@andamio-config";
import { bytesToHex, hexToString, PlutusScript, stringToHex } from "@meshsdk/common";
import { deserializePlutusScript, scriptHashToBech32 } from "@meshsdk/core-cst";
import { UtxorpcClient } from "~/client";
import { SdkError } from "~/errors";
import { Utxo, UtxorpcClientParams } from "~/types";

export class Instance {
  public readonly address: string = AndamioConfig.instanceMS.mSCAddress;

  constructor(private readonly client: UtxorpcClient) {}

  async getUtxos(policy?: string, filter?: string): Promise<Utxo[]> {
    try {
      let asset_name
      if (filter) {
        asset_name = stringToHex(filter)
        console.log("asset_name", asset_name)
      }
      const utxos = await this.client.getUtxos(this.address, AndamioConfig.instanceMS.mSCPolicyID, asset_name);
      console.log("utxos", utxos)
      if (policy) {
        const instance_utxos = byInstancePolicy({
          utxos,
          policy,
        });
        return instance_utxos;
      } else {
        return utxos;
      }
    } catch (err) {
      throw new SdkError(`Failed to fetch UTXOs: ${err}`);
    }
  }
}

// function byFilter({
//   utxos,
//   filter,
// }: {
//   utxos: Utxo[];
//   filter: string;
// }): Utxo[] {
//   const filteredUtxos = utxos.filter((utxo) =>
//     utxo.parsedValued?.assets?.some((asset) =>
//       asset.assets.some((a) => hexToString(bytesToHex(a.name)) === filter),
//     ),
//   );

//   if (filteredUtxos.length === 0) {
//     throw new Error("Filter not found in Instance Validator UTxOs");
//   }

//   return filteredUtxos;
// }

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

export const serializePlutusScript = (
  script: PlutusScript,
  stakeCredentialHash?: string,
  networkId = 0,
  isScriptStakeCredential = false,
) => {
  const scriptHash = deserializePlutusScript(script.code, script.version)
    .hash()
    .toString();
  const address = scriptHashToBech32(
    scriptHash,
    stakeCredentialHash,
    networkId,
    isScriptStakeCredential,
  );
  return { address };
};