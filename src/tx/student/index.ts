import { Provider } from "../../provider"
import { enrollCourseTx } from "./enroll"
import { commitAsignmentTx } from "./commit-assignment"

export class StudentTransactions {

    constructor(private readonly provider: Provider) { }

    public enrollCourse = async ({ alias, courseId }: { alias: string, courseId: string }) => enrollCourseTx({ client: this.provider.core.client, provider: this.provider, alias, courseId })

    public commitAssignment = async ({ alias, courseId, moduleTokenName, assignmentEvidenceInHex }: { alias: string, courseId: string, moduleTokenName: string, assignmentEvidenceInHex?: string }) => commitAsignmentTx({ client: this.provider.core.client, provider: this.provider, alias, courseId, moduleTokenName, assignmentEvidenceInHex })

}