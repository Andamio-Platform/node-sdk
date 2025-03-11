import { UtxorpcClient } from "../../../u5c";
import { ContributorState } from "./contributor-state";
import { Escrow } from "./escrow";
import { Treasury } from "./treasury";

/**
 * Represents the core course functionality.
 */
export class Project {
    /**
     * The course instance.
     */
    public contributorState: ContributorState;
    public escrow: Escrow;
    public treasury: Treasury;

    /**
     * Creates an instance of CoreCourse.
     * @param client - The UtxorpcClient instance used to interact with the course.
     */
    constructor(private readonly client: UtxorpcClient) {
        this.contributorState = new ContributorState(this.client);
        this.escrow = new Escrow(this.client);
        this.treasury = new Treasury(this.client);
    }
}