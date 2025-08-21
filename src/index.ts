import { Network } from "./common/network";
import { UtxorpcClient } from "./common/u5c";
import { Provider } from "./provider";
import AndamioConfigPreprod from "./common/andamio-config-preprod.json";
import AndamioConfigMainnet from "./common/andamio-config-mainnet.json";
import AndamioConfigPreprodV2 from "./common/andamio-config-preprod-v2.json";
import { SdkError } from "./common/error";
import { Transaction } from "./tx";
import { Utils } from "./utils";

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
  public utils: Utils;

  constructor(
    private readonly baseUrl: string,
    private readonly network: Network,
    private readonly protocolVersion?: number,
    private readonly dmtr_api_key?: string
  ) {
    if (this.network === "Preview") {
      throw new SdkError("Preview network is not supported by Andamio");
    } else if (this.network === "Preprod" && this.protocolVersion === 2) {
      this.config = AndamioConfigPreprodV2;
    } else if (this.network === "Preprod") {
      this.config = AndamioConfigPreprod;
    }

    this.client = new UtxorpcClient(
      this.baseUrl,
      this.network,
      this.protocolVersion,
      this.dmtr_api_key
    );
    this.provider = new Provider(this.client);
    this.transaction = new Transaction(this.client, this.provider);
    this.utils = new Utils();
  }
}

export default AndamioSDK;


// Export Types
export type { Network } from "./common/network";
export type { Utxo, BlockfrostUTxO } from "./common/utxo";
export type { UtxorpcClient } from "./common/u5c";
export type { Provider } from "./provider";
export type { Transaction } from "./tx";
export type { Utils } from "./utils";