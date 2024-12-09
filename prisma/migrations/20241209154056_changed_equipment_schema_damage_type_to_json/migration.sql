/*
  Warnings:

  - The `damage` column on the `Action` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Action" DROP COLUMN "damage",
ADD COLUMN     "damage" JSONB;
