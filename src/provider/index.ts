import { SdkError } from "../error";
import { UtxorpcClient } from "../u5c";
import { Core } from "./core";
import { Network } from "./network";
// import { Aggregate } from "./indexer/aggregate";
// import { Core } from "./indexer/core";

/**
 * The `Provider` class is responsible for querying Andamio related on-chain data, both high-level data and core utxo data.
 *
 * @remarks
 * This class acts as a bridge between the client and the query functionality of the SDK,
 * providing access to both core blockchain queries and network-related queries.
 *
 * @example
 * ```typescript
 * const sdk = new AndamioSDK('https://preprod.utxorpc-v0.demeter.run:443', 'Preprod', 'dmtr_utxorpc...');
 * 
 * // Access core blockchain queries
 * await sdk.provider.core.someMethod();
 * 
 * // Access network queries
 * await sdk.provider.network.someMethod();
 * ```
 */
export class Provider {
  /** Core blockchain operations */
  public core: Core;

  /** Network-related functionality */
  public network: Network;

  /**
   * Creates an instance of the `Provider` class.
   *
   * @param client - The initialized UtxorpcClient instance to use for API communications
   */
  constructor(private readonly client: UtxorpcClient) {
    this.core = new Core(this.client);
    this.network = new Network(this.core);
  }

  public async aliasAvailability(alias: string): Promise<boolean> {
    try {
      const utxo = await this.core.network.aliasIndex.getUtxoByNewAlias(alias);
      if (utxo) return true; // Alias exists, so not available
      throw new SdkError(`Unknown case: UTXO found but alias availability unclear for "${alias}"`);
    } catch (error) {
      if (error instanceof Error && error.message.includes('Alias already exists')) {
        return false; // Alias exists, so not available
      }
      throw new SdkError(`Failed to check alias availability: ${error}`);
    }
  }
}