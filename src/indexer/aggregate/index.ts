import { UtxorpcClient } from "~/client";
import { CourseInfo } from "./course";
import { ProjectInfo } from "./project";

/**
 * The Aggregate class serves as the main entry point for interacting with aggregate data.
 */
export class Aggregate {
    /**
     * An instance of CourseInfo for getting course information.
     */
    public courseInfo: CourseInfo;
    public projectInfo: ProjectInfo;


    /**
     * Constructs a new Core instance and initializes its components.
     *
     * @param client - The UtxorpcClient instance used to initialize the components.
     */
    constructor(private readonly client: UtxorpcClient) {
        this.courseInfo = new CourseInfo(this.client);
        this.projectInfo = new ProjectInfo(this.client);
    }
}
