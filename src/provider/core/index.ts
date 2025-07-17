import { UtxorpcClient } from "../../common/u5c";
import { AliasIndex } from "./alias-index";
import { GlobalState } from "./global-state";
import { LocalStates } from "./local-states";

/**
 * The Core class serves as the main entry point for querying various core Andamio utxo data.
 */
export class Core {

  public readonly andamioConfig;
  public readonly network;

  public aliasIndex: AliasIndex;
  public globalState: GlobalState;

  public localStates: LocalStates;

  constructor(private readonly client: UtxorpcClient) {
    this.andamioConfig = this.client.andamioConfig;
    this.network = this.client.network;

    this.aliasIndex = new AliasIndex(this.client);
    this.globalState = new GlobalState(this.client);

    this.localStates = new LocalStates(this.client);
  }
}