-- AlterTable
ALTER TABLE "Resource" ADD COLUMN     "buildingId" INTEGER;

-- CreateTable
CREATE TABLE "Building" (
    "id" SERIAL NOT NULL,
    "uniqueCode" TEXT NOT NULL,

    CONSTRAINT "Building_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Building_uniqueCode_key" ON "Building"("uniqueCode");

-- AddForeignKey
ALTER TABLE "Resource" ADD CONSTRAINT "Resource_buildingId_fkey" FOREIGN KEY ("buildingId") REFERENCES "Building"("id") ON DELETE SET NULL ON UPDATE CASCADE;
