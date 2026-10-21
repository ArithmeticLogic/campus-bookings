/*
  Warnings:

  - You are about to drop the column `resourceID` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `startAt` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `userID` on the `Booking` table. All the data in the column will be lost.
  - Added the required column `resourceId` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startsAt` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Booking` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Booking" DROP CONSTRAINT "Booking_resourceID_fkey";

-- DropForeignKey
ALTER TABLE "Booking" DROP CONSTRAINT "Booking_userID_fkey";

-- DropIndex
DROP INDEX "Booking_resourceID_startAt_idx";

-- AlterTable
ALTER TABLE "Booking" DROP COLUMN "resourceID",
DROP COLUMN "startAt",
DROP COLUMN "userID",
ADD COLUMN     "resourceId" INTEGER NOT NULL,
ADD COLUMN     "startsAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "userId" INTEGER NOT NULL;

-- CreateIndex
CREATE INDEX "Booking_resourceId_startsAt_idx" ON "Booking"("resourceId", "startsAt");

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_resourceId_fkey" FOREIGN KEY ("resourceId") REFERENCES "Resource"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
