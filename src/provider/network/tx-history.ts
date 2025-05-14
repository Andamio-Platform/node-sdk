import { BlockAddress, PrismaClient } from "../../../prisma/generated/client";
import { logger } from "../../logger";
import NetworkInitConfig from "../../network-init-config.json";

const prisma = new PrismaClient()

export async function syncBlocks() {
    let blockHash;
    let nextBlocks;

    // Get the latest block hash from the database
    const latestBlock = await prisma.blocks.findFirst({
        orderBy: {
            id: 'desc'
        },
        select: {
            blockHash: true
        }
    });

    if (latestBlock) {
        blockHash = latestBlock.blockHash;
        nextBlocks = await fetchNextBlocks(blockHash);
    } else {
        blockHash = NetworkInitConfig.blockHash;
        // Fetch the previous block to start the sync
        const previousBlocks = await fetchPreviousBlocks(blockHash);
        blockHash = previousBlocks[previousBlocks.length - 1].hash;
        nextBlocks = await fetchNextBlocks(blockHash);
    }

    while (nextBlocks.length > 0) {
        // Process blocks sequentially to avoid race conditions
        for (const block of nextBlocks) {
            logger.log(`Syncing ⏳⏳⏳ [ Slot: ${block.slot} - Block: ${block.hash} ]`);

            // // Query the addresses affected in the block
            // const addresses = await fetchBlockAddresses(block.hash);

            // Query the addresses affected in the block
            let addresses;
            try {
                addresses = await fetchBlockAddresses(block.hash);
            } catch (error) {
                logger.error(`Failed to fetch addresses for block ${block.hash}: ${error}`);
                // Skip this block and continue with the next one
                continue;
            }

            // Get the andamio addresses to watch from the database
            const addresses_to_watch = await addressesToWatch();

            // Find all addresses that match any entry in addresses_to_watch
            const relevantAddresses = [];

            for (const watchAddress of addresses_to_watch) {
                const matchingAddresses = addresses.filter((address: any) =>
                    address.address === watchAddress.value
                );

                if (matchingAddresses.length > 0) {
                    logger.log(`✨ Found match for: ${watchAddress.key} ✨`);
                    relevantAddresses.push(...matchingAddresses);
                }
            }

            // Save the block to the database
            try {
                const blockData = {
                    blockHash: block.hash,
                    addresses: {
                        create: await Promise.all(
                            relevantAddresses.map(async (address: any) => {
                                const transactions = await Promise.all(
                                    address.transactions.map(async (tx: any) => {
                                        const txCbor = await fetchTxCbor(tx.tx_hash);
                                        return {
                                            txHash: tx.tx_hash,
                                            cbor: txCbor.cbor,
                                        };
                                    })
                                );

                                return {
                                    address: address.address,
                                    transactions: {
                                        create: transactions,
                                    },
                                };
                            })
                        ),
                    },
                };

                await prisma.blocks.create({
                    data: blockData,
                });

                // logger.log(`✅ Created block record for hash: ${block.hash}`);
            } catch (error) {
                logger.error(`❌ Failed to create block record: ${error} - Block Hash: ${block.hash}`);
            }

        }

        // Get next batch of blocks using the last processed block's hash
        blockHash = nextBlocks[nextBlocks.length - 1].hash;
        nextBlocks = await fetchNextBlocks(blockHash);

        // Safety check to avoid infinite loop if we reach the chain tip
        if (nextBlocks.length === 0) {
            logger.log('Reached the end of the chain or no more blocks available');
            break;
        }
    }
}

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

export async function addressesToWatch() {
    const addresses = await prisma.addressToWatch.findMany({})

    return addresses
};
