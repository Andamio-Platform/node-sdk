/*
  Warnings:

  - You are about to drop the column `addressToWatchId` on the `Transaction` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Transaction" DROP CONSTRAINT "Transaction_addressToWatchId_fkey";

-- DropIndex
DROP INDEX "Transaction_addressToWatchId_idx";

-- AlterTable
ALTER TABLE "Transaction" DROP COLUMN "addressToWatchId";

-- CreateTable
CREATE TABLE "_AddressToWatchToTransaction" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_AddressToWatchToTransaction_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_AddressToWatchToTransaction_B_index" ON "_AddressToWatchToTransaction"("B");

-- AddForeignKey
ALTER TABLE "_AddressToWatchToTransaction" ADD CONSTRAINT "_AddressToWatchToTransaction_A_fkey" FOREIGN KEY ("A") REFERENCES "AddressToWatch"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AddressToWatchToTransaction" ADD CONSTRAINT "_AddressToWatchToTransaction_B_fkey" FOREIGN KEY ("B") REFERENCES "Transaction"("id") ON DELETE CASCADE ON UPDATE CASCADE;
