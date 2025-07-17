import { Core } from "../../core";
import { enrolleeCount } from "./enrollee-count";

export class Stats {

    constructor(private readonly core: Core) { }

    async getEnrolleeCount(policies: string[]) { return await enrolleeCount(this.core, policies) }
}