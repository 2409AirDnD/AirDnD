import { useState, useEffect } from "react";
import Skills from "./Skills.jsx";
import BasicInfo from "./BasicInfo.jsx";
import Abilities from "./Abilities.jsx";
import HitpointsAndDice from "./HitpointsAndDice.jsx";
import InitSpeedAC from "./InitSpeedAC.jsx";
import DeathSavesAndExhaustion from "./DeathSavesAndExhaustion.jsx";
import Actions from "./Actions.jsx";
import Proficiencies from "./Proficiencies.jsx";
import Inventory from "./Inventory.jsx";
import FeaturesAndTraits from "./FeaturesAndTraits.jsx";
import ProficiencyBonus from "./ProficiencyBonus.jsx";

const CharacterSheet = () => {
  const [level, setLevel] = useState(1);
  const [proficiencyBonus, setProficiencyBonus] = useState("+2");
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedRace, setSelectedRace] = useState("");
  const [classList, setClassList] = useState([]);
  const [raceList, setRaceList] = useState([]);
  const [speed, setSpeed] = useState(0);
  const [showSidebar, setShowSidebar] = useState(false);
  const [characterName, setCharacterName] = useState("");
  const [playerName, setPlayerName] = useState("");
  const [experience, setExperience] = useState(0);
  const [image, setImage] = useState(null);
  const [rolls, setRolls] = useState({
    str: 0,
    dex: 0,
    con: 0,
    int: 0,
    wis: 0,
    cha: 0,
  });
  const [abilityModifiers, setAbilityModifiers] = useState({
    str: 0,
    dex: 0,
    con: 0,
    int: 0,
    wis: 0,
    cha: 0,
  });
  const [health, setHealth] = useState({
    currentHP: 0,
    maxHP: 0,
    tempHP: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const classResponse = await fetch("http://localhost:3000/classes");
        const classData = await classResponse.json();
        setClassList(classData);

        const raceResponse = await fetch("http://localhost:3000/races");
        const raceData = await raceResponse.json();
        setRaceList(raceData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h1 id="character-sheet-header">Create your character</h1>
      <div id="character-sheet-block">
        <BasicInfo
          setLevel={setLevel}
          setProficiencyBonus={setProficiencyBonus}
          setSelectedClass={setSelectedClass}
          setSelectedRace={setSelectedRace}
          level={level}
          selectedClass={selectedClass}
          selectedRace={selectedRace}
          classList={classList}
          raceList={raceList}
          rolls={rolls}
          characterName={characterName}
          playerName={playerName}
          speed={speed}
          experience={experience}
          image={image}
          setCharacterName={setCharacterName}
          setPlayerName={setPlayerName}
          setExperience={setExperience}
          setImage={setImage}
          health={health}
        />
        <Abilities
          setRolls={setRolls}
          rolls={rolls}
          setAbilityModifiers={setAbilityModifiers}
        />
        <Skills
          proficiencyBonus={proficiencyBonus}
          abilityModifiers={abilityModifiers}
        />
        <ProficiencyBonus proficiencyBonus={proficiencyBonus} />
        <InitSpeedAC
          abilityModifiers={abilityModifiers}
          proficiencyBonus={proficiencyBonus}
          selectedRace={selectedRace}
          setSpeed={setSpeed}
        />
        <div id="hp-dice-death-saves-and-exhaustion-container">
          <HitpointsAndDice
            selectedClass={selectedClass}
            rolls={rolls}
            abilityModifiers={abilityModifiers}
            level={level}
            setHealth={setHealth}
          />
          <DeathSavesAndExhaustion />
        </div>
        <Inventory
          setShowSidebar={setShowSidebar}
          showSidebar={showSidebar}
          />
        <FeaturesAndTraits
          level={level}
          classList={classList}
          selectedClass={selectedClass}
          raceList={raceList}
          selectedRace={selectedRace}
          />
        <Actions />
        <Inventory />
        <Proficiencies raceList={raceList} selectedRace={selectedRace} />
      </div>
    </>
  );
};

export default CharacterSheet;
