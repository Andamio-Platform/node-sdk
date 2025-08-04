import { UtxorpcClient } from "../../common/u5c";
import { AliasIndex } from "./alias-index";
import { GlobalState } from "./global-state";
import { IndexReference } from "./index-reference";
import { LocalStates } from "./local-states";
import { Stake } from "./stake";
import { UserAccessToken } from "./user-access-token";

/**
 * The Core class serves as the main entry point for querying various core Andamio utxo data.
 */
export class Core {

  public readonly andamioConfig;
  public readonly network;

  public aliasIndex: AliasIndex;
  public globalState: GlobalState;
  public indesxReference: IndexReference;
  public userAccessToken: UserAccessToken;
  public stake: Stake;

  public localStates: LocalStates;

  constructor(public readonly client: UtxorpcClient) {
    this.andamioConfig = this.client.andamioConfig;
    this.network = this.client.network;

    this.aliasIndex = new AliasIndex(this.client);
    this.globalState = new GlobalState(this.client);
    this.indesxReference = new IndexReference(this.client);
    this.userAccessToken = new UserAccessToken(this.client);
    this.stake = new Stake(this.client);

    this.localStates = new LocalStates(this.client);
  }
}