import Skills from "./Skills.jsx";
import BasicInfo from "./BasicInfo.jsx";
import Abilities from "./Abilities.jsx";
import HitpointsAndDice from "./HitpointsAndDice.jsx";
import InitSpeedAC from "./InitSpeedAC.jsx";
const CharacterSheet = () => {
  return (
    <>
      <h1 id="character-sheet-header">Create your character</h1>
      <div id="character-sheet-block">
        <BasicInfo />
        <Abilities />
        <Skills />
        <HitpointsAndDice />
        <InitSpeedAC />
      </div>
    </>
  );
};

export default CharacterSheet;
