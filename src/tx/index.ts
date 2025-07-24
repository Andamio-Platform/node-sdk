import { UtxorpcClient } from "../common/u5c";
import { Provider } from "../provider";
import { acceptAsignmentTx } from "./course/accept-assignment";
import { commitToAsignmentTx } from "./course/commit-to-assignment";
import { enrollCourseTx } from "./course/enroll";
import { buildTx } from "./mint-access-token";
import { buildTxSponsor } from "./sponsor-mint-access-token";

export class Transaction {

    constructor(private readonly client: UtxorpcClient, private readonly provider: Provider) { }

    public mintAccessToken = async ({ userAddress, alias }: { userAddress: string, alias: string }) => buildTx({ client: this.client, provider: this.provider, userAddress, alias })

    public sponsorMintAccessToken = async ({ userAddress, alias }: { userAddress: string, alias: string }) => buildTxSponsor({ client: this.client, provider: this.provider, userAddress, alias })

    public enrollCourse = async ({ alias, courseId }: { alias: string, courseId: string }) => enrollCourseTx({ client: this.client, provider: this.provider, alias, courseId })

    public commitAssignment = async ({ alias, courseId, moduleTokenName, assignmentEvidenceInHex }: { alias: string, courseId: string, moduleTokenName: string, assignmentEvidenceInHex?: string }) => commitToAsignmentTx({ client: this.client, provider: this.provider, alias, courseId, moduleTokenName, assignmentEvidenceInHex })

    public acceptAssignment = async ({ approverAlias, studentAlias, courseId, moduleTokenName }: { approverAlias: string, studentAlias: string, courseId: string, moduleTokenName: string }) => acceptAsignmentTx({ client: this.client, provider: this.provider, approverAlias, studentAlias, courseId, moduleTokenName })
}