import Skills from "./Skills.jsx";
import BasicInfo from "./BasicInfo.jsx";
import Abilities from "./Abilities.jsx";
import HitpointsAndDice from "./HitpointsAndDice.jsx";
import InitSpeedAC from "./InitSpeedAC.jsx";
import DeathSavesAndExhaustion from "./DeathSavesAndExhaustion.jsx";
import Actions from "./Actions.jsx";
import Traits from "./Traits.jsx";
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
        <DeathSavesAndExhaustion />
        <Actions />
        <Traits />
      </div>
    </>
  );
};

export default CharacterSheet;
