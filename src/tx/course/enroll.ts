import { BlockfrostProvider, builtinByteString, conStr0, list, MaestroProvider, MeshTxBuilder, stringToHex, U5CProvider } from "@meshsdk/core";
import { MeshWallet } from '@meshsdk/core';
import { CSLSerializer } from "@meshsdk/core-csl";
import AndamioSDK from "../..";
import { rpcUtxoToMeshUtxo } from "../../common/utxo";
import { AliasIndexDatum, parseAliasIndexDatum } from "../../utils/alias-index";
import { bytesToHex } from "@meshsdk/common";
import { UtxorpcClient } from "../../common/u5c";
import * as spec from "@utxorpc/spec";
import { isGlobalStateDatum, toMeshGlobalStateDatum } from "../../utils/parser/datum/global-state";
import { LocalStateMintRedeemer } from "../../utils/parser/redeeemer/global-state-actions";
import { Provider } from "../../provider";



export async function enrollCourseTx({ client, provider, alias, courseId }: { client: UtxorpcClient, provider: Provider, alias: string, courseId: string }) {

    const maestro = new MaestroProvider({
        network: "Preprod",
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

    const globalStateAddress = client.andamioConfig.globalStateS.sCAddress;
    const accessTokenPolicyId = client.andamioConfig.indexMS.mSCPolicyID;
    const tokenName = alias
    const tokenNameHex = stringToHex(tokenName)

    const globalStateUtxo = await provider.core.globalState.getUtxoByAlias(alias);
    const originalGlobalStateDatum = globalStateUtxo.parsedValued?.datum?.payload
    if (!originalGlobalStateDatum || !isGlobalStateDatum(originalGlobalStateDatum)) {
        throw new Error("Invalid Global State Datum");
    }
    const newGlobalStateDatum = toMeshGlobalStateDatum(originalGlobalStateDatum, courseId);
    const globalStateUtxoMesh = rpcUtxoToMeshUtxo(globalStateUtxo)

    const courseStateTokenPolicy = await provider.core.localStates.course.courseState.getCourseStateTokenPolicy(courseId);
    const courseStateAddress = await provider.core.localStates.course.courseState.getAddress(courseId);

    const userAddress = await provider.core.userAccessToken.getAddressByAlias(alias)

    const uUtxos = await client.getUtxos(userAddress)
    const uUtxosMesh = uUtxos.map((utxo) => {
        return rpcUtxoToMeshUtxo(utxo)
    })

    const userAccessTokenUtxo = uUtxosMesh.find(utxo => utxo.output.amount.some(asset => asset.unit === accessTokenPolicyId + "323232" + tokenNameHex));
    if (!userAccessTokenUtxo) {
        throw new Error(`No user access token UTXO found for alias: ${alias}`);
    }
    // const userUtxos = await u5c.fetchAddressUTxOs(userAddress)
    console.log("userUtxos", uUtxosMesh)
    // console.log("userUtxos", JSON.stringify(userUtxos, null, 4))

    const globalStateReference = await client.getUtxosByAsset(client.andamioConfig.globalStateRefMS.mSCPolicyID, "476c6f62616c537461746556616c696461746f72")
    const globalStateReferenceMesh = rpcUtxoToMeshUtxo(globalStateReference[0])

    const courseStateReference = await provider.core.localStates.instance.getUtxos(courseId, "CourseStateScripts")
    const courseStateReferenceMesh = rpcUtxoToMeshUtxo(courseStateReference[0])


    const txCbor = await txBuilder
        // user access token
        .txIn(userAccessTokenUtxo.input.txHash, userAccessTokenUtxo.input.outputIndex)

        // global state token
        .spendingPlutusScriptV3()
        .txIn(globalStateUtxoMesh.input.txHash, globalStateUtxoMesh.input.outputIndex)
        .txInInlineDatumPresent()
        .spendingTxInReference(globalStateReferenceMesh.input.txHash, globalStateReferenceMesh.input.outputIndex)
        .txInRedeemerValue(LocalStateMintRedeemer(courseId, courseStateTokenPolicy), "JSON")

        // mint course local state token
        .mintPlutusScriptV3()
        .mint("1", courseStateTokenPolicy, tokenNameHex)
        .mintTxInReference(courseStateReferenceMesh.input.txHash, courseStateReferenceMesh.input.outputIndex)
        .mintRedeemerValue(conStr0([builtinByteString(tokenNameHex)]), "JSON")

        // course local state token
        .txOut(courseStateAddress, [
            {
                unit: courseStateTokenPolicy + tokenNameHex,
                quantity: "1"
            }
        ])
        .txOutInlineDatumValue("80", "CBOR")

        // user access token
        .txOut(userAddress, [
            {
                unit: accessTokenPolicyId + "323232" + tokenNameHex,
                quantity: "1"
            }
        ])

        // global state token
        .txOut(globalStateAddress, [
            {
                unit: accessTokenPolicyId + "313030" + tokenNameHex,
                quantity: "1"
            }
        ])
        .txOutInlineDatumValue(newGlobalStateDatum, "JSON")




        .txInCollateral(uUtxosMesh[0].input.txHash, uUtxosMesh[0].input.outputIndex)
        .changeAddress(userAddress)
        .selectUtxosFrom(uUtxosMesh)
        .complete()

    return txCbor

}




