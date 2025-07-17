import { bytesToHex } from "@meshsdk/common";
import { SdkError } from "../../../common/error";
import { Core } from "../../core";
import { deserializePlutusScript } from "@meshsdk/core-csl";
import cbor from "cbor";
import { treasuryTokenPolicy } from "./treasury-token-policy";

export class Project {
    constructor(private readonly core: Core) { }

    async getTreasuryTokenPolicy(projectNftPolicy: string): Promise<string> { return await treasuryTokenPolicy(this.core, projectNftPolicy); }

}