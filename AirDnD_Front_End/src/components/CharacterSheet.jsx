import Skills from "./Skills.jsx"
import BasicInfo from "./BasicInfo.jsx"
import Abilities from "./Abilities.jsx";

const CharacterSheet = () => {
  return (
    <>
    <h1 id="character-sheet-header">Create your character</h1>
    <div id="character-sheet-block">
    <BasicInfo />
    <Abilities />
    <Skills />
    </div>
    </>
  )
}

export default CharacterSheet;