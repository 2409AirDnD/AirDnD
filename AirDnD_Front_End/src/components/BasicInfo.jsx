import { useState, useEffect } from "react";

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const characterData = {
      selectedClass,
      selectedRace,
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
      health
    };
    console.log(characterData); // Send this data to your backend to save it
  };

  calculateProficiency(level);

  useEffect(() => {
    const proficiency = calculateProficiency(level);
    setProficiencyBonus(proficiency);
  }, [level, setProficiencyBonus]);

  return (
    <div id="basic-info-block">
      <form onSubmit={handleSubmit}>
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
