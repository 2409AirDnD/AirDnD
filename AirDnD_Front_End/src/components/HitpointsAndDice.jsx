const  HitpointsAndDice = ( { selectedClass, abilityModifiers } ) => {

  const determineDice = () => {
    if (selectedClass === "Sorcerer" || selectedClass === "Wizard") {
      return ["1d6", 6]
    } else if (selectedClass === "Bard" || selectedClass === "Cleric"
        || selectedClass === "Druid" || selectedClass === "Monk" 
        || selectedClass === "Rogue" || selectedClass === "Warlock") {
      return ["1d8", 8]
    } else if (selectedClass === "Fighter" || selectedClass === "Paladin"
       || selectedClass === "Ranger") {
      return ["1d10", 10]
    } else if (selectedClass === "Barbarian") {
      return ["1d12", 12]
    }
  };

  const determineHitPoints = () => {
    if (selectedClass && abilityModifiers.constitution !== undefined) {
    return abilityModifiers.constitution + determineDice()[1]
    } else {
      return "..."
    }
  }

  return (
    <div id="hitpoints-and-dice-block">
      <h1>Hit Points</h1>
      <h2>Current</h2>
      <h3>{determineHitPoints()}</h3>
      <h2>Max:</h2>
      <h3>{determineHitPoints()}</h3>
      <h2>Hit Dice:</h2>
      <h3>{selectedClass ? determineDice()[0] : null}</h3>
    </div>
  );
}

export default HitpointsAndDice;