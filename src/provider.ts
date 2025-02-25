import { UtxorpcClient } from "./client";
import { Core } from "./indexer/core";
import { UtxorpcClientParams } from "./types/types";

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
  private client: UtxorpcClient;
  public core: Core;

  /**
   * Creates an instance of the `Provider` class.
   *
   * @param clientParams - The parameters required to initialize the UtxorpcClient.
   */
  constructor(private readonly clientParams: UtxorpcClientParams) {
    this.client = new UtxorpcClient(this.clientParams);
    this.core = new Core(this.client);
  }
}
