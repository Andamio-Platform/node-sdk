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
import { CourseStateCommitAssignmentAction } from "../../utils/parser/redeeemer/course-state-actions";
import { AssignmentStateDatum } from "../../utils/parser/datum/local-states/assignment-state";
import { getCollateralUtxoFromUtxosList } from "../../utils/cardano/get-collateral-utxo-from-utxos-list";
import { isCourseStateDatum, toMeshCourseStateDatum } from "../../utils/parser/datum/local-states/course-state";
import { SdkError } from "../../common/error";



export async function commitAsignmentTx({ client, provider, alias, courseId, moduleTokenName, assignmentEvidenceInHex }: { client: UtxorpcClient, provider: Provider, alias: string, courseId: string, moduleTokenName: string, assignmentEvidenceInHex?: string }) {

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

    const accessTokenPolicyId = client.andamioConfig.indexMS.mSCPolicyID;
    const tokenName = alias
    const tokenNameHex = stringToHex(tokenName)

    const courseStateTokenPolicy = await provider.core.localStates.course.courseState.getCourseStateTokenPolicy(courseId);
    const courseStateAddress = await provider.core.localStates.course.courseState.getAddress(courseId);

    const userAddress = await provider.core.userAccessToken.getAddressByAlias(alias)

    const uUtxos = await client.getUtxos(userAddress)
    const uUtxosMesh = uUtxos.map((utxo) => {
        return rpcUtxoToMeshUtxo(utxo)
    })
    const collateralUtxo = getCollateralUtxoFromUtxosList(uUtxosMesh);

    const userAccessTokenUtxo = uUtxosMesh.find(utxo => utxo.output.amount.some(asset => asset.unit === accessTokenPolicyId + "323232" + tokenNameHex));
    if (!userAccessTokenUtxo) {
        throw new Error(`No user access token UTXO found for alias: ${alias}`);
    }

    const courseStateReference = await provider.core.localStates.instance.getUtxos(courseId, "CourseStateScripts")
    const courseStateReferenceMesh = rpcUtxoToMeshUtxo(courseStateReference[0])

    const courseStateUtxo = await provider.core.localStates.course.courseState.getUtxoByAlias(courseId, alias);
    const courseStateUtxoMesh = rpcUtxoToMeshUtxo(courseStateUtxo);
    if (!isCourseStateDatum(courseStateUtxo.parsedValued?.datum?.payload)) {
        throw new SdkError(`Invalid course state datum for alias: ${alias}`);
    }
    const courseStateDatum = toMeshCourseStateDatum(courseStateUtxo.parsedValued?.datum?.payload);

    const moduleReference = await provider.core.localStates.course.moduleRef.getUtxoByModuleTokenName(courseId, moduleTokenName);
    const moduleReferenceMesh = rpcUtxoToMeshUtxo(moduleReference);

    const assignmentStateAddress = await provider.core.localStates.course.assignmentState.getAddress(courseId);

    const txCbor = await txBuilder

        // from course state
        .spendingPlutusScriptV3()
        .txIn(courseStateUtxoMesh.input.txHash, courseStateUtxoMesh.input.outputIndex)
        .txInInlineDatumPresent()
        .spendingTxInReference(courseStateReferenceMesh.input.txHash, courseStateReferenceMesh.input.outputIndex)
        .txInRedeemerValue(CourseStateCommitAssignmentAction(alias, moduleTokenName, assignmentEvidenceInHex), "JSON")

        // user access token
        .txIn(userAccessTokenUtxo.input.txHash, userAccessTokenUtxo.input.outputIndex)

        // read only reference - module reference
        .readOnlyTxInReference(moduleReferenceMesh.input.txHash, moduleReferenceMesh.input.outputIndex)

        // to assignment state
        .txOut(assignmentStateAddress, [
            {
                unit: courseStateTokenPolicy + tokenNameHex,
                quantity: "1"
            }
        ])
        .txOutInlineDatumValue(AssignmentStateDatum(moduleTokenName, courseStateTokenPolicy, alias, courseStateAddress, courseStateDatum, assignmentEvidenceInHex), "JSON")

        // user access token
        .txOut(userAddress, [
            {
                unit: accessTokenPolicyId + "323232" + tokenNameHex,
                quantity: "1"
            }
        ])



        .txInCollateral(collateralUtxo.input.txHash, collateralUtxo.input.outputIndex)
        .changeAddress(userAddress)
        .selectUtxosFrom(uUtxosMesh)
        .complete()

    return txCbor

}




