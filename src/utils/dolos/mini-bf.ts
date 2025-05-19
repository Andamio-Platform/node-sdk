import { logger } from "../../logger";

export class MiniBlockfrost {
    private baseUrl: string;

    constructor(url: string) {
        this.baseUrl = url;
    }

    public async fetchTxCbor(txHash: string) {
        const txCbor = await fetch(
            `${this.baseUrl}/txs/${txHash}/cbor`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
            }
        )
            .then((response) => {
                if (!response.ok) {
                    logger.error(`Failed to fetch transaction CBOR: ${response.statusText}`);
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })

        return txCbor
    }

    public async fetchPreviousBlocks(blockHash: string) {
        const blocks = await fetch(
            `${this.baseUrl}/blocks/${blockHash}/previous`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
            }
        )
            .then((response) => {
                if (!response.ok) {
                    logger.error(`Failed to fetch previous blocks: ${response.statusText}`);
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })

        return blocks
    }

    public async fetchNextBlocks(blockHash: string) {
        const blocks = await fetch(
            `${this.baseUrl}/blocks/${blockHash}/next`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
            }
        )
            .then((response) => {
                if (!response.ok) {
                    logger.error(`Failed to fetch next blocks: ${response.statusText}`);
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })

        return blocks
    }

    public async fetchBlockAddresses(blockHash: string) {
        const addresses = await fetch(
            `${this.baseUrl}/blocks/${blockHash}/addresses`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
            }
        )
            .then((response) => {
                if (!response.ok) {
                    logger.error(`Failed to fetch block addresses: ${response.statusText} - Block Hash: ${blockHash}`);
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })

        return addresses
    }
}