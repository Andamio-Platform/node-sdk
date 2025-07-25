import { UtxorpcClient } from "../common/u5c";
import { Provider } from "../provider";
import { buildTx } from "./mint-access-token";
import { buildTxSponsor } from "./sponsor-mint-access-token";
import { StudentTransactions } from "./student";
import { CourseCreatorTransactions } from "./course-creator";



export class Transaction {

    public student: StudentTransactions;
    public courseCreator: CourseCreatorTransactions;

    constructor(private readonly client: UtxorpcClient, private readonly provider: Provider) {
        this.student = new StudentTransactions(this.provider);
        this.courseCreator = new CourseCreatorTransactions(this.provider);
    }

    public mintAccessToken = async ({ userAddress, alias }: { userAddress: string, alias: string }) => buildTx({ client: this.client, provider: this.provider, userAddress, alias })

    public sponsorMintAccessToken = async ({ userAddress, alias }: { userAddress: string, alias: string }) => buildTxSponsor({ client: this.client, provider: this.provider, userAddress, alias })

}