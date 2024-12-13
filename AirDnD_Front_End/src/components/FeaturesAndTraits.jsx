import { useEffect } from "react";
import { useState } from "react";

const FeaturesAndTraits = ( { level, classList, selectedClass, raceList, selectedRace } ) => {
  const [levelOneFeatures, setLevelOneFeatures] = useState([]);
  const [levelTwoFeatures, setLevelTwoFeatures] = useState([]);
  const [levelThreeFeatures, setLevelThreeFeatures] = useState([]);

  const classIndexMap = {
    0: "Barbarian",
    1: "Bard",
    2: "Cleric",
    3: "Druid",
    4: "Fighter",
    5: "Monk",
    6: "Paladin",
    7: "Ranger",
    8: "Rogue",
    9: "Sorcerer",
    10: "Warlock",
    11: "Wizard"
  };

  useEffect(() => {
    if (selectedClass) {

      const classIndex = Object.keys(classIndexMap).find(key => classIndexMap[key] === selectedClass);
      const selectedClassObject = classList[classIndex];

      const features = selectedClassObject.features;

      const levelOne = features.filter(feature => feature.level === 1);
      const levelTwo = features.filter(feature => feature.level === 2);
      const levelThree = features.filter(feature => feature.level === 3);

      setLevelOneFeatures(levelOne);
      setLevelTwoFeatures(levelTwo);
      setLevelThreeFeatures(levelThree);
    }       
  }, [classList, selectedClass]);

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

  useEffect(() => {
    if (selectedRace) {

      const raceIndex = Object.keys(raceIndexMap).find(key => raceIndexMap[key] === selectedRace);
      const selectedRaceObject = raceList[raceIndex];

      const traits = selectedRaceObject.traits;

      setSelectedRaceTraits(traits)
    }       
  }, [raceList, selectedRace]);

  useEffect(() => {
  }, [selectedRaceTraits]);


  return (
    <div id="features-and-Proficiencies-block">
      <h1>Features & Traits</h1>
      <>
        <h4>Features</h4>
        <ul>
          {level === 1 && levelOneFeatures.map((feature, index) => (
            <li key={index}>{feature.name}</li>
          ))}
          {level === 2 && (
            <>
              {levelOneFeatures.map((feature, index) => (
                <li key={index}>{feature.name}</li>
              ))}
              {levelTwoFeatures.map((feature, index) => (
                <li key={index}>{feature.name}</li>
              ))}
            </>
          )}
          {level === 3 && (
            <>
              {levelOneFeatures.map((feature, index) => (
                <li key={index}>{feature.name}</li>
              ))}
              {levelTwoFeatures.map((feature, index) => (
                <li key={index}>{feature.name}</li>
              ))}
              {levelThreeFeatures.map((feature, index) => (
                <li key={index}>{feature.name}</li>
              ))}
            </>
          )}
        </ul>
      </>
      <h4>Traits</h4>
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

export default FeaturesAndTraits;