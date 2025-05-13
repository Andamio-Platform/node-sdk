-- CreateTable
CREATE TABLE "BlockAddress" (
    "id" SERIAL NOT NULL,
    "address" TEXT NOT NULL,
    "blockId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "BlockAddress_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Transaction" (
    "id" SERIAL NOT NULL,
    "txHash" TEXT NOT NULL,
    "blockAddressId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "BlockAddress_blockId_idx" ON "BlockAddress"("blockId");

-- CreateIndex
CREATE INDEX "BlockAddress_address_idx" ON "BlockAddress"("address");

-- CreateIndex
CREATE UNIQUE INDEX "Transaction_txHash_key" ON "Transaction"("txHash");

-- CreateIndex
CREATE INDEX "Transaction_blockAddressId_idx" ON "Transaction"("blockAddressId");

-- AddForeignKey
ALTER TABLE "BlockAddress" ADD CONSTRAINT "BlockAddress_blockId_fkey" FOREIGN KEY ("blockId") REFERENCES "Blocks"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_blockAddressId_fkey" FOREIGN KEY ("blockAddressId") REFERENCES "BlockAddress"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
