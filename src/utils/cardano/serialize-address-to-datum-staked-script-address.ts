import { builtinByteString, conStr0, conStr1, deserializeAddress } from "@meshsdk/core";

export function SerializeAddressToDatumStakedScriptAddress(address: string) {
    const addressObj = deserializeAddress(address);
    return conStr0([
        conStr1([
            builtinByteString(addressObj.scriptHash)
        ]),
        conStr0([
            conStr0([
                conStr1([builtinByteString(addressObj.stakeScriptCredentialHash)])
            ])
        ])
    ])

}
