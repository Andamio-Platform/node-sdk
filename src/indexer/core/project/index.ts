import { UtxorpcClient } from "~/client";
import { Contributor } from "./contributor";
import { Escrow } from "./escrow";
import { Treasury } from "./treasury";


/**
 * Represents the core course functionality.
 */
export class CoreProject {
  /**
   * The course instance.
   */
  public contributor: Contributor;
  public escrow: Escrow;
  public treasury: Treasury;

  /**
   * Creates an instance of CoreCourse.
   * @param client - The UtxorpcClient instance used to interact with the course.
   */
  constructor(private readonly client: UtxorpcClient) {
    this.contributor = new Contributor(this.client);
    this.escrow = new Escrow(this.client);
    this.treasury = new Treasury(this.client);
  }
}
