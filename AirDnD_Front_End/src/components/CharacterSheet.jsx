import { useState, useEffect } from "react";
import Skills from "./Skills.jsx";
import BasicInfo from "./BasicInfo.jsx";
import Abilities from "./Abilities.jsx";
import HitpointsAndDice from "./HitpointsAndDice.jsx";
import InitSpeedAC from "./InitSpeedAC.jsx";
import DeathSavesAndExhaustion from "./DeathSavesAndExhaustion.jsx";
import Actions from "./Actions.jsx";
import Traits from "./Traits.jsx";
import Inventory from "./Inventory.jsx";
import FeaturesAndProficiencies from "./FeaturesAndProficiencies.jsx";
const CharacterSheet = () => {
  const [level, setLevel] = useState(1);
  const [proficiencyBonus, setProficiencyBonus] = useState("+2");
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedRace, setSelectedRace] = useState("");
  const [classList, setClassList] = useState([]);
  const [raceList, setRaceList] = useState([]);
  const [speed, setSpeed] = useState(0);
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
        <InitSpeedAC
          abilityModifiers={abilityModifiers}
          proficiencyBonus={proficiencyBonus}
          selectedRace={selectedRace}
          setSpeed={setSpeed}
        />
        <HitpointsAndDice
          selectedClass={selectedClass}
          rolls={rolls}
          abilityModifiers={abilityModifiers}
          level={level}
        />
        <FeaturesAndProficiencies />
        <Actions />
        <DeathSavesAndExhaustion />
        <Inventory />
        <Traits />
      </div>
    </>
  );
};

export default CharacterSheet;
