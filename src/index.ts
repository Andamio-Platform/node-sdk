import { Network } from "./common/network";
import { UtxorpcClient } from "./common/u5c";
import { Provider } from "./provider";
import AndamioConfigPreprod from "./common/andamio-config-preprod.json";
import AndamioConfigMainnet from "./common/andamio-config-mainnet.json";
import { SdkError } from "./common/error";
import { Transaction } from "./tx";

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
  public config = AndamioConfigMainnet;

  private client: UtxorpcClient;
  public provider: Provider;
  public transaction: Transaction;

  constructor(
    private readonly baseUrl: string,
    private readonly network: Network,
    private readonly dmtr_api_key?: string
  ) {
    if (this.network === "Preview") {
      throw new SdkError("Preview network is not supported by Andamio");
    } else if (this.network === "Preprod") {
      this.config = AndamioConfigPreprod;
    }

    this.client = new UtxorpcClient(
      this.baseUrl,
      this.network,
      this.dmtr_api_key
    );
    this.provider = new Provider(this.client);
    this.transaction = new Transaction(this.client, this.provider);
  }
}

export default AndamioSDK;