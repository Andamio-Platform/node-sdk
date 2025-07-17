import { Core } from "../core";
import { Project } from "./project";
import { aliasAvailability } from "./alias-availability";
import { allAliases } from "./all-aliases";
import { Stats } from "./stats";
import { AliasData, userData } from "./user-data";
import { allInstances } from "./all-instances";


/**
 * Provides network-level utilities to query aliases and instances on Andamio.
 */
export class Overview {

  public project: Project;
  public stats: Stats;

  constructor(private readonly core: Core) {
    this.project = new Project(this.core);
    this.stats = new Stats(this.core);
  }

  async checkAliasAvailability(alias: string): Promise<boolean> { return await aliasAvailability(this.core, alias) }

  /**
   * Fetches all known aliases from the network.
   */
  async getAllAliases(): Promise<string[]> { return await allAliases(this.core) }

  /**
   * Fetches user data associated with a specific alias.
   */
  async getUserData(alias: string): Promise<{ info: string; data: AliasData }> { return await userData(this.core, alias) }

  /**
   * Fetches all policy IDs categorized as courses or projects.
   */
  async getAllInstancesList(): Promise<{ courses: string[]; projects: string[] }> { return await allInstances(this.core) }


}
