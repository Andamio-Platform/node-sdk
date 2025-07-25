import { BlockfrostProvider, builtinByteString, conStr0, list, MaestroProvider, MeshTxBuilder, stringToHex, U5CProvider } from "@meshsdk/core";
import { MeshWallet } from '@meshsdk/core';
import { CSLSerializer } from "@meshsdk/core-csl";
import AndamioSDK from "../..";
import { rpcUtxoToMeshUtxo } from "../../common/utxo";
import { AliasIndexDatum, parseAliasIndexDatum } from "../../utils/alias-index";
import { bytesToHex, conStr1 } from "@meshsdk/common";
import { UtxorpcClient } from "../../common/u5c";
import * as spec from "@utxorpc/spec";
import { isGlobalStateDatum, toMeshGlobalStateDatum } from "../../utils/parser/datum/global-state";
import { LocalStateMintRedeemer } from "../../utils/parser/redeeemer/global-state-actions";
import { Provider } from "../../provider";
import { CourseStateCommitAssignmentAction } from "../../utils/parser/redeeemer/course-state-actions";
import { getCollateralUtxoFromUtxosList } from "../../utils/cardano/get-collateral-utxo-from-utxos-list";
import { isCourseStateDatum, toMeshCourseStateDatum } from "../../utils/parser/datum/local-states/course-state";
import { SdkError } from "../../common/error";



export async function acceptAsignmentTx({ client, provider, approverAlias, studentAlias, courseId, moduleTokenName }: { client: UtxorpcClient, provider: Provider, approverAlias: string, studentAlias: string, courseId: string, moduleTokenName: string }) {

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
    const tokenName = approverAlias
    const tokenNameHex = stringToHex(tokenName)

    const courseStateTokenPolicy = await provider.core.localStates.course.courseState.getCourseStateTokenPolicy(courseId);
    const courseStateAddress = await provider.core.localStates.course.courseState.getAddress(courseId);

    const userAddress = await provider.core.userAccessToken.getAddressByAlias(approverAlias)

    const uUtxos = await client.getUtxos(userAddress)
    const uUtxosMesh = uUtxos.map((utxo) => {
        return rpcUtxoToMeshUtxo(utxo)
    })
    const collateralUtxo = getCollateralUtxoFromUtxosList(uUtxosMesh);

    const userAccessTokenUtxo = uUtxosMesh.find(utxo => utxo.output.amount.some(asset => asset.unit === accessTokenPolicyId + "323232" + tokenNameHex));
    if (!userAccessTokenUtxo) {
        throw new Error(`No user access token UTXO found for alias: ${approverAlias}`);
    }

    const instanceGovernanceUtxo = await provider.core.localStates.instanceGovernance.getUtxoByCourseIdOrProjectId(courseId);
    const instanceGovernanceUtxoMesh = rpcUtxoToMeshUtxo(instanceGovernanceUtxo);

    const instanceGovernanceTokenUnit = instanceGovernanceUtxoMesh.output.amount[1].unit;
    const instanceGovernanceDatum = instanceGovernanceUtxoMesh.output.plutusData!;

    const assignmentStateUtxo = await provider.core.localStates.course.assignmentState.getUtxoByAlias(courseId, studentAlias);
    const assignmentStateUtxoMesh = rpcUtxoToMeshUtxo(assignmentStateUtxo);
    const assignmentStateDatum = assignmentStateUtxo.parsedValued?.datum?.payload?.plutusData.value as spec.cardano.Constr
    const courseStateDatum = assignmentStateDatum.fields[5]
    if (!isCourseStateDatum(courseStateDatum)) {
        throw new SdkError(`Invalid course state datum for alias: ${studentAlias}`);
    }

    const assignmentStateReference = await provider.core.localStates.instance.getUtxos(courseId, "AssignmentValidator");
    const assignmentStateReferenceMesh = rpcUtxoToMeshUtxo(assignmentStateReference[0]);

    const txCbor = await txBuilder

        // from assignment state
        .spendingPlutusScriptV3()
        .txIn(assignmentStateUtxoMesh.input.txHash, assignmentStateUtxoMesh.input.outputIndex)
        .txInInlineDatumPresent()
        .spendingTxInReference(assignmentStateReferenceMesh.input.txHash, assignmentStateReferenceMesh.input.outputIndex)
        .txInRedeemerValue(conStr1([]), "JSON")

        // from instance governance validator
        .spendingPlutusScriptV3()
        .txIn(instanceGovernanceUtxoMesh.input.txHash, instanceGovernanceUtxoMesh.input.outputIndex)
        .txInInlineDatumPresent()
        .spendingTxInReference("4df3ebc0592b39124c5cc3a1cf680a5d7ac393531dd308e34ee499fbad7257e7", 3)
        .txInRedeemerValue(conStr0([builtinByteString("323232" + stringToHex(approverAlias))]), "JSON")

        // user access token
        .txIn(userAccessTokenUtxo.input.txHash, userAccessTokenUtxo.input.outputIndex)

        // to course state
        .txOut(courseStateAddress, [
            {
                unit: courseStateTokenPolicy + stringToHex(studentAlias),
                quantity: "1"
            }
        ])
        .txOutInlineDatumValue(toMeshCourseStateDatum(courseStateDatum, moduleTokenName), "JSON")

        // return governance token to instance governance
        .txOut(instanceGovernanceUtxoMesh.output.address, [
            {
                unit: instanceGovernanceTokenUnit,
                quantity: "1"
            }
        ])
        .txOutInlineDatumValue(instanceGovernanceDatum, "CBOR")

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




