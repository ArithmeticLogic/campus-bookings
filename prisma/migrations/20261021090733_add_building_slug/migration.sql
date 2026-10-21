/*
  Warnings:

  - You are about to drop the column `uniqueCode` on the `Building` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[slug]` on the table `Building` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `Building` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Building_uniqueCode_key";

-- AlterTable
ALTER TABLE "Building" DROP COLUMN "uniqueCode",
ADD COLUMN     "slug" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Building_slug_key" ON "Building"("slug");
