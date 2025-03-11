import { UtxorpcClient } from "../../u5c";
import { Course } from "./course";
import { Network } from "./network";
import { Project } from "./project";

/**
 * The Core class serves as the main entry point for interacting with various components
 * of the system, such as AliasIndex, GlobalState, Governance, Instance, and CoreCourse.
 * It initializes these components using the provided UtxorpcClient instance.
 */
export class Core {
  /**
   * An instance of AliasIndex for managing alias-related operations.
   */
  public network: Network;

  /**
   * An instance of CoreCourse for managing course-related operations.
   */
  public course: Course;

  /**
   * An instance of Project for managing project-related operations.
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