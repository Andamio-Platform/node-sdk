import { UtxorpcClient } from "../../../common/u5c";
import { Instance } from "./instance";
import { InstanceGovernance } from "./instance-governance";
import { Course } from "./course";
import { Project } from "./project";

export class LocalStates {

    public instance: Instance;
    public instanceGovernance: InstanceGovernance

    public course: Course;
    public project: Project;

    constructor(private readonly client: UtxorpcClient) {
        this.instance = new Instance(this.client);
        this.instanceGovernance = new InstanceGovernance(this.client);

        this.course = new Course(this.client);
        this.project = new Project(this.client);
    }
}