/*
  Warnings:

  - You are about to drop the column `blockAddressId` on the `Transaction` table. All the data in the column will be lost.
  - You are about to drop the `BlockAddress` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Blocks` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[txHash]` on the table `Transaction` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "BlockAddress" DROP CONSTRAINT "BlockAddress_blockId_fkey";

-- DropForeignKey
ALTER TABLE "Transaction" DROP CONSTRAINT "Transaction_blockAddressId_fkey";

-- DropIndex
DROP INDEX "Transaction_blockAddressId_idx";

-- AlterTable
ALTER TABLE "Transaction" DROP COLUMN "blockAddressId",
ADD COLUMN     "addressToWatchId" INTEGER;

-- DropTable
DROP TABLE "BlockAddress";

-- DropTable
DROP TABLE "Blocks";

-- CreateIndex
CREATE UNIQUE INDEX "Transaction_txHash_key" ON "Transaction"("txHash");

-- CreateIndex
CREATE INDEX "Transaction_addressToWatchId_idx" ON "Transaction"("addressToWatchId");

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_addressToWatchId_fkey" FOREIGN KEY ("addressToWatchId") REFERENCES "AddressToWatch"("id") ON DELETE SET NULL ON UPDATE CASCADE;
