import { PrismaClient } from "@prisma/client";
import fetch from "node-fetch";

const prisma = new PrismaClient();
const BASE_URL = "https://www.dnd5eapi.co/api";

async function fetchData(endpoint) {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`);
    if (!response.ok)
      throw new Error(`Failed to fetch ${endpoint}: ${response.statusText}`);
    const data = await response.json();
    return data.results || data;
  } catch (error) {
    console.error(error.message);
    return [];
  }
}

async function main() {
  // Seed Classes
  const classes = await fetchData("/classes");
  for (const item of classes) {
    const details = await fetchData(`/classes/${item.index}`);
    await prisma.class.create({
      data: {
        name: details.name,
        spellcastingAbility: details.spellcasting
          ? details.spellcasting.spellcasting_ability.index
          : null,
      },
    });
  }

  // Seed Races
  const races = await fetchData("/races");
  for (const item of races) {
    const details = await fetchData(`/races/${item.index}`);
    await prisma.race.create({
      data: {
        index: item.index,
        name: details.name,
        baseSpeed: details.speed,
        size: details.size,
      },
    });
  }

  // Seed Abilities
  const abilities = await fetchData("/ability-scores");
  for (const ability of abilities) {
    const details = await fetchData(`/ability-scores/${ability.index}`);
    await prisma.ability.create({
      data: {
        name: details.full_name,
        description: details.desc.join(" "),
        rolledValue: 10, //default value
      },
    });
  }

  // Seed Skills
  const skills = await fetchData("/skills");
  for (const skill of skills) {
    const details = await fetchData(`/skills/${skill.index}`);
    await prisma.skillDefinition.create({
      data: {
        name: skill.name,
        description: details.desc.join(" "),
        ability: details.ability_score.index,
      },
    });
  }

  // Seed Spells
  const spells = await fetchData("/spells");
  for (const spell of spells) {
    const details = await fetchData(`/spells/${spell.index}`);

    // Create spell first
    const createdSpell = await prisma.spell.create({
      data: {
        name: details.name,
        level: details.level,
        castingTime: details.casting_time,
        range: details.range,
        duration: details.duration,
        damage: details.damage ? details.damage.damage_at_slot_level : null,
        damageType: details.damage ? details.damage?.damage_type?.name : null,
        components: details.components.join(", "),
        description: details.desc.join(" "),
      },
    });

    // Find the class IDs associated with the spell
    const classIds = details.classes.map((c) => c.name);

    // Connect the created spell to the corresponding class models
    for (const classId of classIds) {
      await prisma.class.update({
        where: { name: classId }, // Assumes class name is unique
        data: {
          possibleSpells: {
            connect: [{ id: createdSpell.id }],
          },
        },
      });
    }
  }

  // Seed Traits
  const traits = await fetchData("/traits");
  for (const trait of traits) {
    const details = await fetchData(`/traits/${trait.index}`);
    const createdTrait = await prisma.trait.create({
      data: {
        name: details.name,
        description: details.desc.join(" "),
      },
    });
    // Find the class IDs associated with the spell
    const raceIds = details.races.map((c) => c.index);

    // Connect the created spell to the corresponding class models
    for (const raceId of raceIds) {
      await prisma.race.update({
        where: { index: raceId },
        data: {
          traits: {
            connect: [{ id: createdTrait.id }],
          },
        },
      });
    }
  }

  // Seed Equipment
  const equipment = await fetchData("/equipment");
  for (const item of equipment) {
    const details = await fetchData(`/equipment/${item.index}`);
    await prisma.equipment.create({
      data: {
        name: details.name,
        description: details.desc ? details.desc.join(" ") : null,
        type: details.equipment_category.name,
        damage: details.damage ? details.damage.damage_dice : null,
        healing: details.healing
          ? parseInt(details.healing.healing_dice)
          : null,
        armorClass: details.armor_class ? details.armor_class.base : null,
        value: details.cost ? details.cost.quantity : null,
      },
    });
  }

  const response = await fetch("https://www.dnd5eapi.co/api/features");
  const data = await response.json();

  const classFeatures = await Promise.all(
    data.results.map(async (feature) => {
      const featureResponse = await fetch(
        `https://www.dnd5eapi.co${feature.url}`
      );
      const featureDetails = await featureResponse.json();

      const classRecord = await prisma.class.findUnique({
        where: { name: featureDetails.class.name },
      });

      return {
        name: featureDetails.name,
        description: featureDetails.desc?.join(" ") || "",
        level: featureDetails.level,
        class: {
          connect: {
            id: classRecord?.id || 0, // Use connect to link the class
          },
        },
      };
    })
  );

  for (const feature of classFeatures) {
    await prisma.classFeature.create({
      data: feature,
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
