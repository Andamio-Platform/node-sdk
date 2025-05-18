-- CreateTable
CREATE TABLE "TransactionSyncTip" (
    "id" SERIAL NOT NULL,
    "slot" INTEGER NOT NULL,
    "blockHash" TEXT NOT NULL,

    CONSTRAINT "TransactionSyncTip_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TransactionSyncTip_slot_key" ON "TransactionSyncTip"("slot");

-- CreateIndex
CREATE UNIQUE INDEX "TransactionSyncTip_blockHash_key" ON "TransactionSyncTip"("blockHash");
