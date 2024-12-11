import { useState } from "react";

const Abilities = () => {

  const [rolls, setRolls] = useState({
    strength: 0,
    dexterity: 0,
    constitution: 0,
    intelligence: 0,
    wisdom: 0,
    charisma: 0,
  })

  const roll = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  
  const rollAll = () => {
    setRolls({
      strength: roll(6, 15),
      dexterity: roll(6, 15),
      constitution: roll(6, 15),
      intelligence: roll(6, 15),
      wisdom: roll(6, 15),
      charisma: roll(6, 15),
    })
  }

  return (
    <div id="abilities-block">

      <div className="single-ability-section">
        <p className="ability-name">Stength</p>
        <section className="ability-roll">
          <p id="strength-roll">{rolls.strength}</p>
        </section>
      </div>

      <div className="single-ability-section">
        <p className="ability-name">Dexterity</p>
        <section className="ability-roll">
          <p id="dexterity-roll">{rolls.dexterity}</p>
        </section>
      </div>

      <div className="single-ability-section">
        <p className="ability-name">Constitution</p>
        <section className="ability-roll">
        <p id="constitution-roll">{rolls.constitution}</p>
        </section>
      </div>

      <div className="single-ability-section">
        <p className="ability-name">Intellegence</p>
        <section className="ability-roll">
          <p id="intellegence-roll">{rolls.intelligence}</p>
        </section>
      </div>

      <div className="single-ability-section">
        <p className="ability-name">Wisdom</p>
        <section className="ability-roll">
        <p id="wisdom-roll">{rolls.wisdom}</p> 
        </section>
      </div>

      <div className="single-ability-section">
        <p className="ability-name">Charisma</p>
        <section className="ability-roll">
        <p id="charisma-roll">{rolls.charisma}</p>
        </section>
      </div>
    
      <button id="ability-roll-button" onClick={() => rollAll()}>Roll!</button>

    </div>
  )
}

export default Abilities;