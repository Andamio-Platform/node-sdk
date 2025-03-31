import { Network } from "./network";
import { UtxorpcClient } from "./u5c";
import { Provider } from "./provider";

/**
 * Main class for the Andamio SDK.
 * Provides access to the UTXO-RPC client and provider.
 * 
 * @class AndamioSDK
 * @example
 * ```typescript
 * const sdk = new AndamioSDK('https://preprod.utxorpc-v0.demeter.run:443', 'Preprod', 'dmtr_utxorpc...');
 * ```
 */
export class AndamioSDK {
  private client: UtxorpcClient;
  public provider: Provider;

  constructor(
    private readonly baseUrl: string,
    private readonly network: Network,
    private readonly dmtr_api_key?: string
  ) {
    this.client = new UtxorpcClient(
      this.baseUrl,
      this.network,
      this.dmtr_api_key
    );
    this.provider = new Provider(this.client);
  }
}

export default AndamioSDK;