import { UtxorpcClient } from "../common/u5c";
import { Core } from "./core";
import { Overview } from "./overview";

export class Provider {

  public core: Core;
  public overview: Overview;

  constructor(private readonly client: UtxorpcClient) {
    this.core = new Core(this.client);
    this.overview = new Overview(this.core);
  }

}