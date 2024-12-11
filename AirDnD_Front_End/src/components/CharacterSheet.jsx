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

  const [selectedClass, setSelectedClass] = useState("");
  const [selectedRace, setSelectedRace] = useState("");
  const [classList, setClassList] = useState([]);
  const [raceList, setRaceList] = useState([]);

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
        <BasicInfo setSelectedClass={ setSelectedClass } setSelectedRace={ setSelectedRace }
          selectedClass={ selectedClass} selectedRace={ selectedRace } 
          classList={ classList } raceList={ raceList }/>
        <Abilities />
        <Skills />
        <InitSpeedAC />
        <HitpointsAndDice selectedClass= { selectedClass } />
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
