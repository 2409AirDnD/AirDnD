/*
  Warnings:

  - The primary key for the `Ability` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `index` on the `Ability` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name,characterId]` on the table `Ability` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Ability" DROP CONSTRAINT "Ability_pkey",
DROP COLUMN "index",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Ability_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "Ability_name_characterId_key" ON "Ability"("name", "characterId");
