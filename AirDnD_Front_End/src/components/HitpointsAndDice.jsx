import { useState, useEffect } from "react";

const HitpointsAndDice = ({ selectedClass, abilityModifiers, level, setHealth }) => {
  const [currentHitPoints, setCurrentHitPoints] = useState(0);
  const [maxHitPoints, setMaxHitPoints] = useState(0);
  const [prevLevel, setPrevLevel] = useState(null);

  const rollHitDie = (hitDie) =>
    Math.max(1, Math.floor(Math.random() * hitDie) + 1);

  const determineDice = () => {
    if (selectedClass === "Sorcerer" || selectedClass === "Wizard") {
      return [6, `${level}d6`];
    } else if (
      selectedClass === "Bard" ||
      selectedClass === "Cleric" ||
      selectedClass === "Druid" ||
      selectedClass === "Monk" ||
      selectedClass === "Rogue" ||
      selectedClass === "Warlock"
    ) {
      return [8, `${level}d8`];
    } else if (
      selectedClass === "Fighter" ||
      selectedClass === "Paladin" ||
      selectedClass === "Ranger"
    ) {
      return [10, `${level}d10`];
    } else if (selectedClass === "Barbarian") {
      return [12, `${level}d12`];
    }
  };

  useEffect(() => {
    const calculateMaxHitPoints = () => {
      if (!selectedClass || abilityModifiers.con === undefined) {
        return 0;
      }

      const [hitDieValue] = determineDice();
      let hitPoints = hitDieValue + abilityModifiers.con;

      for (let i = 2; i <= level; i++) {
        hitPoints += rollHitDie(hitDieValue) + abilityModifiers.con;
      }

      return hitPoints;
    };

    const newMaxHitPoints = calculateMaxHitPoints();

    if (level === 1) {
      setMaxHitPoints(newMaxHitPoints);
      setCurrentHitPoints(newMaxHitPoints);
    } else if (level > prevLevel) {
      const updatedMaxHitPoints =
        maxHitPoints + rollHitDie(determineDice()[0]) + abilityModifiers.con;
      setMaxHitPoints(updatedMaxHitPoints);
      setCurrentHitPoints(updatedMaxHitPoints);
    } else if (level < prevLevel) {
      setMaxHitPoints(newMaxHitPoints);
      setCurrentHitPoints(newMaxHitPoints);
    }

    setPrevLevel(level);
  }, [selectedClass, abilityModifiers, level, prevLevel, maxHitPoints]);

  const newHealth = {
    currentHP: currentHitPoints,
    maxHP: maxHitPoints,
    tempHP: 0
  }

  useEffect(() => {

  setHealth(newHealth);      
}, [maxHitPoints, currentHitPoints] );

  return (
    <div id="hitpoints-and-dice-block">
      <h1>Hit Points</h1>
      <h2>Current</h2>
      <h3>{currentHitPoints}</h3>
      <h2>Max:</h2>
      <h3>{maxHitPoints}</h3>
      <h2>Hit Dice:</h2>
      <h3>{selectedClass ? determineDice()[1] : "..."}</h3>
    </div>
  );
};

export default HitpointsAndDice;
