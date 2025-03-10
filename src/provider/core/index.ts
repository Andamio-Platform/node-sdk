// import { AliasIndex } from "./alias_index";
// import { CoreCourse } from "./course";
// import { GlobalState } from "./global_state";
// import { Governance } from "./governance";
// import { Instance } from "./instance";
// import { UtxorpcClient } from "~/client";

import { UtxorpcClient } from "../../u5c";
import { GlobalState } from "./global_state";


/**
 * The Core class serves as the main entry point for interacting with various components
 * of the system, such as AliasIndex, GlobalState, Governance, Instance, and CoreCourse.
 * It initializes these components using the provided UtxorpcClient instance.
 */
export class Core {
  /**
   * An instance of AliasIndex for managing alias-related operations.
   */
//   public aliasIndex: AliasIndex;

//   /**
//    * An instance of GlobalState for managing global state operations.
//    */
  public globalState: GlobalState;

//   /**
//    * An instance of Governance for managing governance-related operations.
//    */
//   public governance: Governance;

//   /**
//    * An instance of Instance for managing instance-related operations.
//    */
//   public instance: Instance;

//   /**
//    * An instance of CoreCourse for managing course-related operations.
//    */
//   public course: CoreCourse;

  /**
   * Constructs a new Core instance and initializes its components.
   *
   * @param client - The UtxorpcClient instance used to initialize the components.
   */
  constructor(private readonly client: UtxorpcClient) {
    // this.aliasIndex = new AliasIndex(this.client);
    this.globalState = new GlobalState(this.client);
    // this.governance = new Governance(this.client);
    // this.instance = new Instance(this.client);
    // this.course = new CoreCourse(this.client);
  }
}