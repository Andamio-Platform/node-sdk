-- DropIndex
DROP INDEX "Transaction_txHash_key";

-- CreateIndex
CREATE INDEX "Transaction_txHash_idx" ON "Transaction"("txHash");
