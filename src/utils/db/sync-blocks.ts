import { PrismaClient } from "../../../prisma/generated/client";
import { fetchBlockAddresses, fetchNextBlocks, fetchPreviousBlocks, fetchTxCbor } from "../dolos/mini-bf";
import seed from "../../seed.json";
import { logger } from "../../logger";
import { addressesToWatch } from "./addresses-to-watch";
import { catchInstanceCreation } from "./catch-instance-creation";

export async function syncBlocks() {
    const prisma = new PrismaClient()

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
        blockHash = seed.blockHash;
        // Fetch the previous block to start the sync
        const previousBlocks = await fetchPreviousBlocks(blockHash);
        blockHash = previousBlocks[previousBlocks.length - 1].hash;
        nextBlocks = await fetchNextBlocks(blockHash);
    }

    while (nextBlocks.length > 0) {
        // Process blocks sequentially to avoid race conditions
        logger.log(`Syncing ⏳⏳⏳ [ Slot: ${nextBlocks[0].slot} - Block: ${nextBlocks[0].hash} ]`);
        for (const block of nextBlocks) {

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
            const addresses_to_watch = await addressesToWatch(prisma);

            // Find all addresses that match any entry in addresses_to_watch
            const relevantAddresses = [];

            for (const watchAddress of addresses_to_watch) {
                const matchingAddresses = addresses.filter((address: any) =>
                    address.address === watchAddress.value
                );

                if (matchingAddresses.length > 0) {
                    // logger.log(`✨ Found match for: ${watchAddress.key} ✨`);
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

                const createdBlock = await prisma.blocks.create({
                    data: blockData,
                    include: {
                        addresses: {
                            include: {
                                transactions: true,
                            },
                        },
                    },
                });


                // logger.log(`✅ Created block record for hash: ${block.hash}`);
                const instance_validator_address = addresses_to_watch.find((address) => address.key === "instance_validator")!.value;
                catchInstanceCreation(prisma, createdBlock, instance_validator_address);
            } catch (error) {
                logger.error(`❌ Failed to create block record: ${error} - Block Hash: ${block.hash}`);
            } ``

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
