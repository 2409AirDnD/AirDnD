import Skills from "./Skills.jsx"
import BasicInfo from "./BasicInfo.jsx"

const CharacterSheet = () => {
  return (
    <>
    <h1 id="character-sheet-header">Create your character</h1>
    <div id="character-sheet-block">
    <BasicInfo/>
    <Skills/>
    </div>
    </>
  )
}

export default CharacterSheet;