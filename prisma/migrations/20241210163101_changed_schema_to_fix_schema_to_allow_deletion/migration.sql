/*
  Warnings:

  - You are about to drop the `_characterAbility` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_characterAbility" DROP CONSTRAINT "_characterAbility_A_fkey";

-- DropForeignKey
ALTER TABLE "_characterAbility" DROP CONSTRAINT "_characterAbility_B_fkey";

-- AlterTable
ALTER TABLE "Ability" ADD COLUMN     "characterId" INTEGER;

-- DropTable
DROP TABLE "_characterAbility";

-- AddForeignKey
ALTER TABLE "Ability" ADD CONSTRAINT "Ability_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "CharacterSheet"("id") ON DELETE SET NULL ON UPDATE CASCADE;
