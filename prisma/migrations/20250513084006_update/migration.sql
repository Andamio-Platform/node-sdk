-- DropIndex
DROP INDEX "BlockAddress_address_key";

-- CreateIndex
CREATE INDEX "BlockAddress_address_idx" ON "BlockAddress"("address");
