const express = require("express");
const prisma = require("../prisma");
const router = express.Router();
module.exports = router;

// Fetch character skills and calculate modifiers
router.get("/:id/skills", async (req, res) => {
  try {
    const characterId = parseInt(req.params.id);

    const character = await prisma.characterSheet.findUnique({
      where: { id: characterId },
      include: {
        skills: true,
        ability: true,
      },
    });

    if (!character) {
      return res.status(404).json({ error: "Character not found" });
    }

    const abilityScores = character.ability.reduce((acc, ability) => {
      acc[ability.name] = ability.rolledValue;
      return acc;
    }, {});

    const skillsWithModifiers = character.skills.map((skill) => ({
      skillName: skill.skillName,
    }));

    res.json(skillsWithModifiers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Create a new character
router.post("/", async (req, res) => {
  try {
    const {
      characterName,
      characterAvatar,
      experience = 0,
      armorClass = 10,
      speed = 30,
      level = 1,
      health = { currentHP: 10, maxHP: 10, tempHP: 0 },
      classId,
      raceIndex,
      userId,
    } = req.body;

    if (!characterName || !classId || !raceIndex || !userId) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Default abilities and skills
    const defaultAbilities = [
      {
        name: "Strength",
        description: "measure of strength",
        rolledValue: 10,
      },
      {
        name: "Dexterity",
        description: "measure of dexterity",
        rolledValue: 12,
      },
      {
        name: "Constitution",
        description: "measure of health",
        rolledValue: 14,
      },
      {
        name: "Intelligence",
        description: "measure of int",
        rolledValue: 16,
      },
      {
        name: "Wisdom",
        description: "measure of street smarts",
        rolledValue: 8,
      },
      {
        name: "Charisma",
        description: "measure of charm",
        rolledValue: 9,
      },
    ];

    const defaultSkills = [
      { skillName: "acrobatics", proficiency: false },
      { skillName: "animalHandling", proficiency: false },
      { skillName: "arcana", proficiency: false },
      { skillName: "athletics", proficiency: false },
      { skillName: "deception", proficiency: false },
      { skillName: "history", proficiency: false },
      { skillName: "insight", proficiency: false },
      { skillName: "intimidation", proficiency: false },
      { skillName: "investigation", proficiency: false },
      { skillName: "medicine", proficiency: false },
      { skillName: "nature", proficiency: false },
      { skillName: "perception", proficiency: false },
      { skillName: "performance", proficiency: false },
      { skillName: "persuasion", proficiency: false },
      { skillName: "religion", proficiency: false },
      { skillName: "sleightOfHand", proficiency: false },
      { skillName: "stealth", proficiency: false },
      { skillName: "survival", proficiency: false },
    ];

    const newCharacter = await prisma.characterSheet.create({
      data: {
        characterName,
        characterAvatar: characterAvatar || "",
        experience,
        armorClass,
        speed,
        level,
        user: { connect: { id: userId } },
        health: { create: health },
        class: { connect: { id: classId } },
        race: { connect: { index: raceIndex } },
        ability: { create: defaultAbilities },
        skills: { create: defaultSkills },
      },
      include: {
        health: true,
        class: true,
        race: true,
        ability: true,
        skills: true,
      },
    });

    res.status(201).json(newCharacter);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Fetch a specific character
router.get("/:id", async (req, res) => {
  try {
    const characterId = req.params.id;

    const character = await prisma.characterSheet.findUnique({
      where: { id: characterId },
      include: {
        health: true,
        ability: true,
        skills: true,
        class: true,
        race: true,
        traits: true,
      },
    });

    if (!character) {
      return res.status(404).json({ error: "Character not found" });
    }

    res.json(character);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Update an existing character
router.put("/:id", async (req, res) => {
  try {
    const characterId = parseInt(req.params.id, 10);
    const updateData = req.body;

    const updatedCharacter = await prisma.characterSheet.update({
      where: { id: characterId },
      data: updateData,
      include: {
        health: true,
        ability: true,
        skills: true,
        class: true,
        race: true,
      },
    });

    res.json(updatedCharacter);
  } catch (error) {
    if (error.code === "P2025") {
      return res.status(404).json({ error: "Character not found" });
    }
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Delete a character
router.delete("/:id", async (req, res) => {
  try {
    const characterId = parseInt(req.params.id, 10);

    // Delete related skill proficiencies
    await prisma.skillProficiency.deleteMany({
      where: {
        characterId: characterId,
      },
    });

    // Delete related abilities
    await prisma.ability.deleteMany({
      where: {
        characterId: characterId,
      },
    });

    // Delete related health
    await prisma.health.deleteMany({
      where: {
        characterId: characterId,
      },
    });

    // Finally, delete the character
    await prisma.characterSheet.delete({
      where: {
        id: characterId,
      },
    });

    res.status(204).send(); // No content
  } catch (error) {
    if (error.code === "P2025") {
      return res.status(404).json({ error: "Character not found" });
    }
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});
