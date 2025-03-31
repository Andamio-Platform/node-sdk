import { UtxorpcClient } from "../../u5c";
import { Course } from "./course";
import { Network } from "./network";
import { Project } from "./project";

/**
 * The Core class serves as the main entry point for querying various core Andamio utxo data.
 */
export class Core {
  /**
   * An instance of Network for querying network-related utxo data.
   */
  public network: Network;

  /**
   * An instance of Course for querying course-related utxo data.
   */
  public course: Course;

  /**
   * An instance of Project for querying project-related utxo data.
   */
  public project: Project;

  /**
   * Constructs a new Core instance and initializes its components.
   *
   * @param client - The UtxorpcClient instance used to initialize the components.
   */
  constructor(private readonly client: UtxorpcClient) {
    this.network = new Network(this.client);
    this.course = new Course(this.client);
    this.project = new Project(this.client);
  }
}