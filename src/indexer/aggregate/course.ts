import { SdkError } from "~/utils";
import { CoreCourse, Course } from "../core/course";
import { Assignment } from "../core/course/assignment";
import { Module } from "../core/course/module";
import { UtxorpcClient } from "~/client";

export class CourseInfo {
    private course: CoreCourse

    constructor(private readonly client: UtxorpcClient) {
        this.course = new CoreCourse(this.client);
    }

    async enrolled(courseNftPolicy: string): Promise<number> {
        try {
            const courseStateUtxos = await this.course.course.getUtxos(courseNftPolicy);
            const assignmentStateUtxos = await this.course.assignment.getUtxos(courseNftPolicy);
            return courseStateUtxos.length + assignmentStateUtxos.length;
        } catch (err) {
            throw new SdkError(`Failed to fetch enrolled students data: ${err}`);
        }
    }

    async modules(courseNftPolicy: string): Promise<number> {
        try {
            const moduleRefUtxos = await this.course.module.getUtxos(courseNftPolicy);
            return moduleRefUtxos.length;
        } catch (err) {
            throw new SdkError(`Failed to fetch course modules: ${err}`);
        }
    }
}