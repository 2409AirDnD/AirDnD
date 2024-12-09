/*
  Warnings:

  - You are about to drop the column `classId` on the `Spell` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Spell" DROP CONSTRAINT "Spell_classId_fkey";

-- AlterTable
ALTER TABLE "Spell" DROP COLUMN "classId";

-- CreateTable
CREATE TABLE "_ClassToSpell" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_ClassToSpell_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_ClassToSpell_B_index" ON "_ClassToSpell"("B");

-- AddForeignKey
ALTER TABLE "_ClassToSpell" ADD CONSTRAINT "_ClassToSpell_A_fkey" FOREIGN KEY ("A") REFERENCES "Class"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClassToSpell" ADD CONSTRAINT "_ClassToSpell_B_fkey" FOREIGN KEY ("B") REFERENCES "Spell"("id") ON DELETE CASCADE ON UPDATE CASCADE;
