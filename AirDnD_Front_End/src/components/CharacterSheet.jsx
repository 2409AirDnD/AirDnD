import { useState } from "react";
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

  return (
    <>
      <h1 id="character-sheet-header">Create your character</h1>
      <div id="character-sheet-block">
        <BasicInfo setSelectedClass={ setSelectedClass } setSelectedRace={ setSelectedRace } selectedClass={ selectedClass} selectedRace={ selectedRace }/>
        <Abilities />
        <Skills />
        <InitSpeedAC />
        <HitpointsAndDice />
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
