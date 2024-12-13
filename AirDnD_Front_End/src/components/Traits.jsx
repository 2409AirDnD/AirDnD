import { useEffect, useState } from "react";

const Traits = ( { raceList, selectedRace } ) => {
  
  const [selectedRaceTraits, setSelectedRaceTraits ] = useState(null);

  const raceIndexMap = {
    0: "Dragonborn",
    1: "Dwarf",
    2: "Elf",
    3: "Gnome",
    4: "Half-Elf",
    5: "Half-Orc",
    6: "Halfling",
    7: "Human",
    8: "Tiefling",
  };

  console.log(raceList);

  useEffect(() => {
    if (selectedRace) {

      const raceIndex = Object.keys(raceIndexMap).find(key => raceIndexMap[key] === selectedRace);
      const selectedRaceObject = raceList[raceIndex];

      const traits = selectedRaceObject.traits;

      setSelectedRaceTraits(traits)
    }       
  }, [raceList, selectedRace]);

  useEffect(() => {
    console.log("Selected race traits updated: ", selectedRaceTraits);
  }, [selectedRaceTraits]);

  return (
    <div id="traits-block">
      <h1>Traits</h1>
      {selectedRaceTraits && (
        <ul>
          {selectedRaceTraits.map((trait, index) => (
            <li key={index}>{trait.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Traits;