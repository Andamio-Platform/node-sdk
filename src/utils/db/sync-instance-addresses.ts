import { LocalStateType, PrismaClient } from "../../../prisma/generated/client";
import seed from "../../seed.json";
import { logger } from "../../logger";
import { deserializeTx } from "@meshsdk/core-csl";
import { Transaction } from "./transaction";
import { deriveInstanceAddress } from "../derive-instance-address";
import { hexToString } from "@meshsdk/common";
import { MiniBlockfrost } from "../dolos/mini-bf";
import { Network } from "../../network";
import { AndamioConfig } from "../../andamio-config";

export async function syncInstanceAddresses(miniBlockfrost: MiniBlockfrost, network: Network, andamioConfig: AndamioConfig) {
    const prisma = new PrismaClient()

    let blockHash;
    let nextBlocks;

    // Get the latest block hash from the database
    const tip = (await prisma.addressToWatchSyncTip.findMany())[0];

    if (tip) {
        blockHash = tip.blockHash;
        nextBlocks = await miniBlockfrost.fetchNextBlocks(blockHash);
    } else {
        blockHash = seed.blockHash;
        // Fetch the previous block to start the sync
        const previousBlocks = await miniBlockfrost.fetchPreviousBlocks(blockHash);
        blockHash = previousBlocks[previousBlocks.length - 1].hash;
        nextBlocks = await miniBlockfrost.fetchNextBlocks(blockHash);
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
                blockAddresses = await miniBlockfrost.fetchBlockAddresses(block.hash);
            } catch (error) {
                logger.error(`Failed to fetch addresses for block ${block.hash}: ${error}`);
                // Skip this block and continue with the next one
                continue;
            }

            const instanceValidatorAddress = andamioConfig.instanceMS.mSCAddress;
            const instanceTokenPolicy = andamioConfig.instanceMS.mSCPolicyID;


            const instanceValidatorBlockAddress = blockAddresses.find((blockAddress: any) =>
                blockAddress.address === instanceValidatorAddress
            );

            if (instanceValidatorBlockAddress) {

                for (const tx of instanceValidatorBlockAddress.transactions) {

                    const cbor = await miniBlockfrost.fetchTxCbor(tx.tx_hash)

                    const txJson = deserializeTx(cbor.cbor).to_json();
                    const txJs: Transaction = JSON.parse(txJson);

                    const instanceScriptUtxos = txJs.body.outputs.filter((output) => {
                        if (!output.amount.multiasset) return false;

                        const assets = output.amount.multiasset[instanceTokenPolicy];
                        if (!assets) return false;

                        return Object.keys(assets).some(assetName => {
                            const tokenName = hexToString(assetName);
                            return tokenName === "TreasuryScripts" ||
                                tokenName === "ModuleScripts" ||
                                tokenName === "CourseStateScripts" ||
                                tokenName === "AssignmentValidator" ||
                                tokenName === "Escrow1" ||
                                tokenName === "ContributorStateScripts";
                        });
                    });

                    for (const instanceScriptUtxo of instanceScriptUtxos) {
                        const datum = JSON.parse(instanceScriptUtxo.plutus_data!.Data);
                        const address = deriveInstanceAddress(instanceScriptUtxo.script_ref!.PlutusScript, network, andamioConfig);
                        try {
                            // Find the token name to determine the type
                            let type: LocalStateType = "Unspecified"; // Default type

                            if (instanceScriptUtxo.amount.multiasset && instanceScriptUtxo.amount.multiasset[instanceTokenPolicy]) {
                                for (const assetName of Object.keys(instanceScriptUtxo.amount.multiasset[instanceTokenPolicy])) {
                                    const tokenName = hexToString(assetName);
                                    type = tokenName === "ModuleScripts" ? "ModuleRef" :
                                        tokenName === "CourseStateScripts" ? "Course" :
                                            tokenName === "AssignmentValidator" ? "Assignment" :
                                                tokenName === "TreasuryScripts" ? "Treasury" :
                                                    tokenName === "Escrow1" ? "Escrow" :
                                                        tokenName === "ContributorStateScripts" ? "ContributorState" :
                                                            "Unspecified";
                                    break;
                                }
                            }

                            await prisma.addressToWatch.create({
                                data: {
                                    key: datum.bytes,
                                    value: address,
                                    type: type
                                }
                            });

                        } catch (error) {
                            logger.error(`Failed to create addressToWatch entry: ${error}`);
                        }
                    }
                    
                }
                logger.log(`✨ Found instance creation transaction in block: ${block.hash}`);

            }
            // Update or create the sync slot record
            await prisma.addressToWatchSyncTip.upsert({
                where: { id: 1 }, // Assuming there's only one record
                update: {
                    slot: block.slot,
                },
                create: {
                    slot: block.slot,
                    blockHash: block.hash
                }
            });
        }

        // Get next batch of blocks using the last processed block's hash
        blockHash = nextBlocks[nextBlocks.length - 1].hash;
        nextBlocks = await miniBlockfrost.fetchNextBlocks(blockHash);

        // Safety check to avoid infinite loop if we reach the chain tip
        if (nextBlocks.length === 0) {
            logger.log('Reached the end of the chain or no more blocks available');
            break;
        }
    }
}