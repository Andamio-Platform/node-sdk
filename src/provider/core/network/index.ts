import { UtxorpcClient } from "../../../u5c";
import { AliasIndex } from "./alias-index";
import { GlobalState } from "./global-state";
import { Governance } from "./governance";
import { Instance } from "./instance";


/**
 * The Core class serves as the main entry point for interacting with various components
 * of the system, such as AliasIndex, GlobalState, Governance, Instance, and CoreCourse.
 * It initializes these components using the provided UtxorpcClient instance.
 */
export class Network {
  /**
   * An instance of AliasIndex for managing alias-related operations.
   */
  public aliasIndex: AliasIndex;

  /**
   * An instance of GlobalState for managing global state operations.
   */
  public globalState: GlobalState;

  /**
   * An instance of Governance for managing governance-related operations.
   */
  public governance: Governance;

  /**
   * An instance of Instance for managing instance-related operations.
   */
  public instance: Instance;

  /**
   * Constructs a new Core instance and initializes its components.
   *
   * @param client - The UtxorpcClient instance used to initialize the components.
   */
  constructor(private readonly client: UtxorpcClient) {
    this.aliasIndex = new AliasIndex(this.client);
    this.globalState = new GlobalState(this.client);
    this.governance = new Governance(this.client);
    this.instance = new Instance(this.client);
  }
}