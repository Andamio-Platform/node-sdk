import { logger } from "../../logger";

export async function fetchTxCbor(txHash: string) {
    const txCbor = await fetch(
        `http://192.168.1.7:50052/txs/${txHash}/cbor`,
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

export async function fetchPreviousBlocks(blockHash: string) {
    const blocks = await fetch(
        `http://192.168.1.7:50052/blocks/${blockHash}/previous`,
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

export async function fetchNextBlocks(blockHash: string) {
    const blocks = await fetch(
        `http://192.168.1.7:50052/blocks/${blockHash}/next`,
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

export async function fetchBlockAddresses(blockHash: string) {
    const addresses = await fetch(
        `http://192.168.1.7:50052/blocks/${blockHash}/addresses`,
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