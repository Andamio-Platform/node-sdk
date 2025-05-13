/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "LocalStateType" AS ENUM ('Course', 'Assignment', 'ModuleRef', 'Treasury', 'Escrow', 'ContributorState');

-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_authorId_fkey";

-- DropTable
DROP TABLE "Post";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "AddressToWatch" (
    "id" SERIAL NOT NULL,
    "key" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "type" "LocalStateType",

    CONSTRAINT "AddressToWatch_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AddressToWatch_key_key" ON "AddressToWatch"("key");

-- CreateIndex
CREATE INDEX "AddressToWatch_type_idx" ON "AddressToWatch"("type");
