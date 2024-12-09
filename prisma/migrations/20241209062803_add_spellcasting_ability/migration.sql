/*
  Warnings:

  - You are about to drop the column `campaign_ID` on the `Player` table. All the data in the column will be lost.
  - You are about to drop the column `player_ID` on the `Player` table. All the data in the column will be lost.
  - The primary key for the `Race` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `age` on the `Race` table. All the data in the column will be lost.
  - You are about to drop the column `alignment` on the `Race` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `Race` table. All the data in the column will be lost.
  - You are about to drop the column `language_description` on the `Race` table. All the data in the column will be lost.
  - You are about to drop the column `languages` on the `Race` table. All the data in the column will be lost.
  - You are about to drop the column `size_description` on the `Race` table. All the data in the column will be lost.
  - You are about to drop the column `speed` on the `Race` table. All the data in the column will be lost.
  - You are about to drop the column `character_ID` on the `Spell` table. All the data in the column will be lost.
  - You are about to drop the column `class_ID` on the `Spell` table. All the data in the column will be lost.
  - You are about to drop the column `race_ID` on the `Trait` table. All the data in the column will be lost.
  - You are about to drop the `Character` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[username]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `campaignId` to the `Player` table without a default value. This is not possible if the table is not empty.
  - Added the required column `playerId` to the `Player` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `Player` table without a default value. This is not possible if the table is not empty.
  - Added the required column `baseSpeed` to the `Race` table without a default value. This is not possible if the table is not empty.
  - Added the required column `index` to the `Race` table without a default value. This is not possible if the table is not empty.
  - Added the required column `castingTime` to the `Spell` table without a default value. This is not possible if the table is not empty.
  - Added the required column `characterId` to the `Spell` table without a default value. This is not possible if the table is not empty.
  - Added the required column `classId` to the `Spell` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Spell` table without a default value. This is not possible if the table is not empty.
  - Added the required column `duration` to the `Spell` table without a default value. This is not possible if the table is not empty.
  - Added the required column `level` to the `Spell` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Spell` table without a default value. This is not possible if the table is not empty.
  - Added the required column `range` to the `Spell` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Character" DROP CONSTRAINT "Character_campaign_ID_fkey";

-- DropForeignKey
ALTER TABLE "Character" DROP CONSTRAINT "Character_player_ID_fkey";

-- DropForeignKey
ALTER TABLE "Player" DROP CONSTRAINT "Player_campaign_ID_fkey";

-- DropForeignKey
ALTER TABLE "Player" DROP CONSTRAINT "Player_player_ID_fkey";

-- DropForeignKey
ALTER TABLE "Spell" DROP CONSTRAINT "Spell_character_ID_fkey";

-- DropForeignKey
ALTER TABLE "Spell" DROP CONSTRAINT "Spell_class_ID_fkey";

-- DropForeignKey
ALTER TABLE "Trait" DROP CONSTRAINT "Trait_race_ID_fkey";

-- AlterTable
ALTER TABLE "Class" ADD COLUMN     "spellcastingAbility" TEXT;

-- AlterTable
ALTER TABLE "Player" DROP COLUMN "campaign_ID",
DROP COLUMN "player_ID",
ADD COLUMN     "campaignId" INTEGER NOT NULL,
ADD COLUMN     "playerId" INTEGER NOT NULL,
ADD COLUMN     "username" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Race" DROP CONSTRAINT "Race_pkey",
DROP COLUMN "age",
DROP COLUMN "alignment",
DROP COLUMN "id",
DROP COLUMN "language_description",
DROP COLUMN "languages",
DROP COLUMN "size_description",
DROP COLUMN "speed",
ADD COLUMN     "baseSpeed" INTEGER NOT NULL,
ADD COLUMN     "index" TEXT NOT NULL,
ADD CONSTRAINT "Race_pkey" PRIMARY KEY ("index");

-- AlterTable
ALTER TABLE "Spell" DROP COLUMN "character_ID",
DROP COLUMN "class_ID",
ADD COLUMN     "castingTime" TEXT NOT NULL,
ADD COLUMN     "characterId" INTEGER NOT NULL,
ADD COLUMN     "classId" INTEGER NOT NULL,
ADD COLUMN     "components" TEXT,
ADD COLUMN     "damage" TEXT,
ADD COLUMN     "damageType" TEXT,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "duration" TEXT NOT NULL,
ADD COLUMN     "level" INTEGER NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "range" TEXT NOT NULL,
ADD COLUMN     "spellcastingModifier" INTEGER;

-- AlterTable
ALTER TABLE "Trait" DROP COLUMN "race_ID";

-- DropTable
DROP TABLE "Character";

-- CreateTable
CREATE TABLE "CharacterSheet" (
    "id" SERIAL NOT NULL,
    "characterAvater" TEXT NOT NULL,
    "characterName" TEXT NOT NULL,
    "experience" INTEGER NOT NULL,
    "armorClass" INTEGER NOT NULL,
    "speed" INTEGER NOT NULL,
    "level" INTEGER NOT NULL,
    "playerId" INTEGER NOT NULL,
    "campaignId" INTEGER NOT NULL,
    "playerName" TEXT NOT NULL,

    CONSTRAINT "CharacterSheet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ability" (
    "index" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "rolledValue" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "characterId" INTEGER NOT NULL,

    CONSTRAINT "Ability_pkey" PRIMARY KEY ("index")
);

-- CreateTable
CREATE TABLE "SkillDefinition" (
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "SkillDefinition_pkey" PRIMARY KEY ("name")
);

-- CreateTable
CREATE TABLE "SkillProficiency" (
    "id" SERIAL NOT NULL,
    "proficiency" BOOLEAN NOT NULL,
    "characterId" INTEGER NOT NULL,
    "skillName" TEXT NOT NULL,
    "abilityIndex" TEXT NOT NULL,

    CONSTRAINT "SkillProficiency_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SpellSlot" (
    "id" SERIAL NOT NULL,
    "spellLevel" INTEGER NOT NULL,
    "slotsAvailable" INTEGER NOT NULL,
    "slotsUsed" INTEGER NOT NULL,
    "spellcastingAbility" TEXT,
    "characterId" INTEGER NOT NULL,

    CONSTRAINT "SpellSlot_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClassFeature" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "level" INTEGER,
    "classId" INTEGER NOT NULL,

    CONSTRAINT "ClassFeature_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Inventory" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "itemType" TEXT NOT NULL,
    "description" TEXT,
    "quantity" INTEGER NOT NULL,
    "Stackable" BOOLEAN NOT NULL,
    "equipped" BOOLEAN NOT NULL DEFAULT false,
    "characterId" INTEGER NOT NULL,

    CONSTRAINT "Inventory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Equipment" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "type" TEXT NOT NULL,
    "damage" INTEGER,
    "healing" INTEGER,
    "armorClass" INTEGER,
    "value" INTEGER,

    CONSTRAINT "Equipment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Action" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "actionType" TEXT NOT NULL,
    "damage" TEXT,
    "duration" TEXT,
    "range" TEXT,
    "equippedItemId" INTEGER,
    "spellId" INTEGER,
    "characterId" INTEGER NOT NULL,

    CONSTRAINT "Action_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Health" (
    "id" SERIAL NOT NULL,
    "currentHP" INTEGER NOT NULL,
    "maxHP" INTEGER NOT NULL,
    "tempHP" INTEGER NOT NULL,
    "characterId" INTEGER NOT NULL,

    CONSTRAINT "Health_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StatusEffect" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,
    "effectType" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "healthId" INTEGER NOT NULL,
    "characterId" INTEGER NOT NULL,

    CONSTRAINT "StatusEffect_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CharacterClass" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_CharacterClass_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_CharacterClassFeatures" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_CharacterClassFeatures_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_CharacterRace" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_CharacterRace_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_CharacterTraits" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_CharacterTraits_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_RaceTraits" (
    "A" TEXT NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_RaceTraits_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_EquipmentInventory" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_EquipmentInventory_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_CharacterClass_B_index" ON "_CharacterClass"("B");

-- CreateIndex
CREATE INDEX "_CharacterClassFeatures_B_index" ON "_CharacterClassFeatures"("B");

-- CreateIndex
CREATE INDEX "_CharacterRace_B_index" ON "_CharacterRace"("B");

-- CreateIndex
CREATE INDEX "_CharacterTraits_B_index" ON "_CharacterTraits"("B");

-- CreateIndex
CREATE INDEX "_RaceTraits_B_index" ON "_RaceTraits"("B");

-- CreateIndex
CREATE INDEX "_EquipmentInventory_B_index" ON "_EquipmentInventory"("B");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- AddForeignKey
ALTER TABLE "Player" ADD CONSTRAINT "Player_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Player" ADD CONSTRAINT "Player_campaignId_fkey" FOREIGN KEY ("campaignId") REFERENCES "Campaign"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterSheet" ADD CONSTRAINT "CharacterSheet_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Player"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterSheet" ADD CONSTRAINT "CharacterSheet_campaignId_fkey" FOREIGN KEY ("campaignId") REFERENCES "Campaign"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterSheet" ADD CONSTRAINT "CharacterSheet_playerName_fkey" FOREIGN KEY ("playerName") REFERENCES "User"("username") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ability" ADD CONSTRAINT "Ability_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "CharacterSheet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SkillProficiency" ADD CONSTRAINT "SkillProficiency_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "CharacterSheet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SkillProficiency" ADD CONSTRAINT "SkillProficiency_skillName_fkey" FOREIGN KEY ("skillName") REFERENCES "SkillDefinition"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SkillProficiency" ADD CONSTRAINT "SkillProficiency_abilityIndex_fkey" FOREIGN KEY ("abilityIndex") REFERENCES "Ability"("index") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Spell" ADD CONSTRAINT "Spell_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Class"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Spell" ADD CONSTRAINT "Spell_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "CharacterSheet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SpellSlot" ADD CONSTRAINT "SpellSlot_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "CharacterSheet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClassFeature" ADD CONSTRAINT "ClassFeature_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Class"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inventory" ADD CONSTRAINT "Inventory_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "CharacterSheet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Action" ADD CONSTRAINT "Action_equippedItemId_fkey" FOREIGN KEY ("equippedItemId") REFERENCES "Inventory"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Action" ADD CONSTRAINT "Action_spellId_fkey" FOREIGN KEY ("spellId") REFERENCES "Spell"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Action" ADD CONSTRAINT "Action_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "CharacterSheet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Health" ADD CONSTRAINT "Health_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "CharacterSheet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StatusEffect" ADD CONSTRAINT "StatusEffect_healthId_fkey" FOREIGN KEY ("healthId") REFERENCES "Health"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StatusEffect" ADD CONSTRAINT "StatusEffect_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "CharacterSheet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CharacterClass" ADD CONSTRAINT "_CharacterClass_A_fkey" FOREIGN KEY ("A") REFERENCES "CharacterSheet"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CharacterClass" ADD CONSTRAINT "_CharacterClass_B_fkey" FOREIGN KEY ("B") REFERENCES "Class"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CharacterClassFeatures" ADD CONSTRAINT "_CharacterClassFeatures_A_fkey" FOREIGN KEY ("A") REFERENCES "CharacterSheet"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CharacterClassFeatures" ADD CONSTRAINT "_CharacterClassFeatures_B_fkey" FOREIGN KEY ("B") REFERENCES "ClassFeature"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CharacterRace" ADD CONSTRAINT "_CharacterRace_A_fkey" FOREIGN KEY ("A") REFERENCES "CharacterSheet"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CharacterRace" ADD CONSTRAINT "_CharacterRace_B_fkey" FOREIGN KEY ("B") REFERENCES "Race"("index") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CharacterTraits" ADD CONSTRAINT "_CharacterTraits_A_fkey" FOREIGN KEY ("A") REFERENCES "CharacterSheet"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CharacterTraits" ADD CONSTRAINT "_CharacterTraits_B_fkey" FOREIGN KEY ("B") REFERENCES "Trait"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RaceTraits" ADD CONSTRAINT "_RaceTraits_A_fkey" FOREIGN KEY ("A") REFERENCES "Race"("index") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RaceTraits" ADD CONSTRAINT "_RaceTraits_B_fkey" FOREIGN KEY ("B") REFERENCES "Trait"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EquipmentInventory" ADD CONSTRAINT "_EquipmentInventory_A_fkey" FOREIGN KEY ("A") REFERENCES "Equipment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EquipmentInventory" ADD CONSTRAINT "_EquipmentInventory_B_fkey" FOREIGN KEY ("B") REFERENCES "Inventory"("id") ON DELETE CASCADE ON UPDATE CASCADE;
