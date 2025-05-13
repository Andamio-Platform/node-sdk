import { PrismaClient } from "../../../prisma/generated/client";
import { logger } from "../../logger";

const prisma = new PrismaClient()

export async function syncBlocks(blockHash: string) {
    // Fetch the previous block to start the sync
    let nextBlocks = await fetchPreviousBlocks(blockHash);

    while (nextBlocks.length >= 100) {
        blockHash = nextBlocks[nextBlocks.length - 1].hash;
        nextBlocks = await fetchNextBlocks(blockHash);

        // query the addresses affected in the blocks
        nextBlocks.map(async (block: any) => {

            // log the slot number to monitor the progress
            logger.log(`Syncing ⏳⏳⏳ [ Slot: ${block.slot} - Block: ${block.hash} ]`)

            const addresses = await fetchBlockAddresses(block.hash)

            // Get the andamio addresses to watch from the database
            // and filter the addresses from the blocks
            const addresses_to_watch = await addressesToWatch()
            const relevantAddresses = addresses.filter((address: any) =>
                addresses_to_watch.some((item: any) => {
                    const match = (item.value === address.address)
                    if (match) {
                        logger.log(`✨ Found match: ${item.key} ✨`)
                    }
                    return match
                })
            )


            // Save the blocks to the database
            try {
                await prisma.blocks.create({
                    data: {
                        blockHash: block.hash,
                        addresses: {
                            create: relevantAddresses.map((address: any) => ({
                                address: address.address,
                                transactions: {
                                    create: address.transactions.map((tx: any) => ({
                                        txHash: tx.tx_hash
                                    }))
                                }
                            }))
                        }
                    },
                });
                logger.log(`✅ Created block record for hash: ${block.hash}`);
            } catch (error) {
                logger.error(`Failed to create block record: ${error}`);
            }
        })


    }
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
