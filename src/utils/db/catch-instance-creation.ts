import { deserializeTx } from "@meshsdk/core-csl";
import { Prisma, PrismaClient } from "../../../prisma/generated/client";
import { logger } from "../../logger";
import { Transaction } from "./transaction";
import AndamioConfigPreprod from "../../andamio-config-preprod.json";
import { hexToString } from "@meshsdk/common";
import { deriveInstanceAddress } from "../derive-instance-address";

export async function catchInstanceCreation(prisma: PrismaClient, blockData: Prisma.BlocksGetPayload<{
    include: { addresses: { include: { transactions: true } } };
}>, instanceValidatorAddress: string): Promise<void> {

    // logger.log(`Checking for instance creation in block: ${blockData.blockHash}`);
    for (const address of blockData.addresses) {
        if (address.address === instanceValidatorAddress) {
            logger.log(`Checking address: ${address.address}`);
            for (const transaction of address.transactions) {

                const txJson = deserializeTx(transaction.cbor).to_json();
                const txJs: Transaction = JSON.parse(txJson);

                const filteredOutputs = txJs.body.outputs.filter((output) => {
                    const assetIsPresent = output.amount.multiasset;

                    if (!assetIsPresent) return false;

                    const assetPolicyMatch = Object.keys(assetIsPresent).some(
                        (policyId) => policyId === AndamioConfigPreprod.instanceMS.mSCPolicyID
                    );

                    return assetPolicyMatch;
                });
                if (filteredOutputs.length > 0) {
                    logger.log(`Filtered Outputs: ${filteredOutputs.length}`);
                }

                for (const output of filteredOutputs) {
                    if (output.amount.multiasset) {
                        const asset = output.amount.multiasset[AndamioConfigPreprod.instanceMS.mSCPolicyID];
                        Object.keys(asset).forEach(async (key) => {
                            const tokenName = hexToString(key);
                            if (tokenName !== "TreasuryToken" && output.script_ref?.PlutusScript) {
                                logger.log(`Datum : ${output.plutus_data?.Data}`)
                                let datum;
                                if (output.plutus_data?.Data) {
                                    datum = JSON.parse(output.plutus_data?.Data);
                                }
                                const address = deriveInstanceAddress(output.script_ref.PlutusScript);
                                await prisma.addressToWatch.create({
                                    data: {
                                        key: output.plutus_data ? datum.bytes : "Unspecified",
                                        value: address,
                                        type:
                                            tokenName === "ModuleScripts" ? "ModuleRef" :
                                                tokenName === "CourseStateScripts" ? "Course" :
                                                    tokenName === "AssignmentValidator" ? "Assignment" :
                                                        tokenName === "TreasuryScripts" ? "Treasury" :
                                                            tokenName === "Escrow1" ? "Escrow" :
                                                                tokenName === "ContributorStateScripts" ? "ContributorState" :
                                                                    "Unspecified"
                                    }
                                })
                            }
                        });
                    }
                }
            }
            logger.log(`✨ Found instance creation transaction in block: ${blockData.blockHash}`);
        }
    }
}