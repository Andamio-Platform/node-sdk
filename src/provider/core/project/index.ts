import { UtxorpcClient } from "../../../u5c";
import { ContributorState } from "./contributor-state";
import { Escrow } from "./escrow";
import { Treasury } from "./treasury";

/**
 * Represents a Project in the system.
 * 
 * A Project contains various states including contributor state, escrow, and treasury.
 * 
 * @class
 */
export class Project {
    public contributorState: ContributorState;
    public escrow: Escrow;
    public treasury: Treasury;

    /**
     * Creates an instance of Project.
     * @param client - The UtxorpcClient instance used to interact with the project.
     */
    constructor(private readonly client: UtxorpcClient) {
        this.contributorState = new ContributorState(this.client);
        this.escrow = new Escrow(this.client);
        this.treasury = new Treasury(this.client);
    }
}