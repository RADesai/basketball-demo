/*
  Warnings:

  - You are about to alter the column `pts` on the `Player` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(65,30)`.
  - You are about to alter the column `reb` on the `Player` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(65,30)`.
  - You are about to alter the column `ast` on the `Player` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(65,30)`.
  - You are about to alter the column `stl` on the `Player` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(65,30)`.

*/
-- AlterTable
ALTER TABLE "Player" ALTER COLUMN "pts" SET DATA TYPE DECIMAL(65,30),
ALTER COLUMN "reb" SET DATA TYPE DECIMAL(65,30),
ALTER COLUMN "ast" SET DATA TYPE DECIMAL(65,30),
ALTER COLUMN "stl" SET DATA TYPE DECIMAL(65,30);
