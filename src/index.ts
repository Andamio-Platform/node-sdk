import { Network } from "./network";
import { UtxorpcClient } from "./u5c";
import { Provider } from "./provider";

/**
 * Andamio SDK for querying andamio data, building transactions, and datum utility functions
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