import { Provider } from "../../provider"
import { ModuleDetails } from "../../utils/parser/datum/local-states/module-reference";
import { acceptAsignmentTx } from "./accept-assignment";
import { mintModuleTokensTx } from "./mint-module-tokens";

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

export class CourseCreatorTransactions {

    constructor(private readonly provider: Provider) { }

    public acceptAssignment = async ({ approverAlias, studentAlias, courseId, moduleTokenName }: { approverAlias: string, studentAlias: string, courseId: string, moduleTokenName: string }) => acceptAsignmentTx({ client: this.provider.core.client, provider: this.provider, approverAlias, studentAlias, courseId, moduleTokenName })

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
        return mintModuleTokensTx({ client: this.provider.core.client, provider: this.provider, alias, courseId, listOfModuleDetails: moduleDetails })
    }
}