/*
  Warnings:

  - You are about to drop the column `createdAt` on the `BlockAddress` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[address]` on the table `BlockAddress` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "BlockAddress_address_idx";

-- DropIndex
DROP INDEX "BlockAddress_blockId_idx";

-- AlterTable
ALTER TABLE "BlockAddress" DROP COLUMN "createdAt";

-- CreateIndex
CREATE UNIQUE INDEX "BlockAddress_address_key" ON "BlockAddress"("address");
