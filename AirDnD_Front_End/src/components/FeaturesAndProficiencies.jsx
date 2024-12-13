import { useEffect } from "react";
import { useState } from "react";

const FeaturesAndProficiencies = ( { classList, selectedClass } ) => {
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

  const level = 1 //TAKE THIS OUT - USESTATE FOR LEVEL SHOULD BE MOVED TO CHARACTER SHEET,
  //THEN SET LEVEL PASSED TO BASIC INFO AND LEVEL PASSED TO THIS COMP. AND OTHERS.

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

      console.log(levelOneFeatures);
      console.log(levelTwoFeatures);
      console.log(levelThreeFeatures);
    }       
  }, [classList, selectedClass]);

  return (
    <div id="features-and-Proficiencies-block">
      <h1>Features & Proficiencies</h1>
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
    </div>
  );  
}

export default FeaturesAndProficiencies;