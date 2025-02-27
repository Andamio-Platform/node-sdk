import { SdkError } from "~/utils";
import { CoreProject } from "../core/project";
import { Assignment } from "../core/course/assignment";
import { Module } from "../core/course/module";
import { UtxorpcClient } from "~/client";

export class ProjectInfo {
    private project: CoreProject;

    constructor(private readonly client: UtxorpcClient) {
        this.project = new CoreProject(this.client);
    }

    async commitments(projectNftPolicy: string): Promise<number> {
        try {
            const courseStateUtxos = await this.project.escrow.getUtxos(projectNftPolicy);
            return courseStateUtxos.length;
        } catch (err) {
            throw new SdkError(`Failed to fetch escrow data: ${err}`);
        }
    }

    async funds(courseNftPolicy: string): Promise<bigint> {
        try {
            const utxos = await this.project.treasury.getUtxos(courseNftPolicy);
            const fundUtxos = utxos.filter((utxo) => !utxo.parsedValued.datum.payload);
            const lovelace = fundUtxos.reduce((acc, utxo) => acc + BigInt(utxo.parsedValued.coin), BigInt(0));
            return lovelace;
        } catch (err) {
            throw new SdkError(`Failed to fetch course modules: ${err}`);
        }
    }

    async contributors(courseNftPolicy: string): Promise<number> {
        try {
            const moduleRefUtxos = await this.project.contributor.getUtxos(courseNftPolicy);
            return moduleRefUtxos.length;
        } catch (err) {
            throw new SdkError(`Failed to fetch course modules: ${err}`);
        }
    }
}