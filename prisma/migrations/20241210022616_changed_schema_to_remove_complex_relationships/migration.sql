/*
  Warnings:

  - You are about to drop the column `abilityIndex` on the `SkillProficiency` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "SkillProficiency" DROP CONSTRAINT "SkillProficiency_abilityIndex_fkey";

-- DropForeignKey
ALTER TABLE "SkillProficiency" DROP CONSTRAINT "SkillProficiency_skillName_fkey";

-- AlterTable
ALTER TABLE "SkillProficiency" DROP COLUMN "abilityIndex";
