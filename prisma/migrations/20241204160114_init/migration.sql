-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "avatar" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Campaign" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "dm_ID" INTEGER NOT NULL,

    CONSTRAINT "Campaign_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Player" (
    "id" SERIAL NOT NULL,
    "player_ID" INTEGER NOT NULL,
    "campaign_ID" INTEGER NOT NULL,

    CONSTRAINT "Player_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Character" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "race" TEXT NOT NULL,
    "class" TEXT NOT NULL,
    "level" INTEGER NOT NULL,
    "strength" INTEGER NOT NULL,
    "dexterity" INTEGER NOT NULL,
    "constitution" INTEGER NOT NULL,
    "intelligence" INTEGER NOT NULL,
    "wisdom" INTEGER NOT NULL,
    "charisma" INTEGER NOT NULL,
    "athletics" INTEGER,
    "acrobatics" INTEGER,
    "slight_of_hand" INTEGER,
    "stealth" INTEGER,
    "arcana" INTEGER,
    "history" INTEGER,
    "investigation" INTEGER,
    "nature" INTEGER,
    "religion" INTEGER,
    "animal_handling" INTEGER,
    "insight" INTEGER,
    "medicine" INTEGER,
    "perception" INTEGER,
    "survival" INTEGER,
    "deception" INTEGER,
    "intimidation" INTEGER,
    "performance" INTEGER,
    "persuasion" INTEGER,
    "hit_points" INTEGER NOT NULL,
    "armor_class" INTEGER NOT NULL,
    "player_ID" INTEGER NOT NULL,
    "campaign_ID" INTEGER NOT NULL,

    CONSTRAINT "Character_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Class" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Class_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Race" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "age" TEXT NOT NULL,
    "speed" INTEGER NOT NULL,
    "language_description" TEXT NOT NULL,
    "languages" TEXT NOT NULL,
    "alignment" TEXT NOT NULL,
    "size" TEXT NOT NULL,
    "size_description" TEXT NOT NULL,

    CONSTRAINT "Race_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Spell" (
    "id" SERIAL NOT NULL,
    "class_ID" INTEGER NOT NULL,
    "character_ID" INTEGER NOT NULL,

    CONSTRAINT "Spell_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Trait" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "race_ID" INTEGER NOT NULL,

    CONSTRAINT "Trait_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Campaign" ADD CONSTRAINT "Campaign_dm_ID_fkey" FOREIGN KEY ("dm_ID") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Player" ADD CONSTRAINT "Player_player_ID_fkey" FOREIGN KEY ("player_ID") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Player" ADD CONSTRAINT "Player_campaign_ID_fkey" FOREIGN KEY ("campaign_ID") REFERENCES "Campaign"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_player_ID_fkey" FOREIGN KEY ("player_ID") REFERENCES "Player"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_campaign_ID_fkey" FOREIGN KEY ("campaign_ID") REFERENCES "Campaign"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Spell" ADD CONSTRAINT "Spell_class_ID_fkey" FOREIGN KEY ("class_ID") REFERENCES "Class"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Spell" ADD CONSTRAINT "Spell_character_ID_fkey" FOREIGN KEY ("character_ID") REFERENCES "Character"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Trait" ADD CONSTRAINT "Trait_race_ID_fkey" FOREIGN KEY ("race_ID") REFERENCES "Race"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
