import { BlockfrostProvider, builtinByteString, conStr0, list, MaestroProvider, MeshTxBuilder, stringToHex, U5CProvider } from "@meshsdk/core";
import { MeshWallet } from '@meshsdk/core';
import { CSLSerializer } from "@meshsdk/core-csl";
import AndamioSDK from "..";
import { rpcUtxoToMeshUtxo } from "../common/utxo";
import { AliasIndexDatum, parseAliasIndexDatum } from "../utils/alias-index";
import { bytesToHex } from "@meshsdk/common";
import { UtxorpcClient } from "../common/u5c";
import * as spec from "@utxorpc/spec";
import { Provider } from "../provider";

const universalStaticUtxo = {
    input: {
        outputIndex: 0,
        txHash: "8222b0327a95e8c357016a5df64d93d7cf8a585a07c55327ae618a7e00d58d9e"
    },
    output: {
        address: "addr_test1qrsj3xj6q99m4g9tu9mm2lzzdafy04035eya7hjhpus55r204nlu6dmhgpruq7df228h9gpujt0mtnfcnkcaj3wj457q5zv6kz",
        amount: [
            {
                unit: "lovelace",
                quantity: "99000000"
            }
        ]
    }
}

const universalStaticCollateral = {
    input: {
        outputIndex: 0,
        txHash: "5a1edf7da58eff2059030abd456947a96cb2d16b9d8c3822ffff58d167ed8bfc"
    },
    output: {
        address: "addr_test1qrsj3xj6q99m4g9tu9mm2lzzdafy04035eya7hjhpus55r204nlu6dmhgpruq7df228h9gpujt0mtnfcnkcaj3wj457q5zv6kz",
        amount: [
            {
                unit: "lovelace",
                quantity: "5000000"
            }
        ]
    }
}

const universalStaticChangeAddress = "addr_test1qrsj3xj6q99m4g9tu9mm2lzzdafy04035eya7hjhpus55r204nlu6dmhgpruq7df228h9gpujt0mtnfcnkcaj3wj457q5zv6kz";


export async function buildTxSponsor({ client, provider, userAddress, alias }: { client: UtxorpcClient, provider: Provider, userAddress: string, alias: string }) {

    const u5c = new U5CProvider({
        url: client.baseUrl,
        headers: {
            "dmtr-api-key": client.dmtr_api_key || "",
        },
    })

    const maestro = new MaestroProvider({
        network: provider.core.network,
        apiKey: "2jsBm5RaWPpwleGmimPSbGeDPHOG4R7d",
        turboSubmit: false
    })

    const txBuilder = new MeshTxBuilder({
        fetcher: maestro,
        submitter: maestro,
        evaluator: maestro,
        // params: params,
        verbose: true,
        serializer: new CSLSerializer(),
    });

    const indexAddress = provider.core.andamioConfig.indexMS.mSCAddress;
    const globalStateAddress = provider.core.andamioConfig.globalStateS.sCAddress;

    const uUtxos = await client.getUtxos(userAddress)
    const uUtxosMesh = uUtxos.map((utxo) => {
        return rpcUtxoToMeshUtxo(utxo)
    })
    // const userUtxos = await u5c.fetchAddressUTxOs(userAddress)
    console.log("userUtxos", uUtxosMesh)
    // console.log("userUtxos", JSON.stringify(userUtxos, null, 4))

    const policyId = provider.core.andamioConfig.indexMS.mSCPolicyID;

    const tokenName = alias
    const tokenNameHex = stringToHex(tokenName)

    const mintRedeemer = builtinByteString(tokenNameHex)

    const indexUtxo = await provider.core.aliasIndex.getUtxoByNewAlias(alias)
    const indexUtxoMesh = rpcUtxoToMeshUtxo(indexUtxo)

    // const utxo = await u5c.fetchUTxOs("a4f8080e8e34992977fae292c0f5d843c6c78f837fa69c624e66b6aab868745e", 0)
    // console.log("unit", utxo[0].output.amount[0].unit)
    // console.log("utxo", utxo[0].output.amount[0].quantity)

    // console.log("unit", utxo[0].output.amount[1].unit)
    // console.log("utxo", utxo[0].output.amount[1].quantity)

    // console.log(JSON.stringify(userUtxos, null, 4))

    const indexTxInRef = {
        txHash: provider.core.andamioConfig.indexMS.mSCTxRef.substring(0, 64),
        txIndex: Number(provider.core.andamioConfig.indexMS.mSCTxRef.substring(65)),
    }
    if (!indexUtxo.parsedValued?.datum?.payload?.plutusData) {
        return;
    }

    const datum = parseAliasIndexDatum(indexUtxo.parsedValued.datum.payload.plutusData as unknown as spec.cardano.PlutusData);
    if (datum === null) {
        return;
    }

    const observerStakeAddress = await provider.core.indesxReference.getObserverStakeAddress();
    const protocolTreasuryAddress = await provider.core.indesxReference.getProtocolTreasuryAddress();
    const protocolFeeAmountInLovelace = await provider.core.indesxReference.getProtocolFeeAmountInLovelace();

    const txCbor = await txBuilder
        .txIn(
            universalStaticUtxo.input.txHash,
            universalStaticUtxo.input.outputIndex,
            universalStaticUtxo.output.amount,
            universalStaticUtxo.output.address,
            0,
        )
        .txInCollateral(
            universalStaticCollateral.input.txHash,
            universalStaticCollateral.input.outputIndex,
            universalStaticCollateral.output.amount,
            universalStaticCollateral.output.address,
        )
        // .txInCollateral(uUtxosMesh[0].input.txHash, uUtxosMesh[0].input.outputIndex)
        // withdrawal
        .withdrawalPlutusScriptV3()
        .withdrawal(observerStakeAddress, "0")
        .withdrawalTxInReference(provider.core.andamioConfig.v1GlobalStateObsTxRef.substring(0, 64), Number(provider.core.andamioConfig.v1GlobalStateObsTxRef.substring(65)))
        .withdrawalRedeemerValue(conStr0([
            builtinByteString(tokenNameHex),
            builtinByteString("20")
        ]), "JSON")
        // existing index utxo
        .spendingPlutusScriptV3()
        .txIn(indexUtxoMesh.input.txHash, indexUtxoMesh.input.outputIndex)
        .txInInlineDatumPresent()
        .spendingTxInReference(indexTxInRef.txHash, indexTxInRef.txIndex)
        .txInRedeemerValue(conStr0([]), "JSON")
        // index token
        .mintPlutusScriptV3()
        .mint("1", policyId, "20")
        .mintTxInReference(indexTxInRef.txHash, indexTxInRef.txIndex)
        .mintRedeemerValue(mintRedeemer, "JSON")
        // global state
        .mintPlutusScriptV3()
        .mint("1", policyId, "313030" + tokenNameHex)
        .mintTxInReference(indexTxInRef.txHash, indexTxInRef.txIndex)
        .mintRedeemerValue(mintRedeemer, "JSON")
        // user token
        .mintPlutusScriptV3()
        .mint("1", policyId, "323232" + tokenNameHex)
        .mintTxInReference(indexTxInRef.txHash, indexTxInRef.txIndex)
        .mintRedeemerValue(mintRedeemer, "JSON")
        // to specified treasury address
        .txOut(
            protocolTreasuryAddress,
            [
                {
                    unit: "lovelace",
                    quantity: protocolFeeAmountInLovelace,
                }
            ]
        )
        // index validator
        .txOut(
            indexAddress,
            [
                {
                    unit: indexUtxoMesh.output.amount[1].unit,
                    quantity: "1",
                }
            ]
        )
        .txOutInlineDatumValue(conStr0([
            builtinByteString(bytesToHex(datum.fields[0])),
            builtinByteString(tokenNameHex)
        ]), "JSON")
        .txOut(
            indexAddress,
            [
                {
                    unit: policyId + "20",
                    quantity: "1",
                }
            ]
        )
        .txOutInlineDatumValue(conStr0([
            builtinByteString(tokenNameHex),
            builtinByteString(bytesToHex(datum.fields[1])),
        ]), "JSON")
        // global state validator
        .txOut(
            globalStateAddress,
            [
                {
                    unit: policyId + "313030" + tokenNameHex,
                    quantity: "1",
                }
            ]
        )
        .txOutInlineDatumValue(conStr0([
            builtinByteString(policyId),
            builtinByteString(tokenNameHex),
            list([]),
            builtinByteString("20")
        ]), "JSON")
        // user address
        .txOut(
            userAddress,
            [
                {
                    unit: policyId + "323232" + tokenNameHex,
                    quantity: "1",
                }
            ]
        )
        .changeAddress(universalStaticChangeAddress)
        .complete()

    return txCbor

}




