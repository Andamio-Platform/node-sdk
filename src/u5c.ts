import { Utxo } from "./utxo";
import { SdkError } from "./error";
import { logger } from "./logger";
import { CardanoQueryClient } from "@utxorpc/sdk";
import { cardano } from "@utxorpc/spec";
import { toAddress } from "@meshsdk/core-cst";
import { hexToBytes, toBytes } from "@meshsdk/common";
import { Network } from "./network";

export class UtxorpcClient {
    private readonly cardanoQueryClient: CardanoQueryClient;

    constructor(
        private readonly baseUrl: string,
        private readonly network: Network,
        private readonly dmtr_api_key?: string
    ) {
        this.network = this.network;
        this.cardanoQueryClient = this.initializeCardanoClient();
    }

    private initializeCardanoClient(): CardanoQueryClient {
        return new CardanoQueryClient({
            uri: this.baseUrl,
            headers: {
                "dmtr-api-key": this.dmtr_api_key || "",
            },
        });
    }

    /**
     * Fetch UTXOs for a given address
     */
    async getUtxos(
        address: string,
        policy?: string,
        name?: string,
    ): Promise<Utxo[]> {

        // Fetch from gRPC
        const utxos = await this.fetchUtxosFromGrpc(address, policy, name);

        return utxos;
    }



    private async fetchUtxosFromGrpc(
        address: string,
        policy?: string,
        name?: string,
    ): Promise<Utxo[]> {
        logger.log("Fetching UTXOs from gRPC...");
        try {
            const addressBytes = toBytes(toAddress(address).toBytes());
         
            let response: Utxo[];

            if (policy || name) {
                response = await this.fetchUtxosWithAsset(addressBytes, policy, name);
            } else {
                response =
                    await this.cardanoQueryClient.searchUtxosByAddress(addressBytes);
            }

            logger.log("UTXOs fetched");
            return response;
        } catch (error) {
            logger.error(JSON.stringify(error, null, 2));
            throw new SdkError("Failed to fetch UTXOs.");
        }
    }

    private async fetchUtxosWithAsset(
        addressBytes: Uint8Array,
        policy?: string,
        name?: string,
    ): Promise<Utxo[]> {
        const asset_policy = policy ? hexToBytes(policy) : undefined;
        const asset_name = name ? hexToBytes(name) : undefined;

        return await this.cardanoQueryClient.searchUtxosByAddressWithAsset(
            addressBytes,
            asset_policy,
            asset_name,
        );
    }

    /**
     * Fetch network parameters
     */
    async getParams(): Promise<cardano.PParams> {


        // Fetch from gRPC
        logger.log("Fetching network params...");
        try {
            const params = await this.cardanoQueryClient.readParams();
            logger.log("Network params fetched");

            return params;
        } catch (error) {
            logger.error(JSON.stringify(error, null, 2));
            throw new SdkError("Failed to fetch network params.");
        }
    }


}