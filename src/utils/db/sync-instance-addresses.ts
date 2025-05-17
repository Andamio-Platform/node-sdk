import { PrismaClient } from "../../../prisma/generated/client";
import { fetchBlockAddresses, fetchNextBlocks, fetchPreviousBlocks, fetchTxCbor } from "../dolos/mini-bf";
import seed from "../../seed.json";
import { logger } from "../../logger";
import { addressesToWatch } from "./addresses-to-watch";
import { catchInstanceCreation } from "./catch-instance-creation";
import { deserializeTx } from "@meshsdk/core-csl";
import { Transaction } from "./transaction";
import { deriveInstanceAddress } from "../derive-instance-address";
import { hexToString } from "@meshsdk/common";

export async function syncTreasuryAddresses() {
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

    let i = 0;
    while (nextBlocks.length > 0) {
        // Process blocks sequentially to avoid race conditions
        if (i % 100 === 0) {
            logger.log(`Syncing ⏳⏳⏳ [ Slot: ${nextBlocks[0].slot} - Block: ${nextBlocks[0].hash} ]`);
        }
        i++;

        for (const block of nextBlocks) {

            // // Query the addresses affected in the block
            // const addresses = await fetchBlockAddresses(block.hash);

            // Query the addresses affected in the block
            let blockAddresses;
            try {
                blockAddresses = await fetchBlockAddresses(block.hash);
            } catch (error) {
                logger.error(`Failed to fetch addresses for block ${block.hash}: ${error}`);
                // Skip this block and continue with the next one
                continue;
            }

            const instanceValidatorAddress = "addr_test1xpyga27u94rsgnzdgu4df3w8mes538dymt5dhqlszgmfxeyke8x9mpjf7aerjt3n3nfd5tnzkfhlprp09mpf4sdy8dzqcrqkuk";
            const instanceTokenPolicy = "488eabdc2d47044c4d472ad4c5c7de61489da4dae8db83f012369364"


            const instanceValidatorBlockAddress = blockAddresses.find((blockAddress: any) =>
                blockAddress.address === instanceValidatorAddress
            );

            if (instanceValidatorBlockAddress) {

                for (const tx of instanceValidatorBlockAddress.transactions) {

                    const cbor = await fetchTxCbor(tx.tx_hash)

                    const txJson = deserializeTx(cbor.cbor).to_json();
                    const txJs: Transaction = JSON.parse(txJson);

                    const instanceScriptUtxos = txJs.body.outputs.filter((output) => {
                        if (!output.amount.multiasset) return false;
                        
                        const assets = output.amount.multiasset[instanceTokenPolicy];
                        return assets && Object.keys(assets).some(assetName => hexToString(assetName) === "TreasuryScripts");
                    });

                    for (const instanceScriptUtxo of instanceScriptUtxos) {
                        const datum = JSON.parse(instanceScriptUtxo.plutus_data!.Data);
                        const address = deriveInstanceAddress(instanceScriptUtxo.script_ref!.PlutusScript);
                        try {
                            await prisma.addressToWatch.create({
                                data: {
                                    key: datum.bytes,
                                    value: address,
                                    type: "Treasury"
                                }
                            })
                            logger.log(`✨ Found instance creation transaction in block: ${block.hash}`);
                        } catch (error) {
                            logger.error(`Failed to create addressToWatch entry: ${error}`);
                        }
                    }


                }

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