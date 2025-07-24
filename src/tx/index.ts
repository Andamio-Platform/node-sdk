import { UtxorpcClient } from "../common/u5c";
import { Provider } from "../provider";
import { ModuleDetails } from "../utils/parser/datum/local-states/module-reference";
import { acceptAsignmentTx } from "./course/accept-assignment";
import { commitToAsignmentTx } from "./course/commit-to-assignment";
import { enrollCourseTx } from "./course/enroll";
import { mintModuleTokensTx } from "./course/mint-module-tokens";
import { buildTx } from "./mint-access-token";
import { buildTxSponsor } from "./sponsor-mint-access-token";

type PartialModuleDetails = {
    moduleTokenName: string;
    slts: {
        sltId: string;
        sltDescription: string;
    }[];
    assignment?: {
        assignmentDescription: string;
        prerequisites: string[];
    };
}

export class Transaction {

    constructor(private readonly client: UtxorpcClient, private readonly provider: Provider) { }

    public mintAccessToken = async ({ userAddress, alias }: { userAddress: string, alias: string }) => buildTx({ client: this.client, provider: this.provider, userAddress, alias })

    public sponsorMintAccessToken = async ({ userAddress, alias }: { userAddress: string, alias: string }) => buildTxSponsor({ client: this.client, provider: this.provider, userAddress, alias })

    public enrollCourse = async ({ alias, courseId }: { alias: string, courseId: string }) => enrollCourseTx({ client: this.client, provider: this.provider, alias, courseId })

    public commitAssignment = async ({ alias, courseId, moduleTokenName, assignmentEvidenceInHex }: { alias: string, courseId: string, moduleTokenName: string, assignmentEvidenceInHex?: string }) => commitToAsignmentTx({ client: this.client, provider: this.provider, alias, courseId, moduleTokenName, assignmentEvidenceInHex })

    public acceptAssignment = async ({ approverAlias, studentAlias, courseId, moduleTokenName }: { approverAlias: string, studentAlias: string, courseId: string, moduleTokenName: string }) => acceptAsignmentTx({ client: this.client, provider: this.provider, approverAlias, studentAlias, courseId, moduleTokenName })

    public mintModuleTokens = async ({ alias, courseId, listOfModuleDetails }: { alias: string, courseId: string, listOfModuleDetails: PartialModuleDetails[] }) => {
        const assignmentDeciderAddress = await this.provider.core.localStates.course.assignmentState.getAddress(courseId);
        const courseStateTokenPolicy = await this.provider.core.localStates.course.courseState.getCourseStateTokenPolicy(courseId);
        const moduleDetails: ModuleDetails[] = listOfModuleDetails.map(details => ({
            moduleTokenName: details.moduleTokenName,
            slts: details.slts,
            assignment: details.assignment ? {
                assignmentDescription: details.assignment.assignmentDescription,
                assignmentDecider: assignmentDeciderAddress,
                allowedStudents: [courseStateTokenPolicy],
                prerequisites: details.assignment.prerequisites
            } : undefined
        }));
        return mintModuleTokensTx({ client: this.client, provider: this.provider, alias, courseId, listOfModuleDetails: moduleDetails })
    }
}