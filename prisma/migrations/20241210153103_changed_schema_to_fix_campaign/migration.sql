-- DropForeignKey
ALTER TABLE "CharacterSheet" DROP CONSTRAINT "CharacterSheet_campaignId_fkey";

-- AlterTable
ALTER TABLE "CharacterSheet" ALTER COLUMN "campaignId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "CharacterSheet" ADD CONSTRAINT "CharacterSheet_campaignId_fkey" FOREIGN KEY ("campaignId") REFERENCES "Campaign"("id") ON DELETE SET NULL ON UPDATE CASCADE;
