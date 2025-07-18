import { Core } from "../../core";
import { commitmentsCount } from "./commitments-count";
import { enrolleeCount } from "./enrollee-count";

export class Stats {

    constructor(private readonly core: Core) { }

    async getEnrolleeCount(policies: string[]) { return await enrolleeCount(this.core, policies) }

    async getCommitmentsCount(policies: string[]) { return await commitmentsCount(this.core, policies) }
}