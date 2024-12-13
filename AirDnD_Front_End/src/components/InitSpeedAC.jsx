import { useEffect, useState } from "react";

const InitSpeedAC = ( { abilityModifiers, selectedRace, setSpeed } ) => {

  const addPlus = (initScore) => {
    return initScore > 0 ? `+${initScore}` : initScore;
  };

  const determineSpeed = () => {
    if (selectedRace === "Dragonborn" || selectedRace === "Elf" || selectedRace === "Half-Elf"
      || selectedRace === "Half-Orc" || selectedRace === "Human" || selectedRace === "Tiefling") {
      return 30;
    } else if (selectedRace === "Dwarf" || selectedRace === "Gnome" || selectedRace === "Halfling") {
      return 25;
    } else {
      return "..."
    }
  }

  useEffect(() => {

    setSpeed(determineSpeed());      
  }, [determineSpeed()] );

  return (
    <div id="initspeedac-container">
      <div id="init-block">
        <h1 className="initspeedac-header">Initiative</h1>
        <h2 className="initspeedac-value">{addPlus(abilityModifiers.dex)}</h2>
      </div>

      <div id="speed-block">
        <h1 className="initspeedac-header">Speed</h1>
        <h2 className="initspeedac-value">{determineSpeed()}</h2>
      </div>

      <div id="ac-block">
        <h1>Armor Class</h1>
      </div>
    </div>
  );
}

export default InitSpeedAC;
