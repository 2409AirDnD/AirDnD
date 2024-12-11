import { useState, useEffect } from "react";

const BasicInfo = () => {
  // State for form fields
  const [characterName, setCharacterName] = useState("");
  const [playerName, setPlayerName] = useState("");
  const [classList, setClassList] = useState([]);
  const [raceList, setRaceList] = useState([]);
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedRace, setSelectedRace] = useState("");
  const [experience, setExperience] = useState(0);
  const [level, setLevel] = useState(1);
  const [image, setImage] = useState(null);
  const [abilityScores, setAbilityScores] = useState({
    str: 10,
    dex: 10,
    con: 10,
    int: 10,
    wis: 10,
    cha: 10,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const classResponse = await fetch("http://localhost:3000/classes");
        const classData = await classResponse.json();
        setClassList(classData);

        const raceResponse = await fetch("http://localhost:3000/races");
        const raceData = await raceResponse.json();
        setRaceList(raceData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const characterData = {
      characterName,
      playerName,
      selectedClass,
      selectedRace,
      experience,
      level,
      image,
      abilityScores,
    };
    console.log(characterData); // Send this data to your backend to save it
  };

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
