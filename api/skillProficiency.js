const skillAbilityMap = {
  acrobatics: "Dexterity",
  animalHandling: "Wisdom",
  arcana: "Intelligence",
  athletics: "Strength",
  deception: "Charisma",
  history: "Intelligence",
  insight: "Wisdom",
  intimidation: "Charisma",
  investigation: "Intelligence",
  medicine: "Wisdom",
  nature: "Intelligence",
  perception: "Wisdom",
  performance: "Charisma",
  persuasion: "Charisma",
  religion: "Intelligence",
  sleightOfHand: "Dexterity",
  stealth: "Dexterity",
  survival: "Wisdom",
};

function calculateAbilityModifier(abilityScore) {
  return Math.floor((abilityScore - 10) / 2);
}

function calculateSkillModifier(
  skillProficiency,
  abilityScores,
  proficiencyBonus
) {
  const governingAbility = skillAbilityMap[skillProficiency.skillName];
  const abilityModifier = calculateAbilityModifier(
    abilityScores[governingAbility] || 0
  );
  return (
    abilityModifier + (skillProficiency.proficiency ? proficiencyBonus : 0)
  );
}

module.exports = {
  calculateAbilityModifier,
  calculateSkillModifier,
  skillAbilityMap,
};
