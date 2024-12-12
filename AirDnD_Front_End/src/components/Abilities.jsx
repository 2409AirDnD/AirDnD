import { useState } from "react";

const Abilities = ( { setRolls, rolls, setAbilityModifiers }) => {

  const roll = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  
  const rollAll = () => {
    const newRolls = {
      strength: roll(6, 18),
      dexterity: roll(6, 18),
      constitution: roll(6, 18),
      intelligence: roll(6, 18),
      wisdom: roll(6, 18),
      charisma: roll(6, 18),
    };
    setRolls(newRolls);
    setAbilityModifiers(calculateAllModifiers(newRolls));
  };

  const calculateAbilityModifier = (abilityScore) => {
    return Math.floor((abilityScore - 10) / 2);
  };

  const calculateAllModifiers = (rolls) => {
    return {
      strength: calculateAbilityModifier(rolls.strength),
      dexterity: calculateAbilityModifier(rolls.dexterity),
      constitution: calculateAbilityModifier(rolls.constitution),
      intelligence: calculateAbilityModifier(rolls.intelligence),
      wisdom: calculateAbilityModifier(rolls.wisdom),
      charisma: calculateAbilityModifier(rolls.charisma),
    };
  };

  const addPlus = (modifier) => {
    return modifier > 0 ? `+${modifier}` : modifier;
  };

  return (
    <div id="abilities-block">

      <div className="single-ability-section">
        <p className="ability-name">Stength</p>
        { rolls.strength ? <h2 className="ability-modifier">{addPlus(calculateAbilityModifier(rolls.strength))}</h2> : null }
        <section className="ability-roll">
          <p id="strength-roll">{rolls.strength}</p>
        </section>
      </div>

      <div className="single-ability-section">
        <p className="ability-name">Dexterity</p>
        { rolls.dexterity ? <h2 className="ability-modifier">{addPlus(calculateAbilityModifier(rolls.dexterity))}</h2> : null }
        <section className="ability-roll">
          <p id="dexterity-roll">{rolls.dexterity}</p>
        </section>
      </div>

      <div className="single-ability-section">
        <p className="ability-name">Constitution</p>
        { rolls.constitution ? <h2 className="ability-modifier">{addPlus(calculateAbilityModifier(rolls.constitution))}</h2> : null }
        <section className="ability-roll">
        <p id="constitution-roll">{rolls.constitution}</p>
        </section>
      </div>

      <div className="single-ability-section">
        <p className="ability-name">Intellegence</p>
        { rolls.intelligence ? <h2 className="ability-modifier">{addPlus(calculateAbilityModifier(rolls.intelligence))}</h2> : null }
        <section className="ability-roll">
          <p id="intellegence-roll">{rolls.intelligence}</p>
        </section>
      </div>

      <div className="single-ability-section">
        <p className="ability-name">Wisdom</p>
        { rolls.wisdom ? <h2 className="ability-modifier">{addPlus(calculateAbilityModifier(rolls.wisdom))}</h2> : null }
        <section className="ability-roll">
        <p id="wisdom-roll">{rolls.wisdom}</p> 
        </section>
      </div>

      <div className="single-ability-section">
        <p className="ability-name">Charisma</p>
        { rolls.charisma ? <h2 className="ability-modifier">{addPlus(calculateAbilityModifier(rolls.charisma))}</h2> : null }
        <section className="ability-roll">
        <p id="charisma-roll">{rolls.charisma}</p>
        </section>
      </div>
    
      <button id="ability-roll-button" onClick={() => rollAll()}>Roll!</button>

    </div>
  )
}

export default Abilities;