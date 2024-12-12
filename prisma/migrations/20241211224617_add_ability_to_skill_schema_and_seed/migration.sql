/*
  Warnings:

  - Added the required column `ability` to the `SkillDefinition` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "SkillDefinition" ADD COLUMN     "ability" TEXT NOT NULL;
