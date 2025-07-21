import { builtinByteString, conStr0, list } from "@meshsdk/common"

export function LocalStateMintRedeemer(LocalStateInstancePolicy: string, LocalStateTokenPolicy: string) {
    return conStr0([
        conStr0([
            builtinByteString(LocalStateInstancePolicy),
            list([]),
            builtinByteString(LocalStateTokenPolicy)
        ])
    ])
}