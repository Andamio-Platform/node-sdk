import { Network } from "./network";
import { UtxorpcClient } from "./u5c";
import { Provider } from "./provider";
import AndamioConfigPreprod from "./andamio-config-preprod.json";
import AndamioConfigMainnet from "./andamio-config-mainnet.json";
import { SdkError } from "./error";
import { Transaction } from "./tx";
import { Utils } from "./utils";
import { MiniBlockfrost } from "./utils/dolos/mini-bf";
import { AndamioConfig } from "./andamio-config";

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
  public config: AndamioConfig = AndamioConfigMainnet;

  private client: UtxorpcClient;
  private miniBlockfrost?: MiniBlockfrost;
  public provider: Provider;
  public transaction: Transaction;
  public utils: Utils;

  constructor(
    private readonly baseUrl: string,
    private readonly network: Network,
    private readonly dmtr_api_key?: string,
    private readonly miniBlockfrostUrl?: string
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
    if (this.miniBlockfrostUrl) {
      this.miniBlockfrost = new MiniBlockfrost(this.miniBlockfrostUrl);
    }
    this.provider = new Provider(this.client);
    this.transaction = new Transaction();
    this.utils = new Utils(this.network, this.miniBlockfrost);
  }
}

export default AndamioSDK;