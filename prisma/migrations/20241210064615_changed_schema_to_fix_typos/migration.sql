/*
  Warnings:

  - You are about to drop the column `characterAvater` on the `CharacterSheet` table. All the data in the column will be lost.
  - Added the required column `characterAvatar` to the `CharacterSheet` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "CharacterSheet" DROP CONSTRAINT "CharacterSheet_playerId_fkey";

-- AlterTable
ALTER TABLE "CharacterSheet" DROP COLUMN "characterAvater",
ADD COLUMN     "characterAvatar" TEXT NOT NULL,
ALTER COLUMN "playerId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "CharacterSheet" ADD CONSTRAINT "CharacterSheet_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Player"("id") ON DELETE SET NULL ON UPDATE CASCADE;
