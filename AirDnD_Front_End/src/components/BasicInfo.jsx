import { useState, useEffect } from "react";
import Inventory from "./Inventory";

const calculateProficiency = (level) => {
  if (level <= 4) {
    return +2;
  } else if (level <= 8) {
    return +3;
  } else if (level <= 12) {
    return +4;
  } else if (level <= 16) {
    return +5;
  } else if (level <= 20) {
    return +6;
  }
};

const BasicInfo = ({
  selectedClass,
  selectedRace,
  setLevel,
  setProficiencyBonus,
  setSelectedClass,
  setSelectedRace,
  classList,
  raceList,
  rolls,
  level,
  characterName,
  playerName,
  speed,
  experience,
  image,
  setCharacterName,
  setPlayerName,
  setExperience,
  setImage,
  health

}) => {

  const getClassId = (className, classList) => {
    const classItem = classList.find((cls) => cls.name === className);
    return classItem ? classItem.id : null;
  };

const createCharacter = async (e) => {
  e.preventDefault();

  const classId = getClassId(selectedClass, classList);
  const raceId = selectedRace.toLowerCase();

  const characterData = {
    characterName: characterName,
    characterAvatar: "https://cdn.pixabay.com/photo/2022/11/23/20/49/barbarian-warrior-7612898_1280.jpg",
    experience: experience,
    armorClass: 10,
    speed: speed,
    level: level,
    health: health,
    classId: classId,
    raceIndex: raceId,
    userId: 1,
  } 

  console.log("Sending character data:", characterData);

  try {
    const postCharacter = await fetch("http://localhost:3000/characters", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(characterData),
    });

    if (!postCharacter.ok) {
      const errorData = await postCharacter.json();
      throw new Error(errorData.error || "Character Creation Unsuccessful");
    }

    const character = await postCharacter.json();
    console.log("Character created:", character);
  } catch (e) {
    alert(e.message || "An error occurred. Please try again.");
  }
};

  calculateProficiency(level);

  useEffect(() => {
    const proficiency = calculateProficiency(level);
    setProficiencyBonus(proficiency);
  }, [level, setProficiencyBonus]);

  return (
    <div id="basic-info-block">
      <form onSubmit={createCharacter}>
        <label>
          Character Name:
          <input
            type="text"
            value={characterName}
            onChange={(e) => setCharacterName(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Player Name:
          <input
            type="text"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Class:
          <select
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
            required
          >
            <option value="">Select Class</option>
            {classList.map((classItem, index) => (
              <option key={index} value={classItem.name}>
                {classItem.name}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Experience:
          <input
            type="number"
            value={experience}
            onChange={(e) => setExperience(Number(e.target.value))}
            min="0"
          />
        </label>
        <br />
        <label>
          Level:
          <input
            type="number"
            value={level}
            onChange={(e) => setLevel(Number(e.target.value))}
            min="1"
          />
        </label>
        <br />
        <label>
          Image:
          <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        </label>
        <br />
        <label>
          Race:
          <select
            value={selectedRace}
            onChange={(e) => setSelectedRace(e.target.value)}
            required
          >
            <option value="">Select Race</option>
            {raceList.map((raceItem, index) => (
              <option key={index} value={raceItem.name}>
                {raceItem.name}
              </option>
            ))}
          </select>
        </label>
        <br />
        {/* Temporarily omit ability scores to see if the page renders */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BasicInfo;
