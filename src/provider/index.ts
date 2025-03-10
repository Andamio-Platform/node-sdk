import { UtxorpcClient } from "../u5c";
import { Core } from "./core";
// import { Aggregate } from "./indexer/aggregate";
// import { Core } from "./indexer/core";

/**
 * The `Provider` class is responsible for initializing and managing the UtxorpcClient and Core instances.
 *
 * @remarks
 * This class acts as a bridge between the client parameters and the core functionalities provided by the UtxorpcClient and Core classes.
 *
 * @example
 * ```typescript
 * const provider = new Provider(clientParams);
 * ```
 */
export class Provider {
      public core: Core;
    //   public aggregate: Aggregate;

    /**
     * Creates an instance of the `Provider` class.
     *
     * @param clientParams - The parameters required to initialize the UtxorpcClient.
     */
    constructor(private readonly client: UtxorpcClient) {
        this.core = new Core(this.client);
        // this.aggregate = new Aggregate(this.client);
    }
}