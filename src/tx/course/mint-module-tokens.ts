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
import { ModuleDetails, ModuleReferenceDatum } from "../../utils/parser/datum/local-states/module-reference";

export async function mintModuleTokensTx({ client, provider, alias, courseId, listOfModuleDetails }: { client: UtxorpcClient, provider: Provider, alias: string, courseId: string, listOfModuleDetails: ModuleDetails[] }) {

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

    const instanceGovernanceUtxo = await provider.core.localStates.instanceGovernance.getUtxoByCourseIdOrProjectId(courseId);
    const instanceGovernanceUtxoMesh = rpcUtxoToMeshUtxo(instanceGovernanceUtxo);

    const instanceGovernanceTokenUnit = instanceGovernanceUtxoMesh.output.amount[1].unit;
    const instanceGovernanceDatum = instanceGovernanceUtxoMesh.output.plutusData!;

    const moduleReferenceAddress = await provider.core.localStates.course.moduleRef.getAddress(courseId);
    const moduleReferenceTokenPolicy = await provider.core.localStates.course.moduleRef.getModuleReferenceTokenPolicy(courseId);

    const moduleReferenceRefUtxo = await provider.core.localStates.instance.getUtxos(courseId, "ModuleScripts");
    const moduleReferenceRefUtxoMesh = rpcUtxoToMeshUtxo(moduleReferenceRefUtxo[0]);

    const moduleReferenceDatums = listOfModuleDetails.map(moduleDetails => ModuleReferenceDatum(moduleDetails));

    const mintRedeemer = conStr0([
        list(
            moduleReferenceDatums.map((datum, index) =>
                conStr0([
                    builtinByteString(stringToHex(listOfModuleDetails[index].moduleTokenName)),
                    datum
                ])
            )
        )
    ])

    txBuilder

        // instance governance token
        .spendingPlutusScriptV3()
        .txIn(instanceGovernanceUtxoMesh.input.txHash, instanceGovernanceUtxoMesh.input.outputIndex)
        .txInInlineDatumPresent()
        .spendingTxInReference("4df3ebc0592b39124c5cc3a1cf680a5d7ac393531dd308e34ee499fbad7257e7", 3)
        .txInRedeemerValue(conStr0([builtinByteString("323232" + stringToHex(alias))]), "JSON")


        // user access token
        .txIn(userAccessTokenUtxo.input.txHash, userAccessTokenUtxo.input.outputIndex)


    for (const [index, moduleDetails] of listOfModuleDetails.entries()) {
        const { moduleTokenName, slts, assignment } = moduleDetails;

        txBuilder
            .mintPlutusScriptV3()
            .mint("1", moduleReferenceTokenPolicy, stringToHex(moduleTokenName))
            .mintTxInReference(moduleReferenceRefUtxoMesh.input.txHash, moduleReferenceRefUtxoMesh.input.outputIndex)
            .mintRedeemerValue(mintRedeemer, "JSON")

            .txOut(moduleReferenceAddress, [
                {
                    unit: moduleReferenceTokenPolicy + stringToHex(moduleTokenName),
                    quantity: "1"
                }
            ])
            .txOutInlineDatumValue(moduleReferenceDatums[index], "JSON")
    }

    const txCbor = await txBuilder

        // return instance governance token
        .txOut(
            instanceGovernanceUtxoMesh.output.address,
            [
                {
                    unit: instanceGovernanceTokenUnit,
                    quantity: "1",
                }
            ]
        )
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




