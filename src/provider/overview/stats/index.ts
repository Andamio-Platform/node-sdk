import { Core } from "../../core";
import { commitmentCount, commitmentCountUnderAlias } from "./commitments-count";
import { enrolleeCount } from "./enrollee-count";

export class Stats {

    constructor(private readonly core: Core) { }

    async getEnrolleeCount(policies: string[]) { return await enrolleeCount(this.core, policies) }

    async getCommitmentCount(policies: string[]) { return await commitmentCount(this.core, policies) }

    async getCommitmentCountUnderAlias(alias: string) { return await commitmentCountUnderAlias(this.core, alias) }
}