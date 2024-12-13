import { useEffect, useState } from "react";

const Skills = ({ abilityModifiers, proficiencyBonus }) => {
  const [skills, setSkills] = useState([]);
  const [selectedProficiencies, setSelectedProficiencies] = useState({});

  useEffect(() => {
    const loadSkills = async () => {
      const response = await fetch("http://localhost:3000/skills");
      const data = await response.json();
      setSkills(data);
    };
    loadSkills();
  }, []);

  // Update the proficiency of a skill when a checkbox is clicked
  const handleProficiencyChange = (name) => {
    setSelectedProficiencies((prevProficiencies) => ({
      ...prevProficiencies,
      [name]: !prevProficiencies[name],
    }));
  };

  // Calculate the skill modifier based on proficiency and ability modifiers
  const calculateSkillModifier = (ability, name) => {
    const abilityModifier = abilityModifiers[ability] || 0;
    const isProficient = selectedProficiencies[name] || false;
    return abilityModifier + (isProficient ? proficiencyBonus : 0);
  };
  //{calculateSkillModifier(ability, name)} goes with Modifier:

  return (
    <div id="skills-block">
      <h2>Skills</h2>
      {skills.map((skill) => {
        const { name, ability } = skill;

        return (
          <div className="individual-skill" key={name}>
            <input
              type="checkbox"
              id={`skill-${name}`}
              checked={selectedProficiencies[name] || false}
              onChange={() => handleProficiencyChange(name)}
            />
            <label htmlFor={`skill-${name}`}>{name}</label>
            <span> (Ability: {ability})</span>
            <strong className="skill-score">{calculateSkillModifier(ability, name)}</strong>
          </div>
        );
      })}
    </div>
  );
};

export default Skills;
