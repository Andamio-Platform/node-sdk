-- CreateTable
CREATE TABLE "AddressToWatchSyncSlot" (
    "id" SERIAL NOT NULL,
    "slot" INTEGER NOT NULL,

    CONSTRAINT "AddressToWatchSyncSlot_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AddressToWatchSyncSlot_slot_key" ON "AddressToWatchSyncSlot"("slot");
