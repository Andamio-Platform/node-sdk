import { UtxorpcClient } from "../../../u5c";
import { AssignmentState } from "./assignment-state";
import { CourseState } from "./course-state";
import { ModuleRef } from "./module-ref";

/**
 * Represents the core course functionality.
 * @internal
 */
export class Course {
  /**
   * The course instance.
   */
  public courseState: CourseState;
  public assignmentState: AssignmentState;
  public moduleRef: ModuleRef;

  /**
   * Creates an instance of CoreCourse.
   * @param client - The UtxorpcClient instance used to interact with the course.
   */
  constructor(private readonly client: UtxorpcClient) {
    this.courseState = new CourseState(this.client);
    this.assignmentState = new AssignmentState(this.client);
    this.moduleRef = new ModuleRef(this.client);
  }
}