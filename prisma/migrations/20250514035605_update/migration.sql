/*
  Warnings:

  - Added the required column `cbor` to the `Transaction` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Transaction" ADD COLUMN     "cbor" TEXT NOT NULL;
