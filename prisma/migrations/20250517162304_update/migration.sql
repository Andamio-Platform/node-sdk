/*
  Warnings:

  - You are about to drop the `AddressToWatchSyncSlot` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "AddressToWatchSyncSlot";

-- CreateTable
CREATE TABLE "AddressToWatchSyncTip" (
    "id" SERIAL NOT NULL,
    "slot" INTEGER NOT NULL,
    "blockHash" TEXT NOT NULL,

    CONSTRAINT "AddressToWatchSyncTip_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AddressToWatchSyncTip_slot_key" ON "AddressToWatchSyncTip"("slot");

-- CreateIndex
CREATE UNIQUE INDEX "AddressToWatchSyncTip_blockHash_key" ON "AddressToWatchSyncTip"("blockHash");
