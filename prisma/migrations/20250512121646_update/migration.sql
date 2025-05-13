-- CreateTable
CREATE TABLE "Blocks" (
    "id" SERIAL NOT NULL,
    "blockHash" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Blocks_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Blocks_blockHash_key" ON "Blocks"("blockHash");
