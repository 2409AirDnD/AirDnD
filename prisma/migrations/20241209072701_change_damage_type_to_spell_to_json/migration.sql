/*
  Warnings:

  - Added the required column `damage` to the `Spell` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Spell" DROP COLUMN "damage",
ADD COLUMN     "damage" JSONB NOT NULL;
