import { UtxorpcClient } from "../u5c";
import { syncInstanceAddresses } from "./db/sync-instance-addresses";
import { syncTxs } from "./db/sync-txs";
import { MiniBlockfrost } from "./dolos/mini-bf";
import AndamioConfigPreprod from "../andamio-config-preprod.json";
import AndamioConfigMainnet from "../andamio-config-mainnet.json";
import { Network } from "../network";
import { SdkError } from "../error";

export class Utils {
    public andamioConfig = AndamioConfigMainnet;

    constructor(
        public readonly network: Network,
        private readonly miniBlockfrost?: MiniBlockfrost
    ) {
        if (this.network === "Preview") {
            throw new SdkError("Preview network is not supported by Andamio");
        } else if (this.network === "Preprod") {
            this.andamioConfig = AndamioConfigPreprod;
        }
    }

    public syncInstanceAddresses = async (): Promise<void> => {
        if (!this.miniBlockfrost) {
            throw new Error("MiniBlockfrost instance is required for syncing instance addresses.");
        }
        return syncInstanceAddresses(this.miniBlockfrost, this.network, this.andamioConfig);
    };

    public syncTxs = async (): Promise<void> => {
        if (!this.miniBlockfrost) {
            throw new Error("MiniBlockfrost instance is required for syncing instance addresses.");
        }
        return syncTxs(this.miniBlockfrost);
    };
}