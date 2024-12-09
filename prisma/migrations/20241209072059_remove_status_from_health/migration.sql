/*
  Warnings:

  - You are about to drop the `StatusEffect` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Spell" DROP CONSTRAINT "Spell_characterId_fkey";

-- DropForeignKey
ALTER TABLE "StatusEffect" DROP CONSTRAINT "StatusEffect_characterId_fkey";

-- DropForeignKey
ALTER TABLE "StatusEffect" DROP CONSTRAINT "StatusEffect_healthId_fkey";

-- AlterTable
ALTER TABLE "Spell" ALTER COLUMN "characterId" DROP NOT NULL;

-- DropTable
DROP TABLE "StatusEffect";

-- AddForeignKey
ALTER TABLE "Spell" ADD CONSTRAINT "Spell_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "CharacterSheet"("id") ON DELETE SET NULL ON UPDATE CASCADE;
