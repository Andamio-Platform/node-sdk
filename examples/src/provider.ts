import AndamioSDK from "@andamiojs/sdk";
import { globalState, summarizeGlobalStateInfo } from "./provider/core/network/global-state";
import { aliasIndex, summarizeAliasIndexInfo } from "./provider/core/network/alias-index";
import { governance, summarizeGovernanceInfo } from "./provider/core/network/governance";
import { instance, summarizeInstanceInfo } from "./provider/core/network/instance";
import { summarizeTreasuryInfo, treasury } from "./provider/core/project/treasury";
import { escrow, summarizeEscrowInfo } from "./provider/core/project/escrow";
import { contributorState, summarizeContributorStateInfo } from "./provider/core/project/contributor-state";
import { moduleRef, summarizeModuleRefInfo } from "./provider/core/course/module-ref";
import { courseState, summarizeCourseStateInfo } from "./provider/core/course/course-state";
import { assignmentState, summarizeAssignmentStateInfo } from "./provider/core/course/assignment-state";
import { Network, summarizeNetworkStateInfo } from "./provider/network";
import { Project } from "./provider/network/project";

async function network(sdk: AndamioSDK) {

    // const aliasIndexInfo = await aliasIndex(sdk);
    // summarizeAliasIndexInfo(aliasIndexInfo);


    // const globalStateInfo = await globalState(sdk);
    // summarizeGlobalStateInfo(globalStateInfo);


    // const governanceInfo = await governance(sdk);
    // summarizeGovernanceInfo(governanceInfo);


    const instanceInfo = await instance(sdk);
    summarizeInstanceInfo(instanceInfo);

}

async function project(sdk: AndamioSDK) {

    // const treasuryInfo = await treasury(sdk, "07ce13dd93e5c2721cbf3241f83a11a65a50fc2281d15490a3c961af");
    // summarizeTreasuryInfo(treasuryInfo);

    // const escrowInfo = await escrow(sdk, "07ce13dd93e5c2721cbf3241f83a11a65a50fc2281d15490a3c961af");
    // summarizeEscrowInfo(escrowInfo);

    const contributorStateInfo = await contributorState(sdk, "07ce13dd93e5c2721cbf3241f83a11a65a50fc2281d15490a3c961af");
    summarizeContributorStateInfo(contributorStateInfo);

}

async function course(sdk: AndamioSDK) {

    const courseStateInfo = await courseState(sdk, "95151ed73bbae6f4b992731e09a4b3c6a7fac0368649caad8a166fc8");
    summarizeCourseStateInfo(courseStateInfo);

    const assignmentStateInfo = await assignmentState(sdk, "95151ed73bbae6f4b992731e09a4b3c6a7fac0368649caad8a166fc8");
    summarizeAssignmentStateInfo(assignmentStateInfo);

    // const moduleRefInfo = await moduleRef(sdk, "95151ed73bbae6f4b992731e09a4b3c6a7fac0368649caad8a166fc8");
    // summarizeModuleRefInfo(moduleRefInfo);
}

async function networkAggregate(sdk: AndamioSDK) {

    // const networkInfo = await Network(sdk);
    // summarizeNetworkStateInfo(networkInfo);

    // const treasuryTokenPolicy = await Project(sdk, "07ce13dd93e5c2721cbf3241f83a11a65a50fc2281d15490a3c961af");
    // console.log("Treasury Token Policy:", treasuryTokenPolicy);

    const isAliasAvailable = await sdk.provider.aliasAvailability("nelsonksh");
    console.log("Is alias 'test-alias' available?", isAliasAvailable);

}


export async function provider(sdk: AndamioSDK) {

    // await network(sdk);

    // await project(sdk);

    // await course(sdk);

    await networkAggregate(sdk);

}


