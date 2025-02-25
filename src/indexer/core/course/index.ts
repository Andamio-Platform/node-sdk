import { UtxorpcClient } from "~/client";
import { Course } from "./course";

export * from "./course";

/**
 * Represents the core course functionality.
 */
export class CoreCourse {
  /**
   * The course instance.
   */
  public course: Course;

  /**
   * Creates an instance of CoreCourse.
   * @param client - The UtxorpcClient instance used to interact with the course.
   */
  constructor(private readonly client: UtxorpcClient) {
    this.course = new Course(this.client);
  }
}
