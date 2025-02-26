import { UtxorpcClient } from "~/client";
import { Course } from "./course";
import { Assignment } from "./assignment";
import { Module } from "./module";

export * from "./course";

/**
 * Represents the core course functionality.
 */
export class CoreCourse {
  /**
   * The course instance.
   */
  public course: Course;
  public assignment: Assignment;
  public module: Module;

  /**
   * Creates an instance of CoreCourse.
   * @param client - The UtxorpcClient instance used to interact with the course.
   */
  constructor(private readonly client: UtxorpcClient) {
    this.course = new Course(this.client);
    this.assignment = new Assignment(this.client);
    this.module = new Module(this.client);
  }
}
