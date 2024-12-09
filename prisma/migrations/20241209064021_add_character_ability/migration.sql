/*
  Warnings:

  - You are about to drop the column `characterId` on the `Ability` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Ability" DROP CONSTRAINT "Ability_characterId_fkey";

-- AlterTable
ALTER TABLE "Ability" DROP COLUMN "characterId";

-- CreateTable
CREATE TABLE "_characterAbility" (
    "A" TEXT NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_characterAbility_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_characterAbility_B_index" ON "_characterAbility"("B");

-- AddForeignKey
ALTER TABLE "_characterAbility" ADD CONSTRAINT "_characterAbility_A_fkey" FOREIGN KEY ("A") REFERENCES "Ability"("index") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_characterAbility" ADD CONSTRAINT "_characterAbility_B_fkey" FOREIGN KEY ("B") REFERENCES "CharacterSheet"("id") ON DELETE CASCADE ON UPDATE CASCADE;
