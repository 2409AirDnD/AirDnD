import { useState } from "react";

const Abilities = ( { setRolls, rolls }) => {

  const roll = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  
  const rollAll = () => {
    setRolls({
      strength: roll(6, 18),
      dexterity: roll(6, 18),
      constitution: roll(6, 18),
      intelligence: roll(6, 18),
      wisdom: roll(6, 18),
      charisma: roll(6, 18),
    })
  }

  const calculateAbilityModifier = (abilityScore) => {
    const modifier = Math.floor((abilityScore - 10) / 2);
    return modifier > 0 ? `+${modifier}` : modifier;
  }

  return (
    <div id="abilities-block">

      <div className="single-ability-section">
        <p className="ability-name">Stength</p>
        { rolls.strength ? <h2 className="ability-modifier">{calculateAbilityModifier(rolls.strength)}</h2> : null }
        <section className="ability-roll">
          <p id="strength-roll">{rolls.strength}</p>
        </section>
      </div>

      <div className="single-ability-section">
        <p className="ability-name">Dexterity</p>
        { rolls.dexterity ? <h2 className="ability-modifier">{calculateAbilityModifier(rolls.dexterity)}</h2> : null }
        <section className="ability-roll">
          <p id="dexterity-roll">{rolls.dexterity}</p>
        </section>
      </div>

      <div className="single-ability-section">
        <p className="ability-name">Constitution</p>
        { rolls.constitution ? <h2 className="ability-modifier">{calculateAbilityModifier(rolls.constitution)}</h2> : null }
        <section className="ability-roll">
        <p id="constitution-roll">{rolls.constitution}</p>
        </section>
      </div>

      <div className="single-ability-section">
        <p className="ability-name">Intellegence</p>
        { rolls.intelligence ? <h2 className="ability-modifier">{calculateAbilityModifier(rolls.intelligence)}</h2> : null }
        <section className="ability-roll">
          <p id="intellegence-roll">{rolls.intelligence}</p>
        </section>
      </div>

      <div className="single-ability-section">
        <p className="ability-name">Wisdom</p>
        { rolls.wisdom ? <h2 className="ability-modifier">{calculateAbilityModifier(rolls.wisdom)}</h2> : null }
        <section className="ability-roll">
        <p id="wisdom-roll">{rolls.wisdom}</p> 
        </section>
      </div>

      <div className="single-ability-section">
        <p className="ability-name">Charisma</p>
        { rolls.charisma ? <h2 className="ability-modifier">{calculateAbilityModifier(rolls.charisma)}</h2> : null }
        <section className="ability-roll">
        <p id="charisma-roll">{rolls.charisma}</p>
        </section>
      </div>
    
      <button id="ability-roll-button" onClick={() => rollAll()}>Roll!</button>

    </div>
  )
}

export default Abilities;