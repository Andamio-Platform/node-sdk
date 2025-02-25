import { PlutusScript } from "@meshsdk/common";
import { deserializePlutusScript, scriptHashToBech32 } from "@meshsdk/core-cst";

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
