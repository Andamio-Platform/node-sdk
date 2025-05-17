-- DropIndex
DROP INDEX "AddressToWatch_key_key";

-- CreateIndex
CREATE INDEX "AddressToWatch_key_idx" ON "AddressToWatch"("key");
