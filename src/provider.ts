import { UtxorpcClient } from "./client";
import {
  AliasIndex,
  GlobalState,
  Governance,
  Instance,
} from "./indexer/core";
import { Course } from "./indexer/core/course";
import { UtxorpcClientParams } from "./types";

export class CoreCourse {
  public course: Course;

  constructor(private readonly client: UtxorpcClient) {
    this.course = new Course(this.client);
  }
}

export class Core {
  public aliasIndex: AliasIndex;
  public globalState: GlobalState;
  public governance: Governance;
  public instance: Instance;

  public course: CoreCourse;

  constructor(private readonly client: UtxorpcClient) {
    this.aliasIndex = new AliasIndex(this.client);
    this.globalState = new GlobalState(this.client);
    this.governance = new Governance(this.client);
    this.instance = new Instance(this.client);

    this.course = new CoreCourse(this.client);
  }
}

export class Provider {
  private client: UtxorpcClient;
  public core: Core;

  constructor(private readonly clientParams: UtxorpcClientParams) {
    this.client = new UtxorpcClient(this.clientParams);
    this.core = new Core(this.client);
  }
}
