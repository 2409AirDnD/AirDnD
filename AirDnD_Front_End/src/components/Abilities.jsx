import { useState } from "react";

const Abilities = ( { setRolls, rolls, setAbilityModifiers }) => {

  const roll = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  
  const rollAll = () => {
    const newRolls = {
      str: roll(6, 18),
      dex: roll(6, 18),
      con: roll(6, 18),
      int: roll(6, 18),
      wis: roll(6, 18),
      cha: roll(6, 18),
    };
    setRolls(newRolls);
    setAbilityModifiers(calculateAllModifiers(newRolls));
  };

  const calculateAbilityModifier = (abilityScore) => {
    return Math.floor((abilityScore - 10) / 2);
  };

  const calculateAllModifiers = (rolls) => {
    return {
      str: calculateAbilityModifier(rolls.str),
      dex: calculateAbilityModifier(rolls.dex),
      con: calculateAbilityModifier(rolls.con),
      int: calculateAbilityModifier(rolls.int),
      wis: calculateAbilityModifier(rolls.wis),
      cha: calculateAbilityModifier(rolls.cha),
    };
  };

  const addPlus = (modifier) => {
    return modifier > 0 ? `+${modifier}` : modifier;
  };

  return (
    <div id="abilities-block">

      <div className="single-ability-section">
        <p className="ability-name">Stength</p>
        { rolls.str ? <h2 className="ability-modifier">{addPlus(calculateAbilityModifier(rolls.str))}</h2> : null }
        <section className="ability-roll">
          <p id="strength-roll">{rolls.str}</p>
        </section>
      </div>

      <div className="single-ability-section">
        <p className="ability-name">Dexterity</p>
        { rolls.dex ? <h2 className="ability-modifier">{addPlus(calculateAbilityModifier(rolls.dex))}</h2> : null }
        <section className="ability-roll">
          <p id="dexterity-roll">{rolls.dex}</p>
        </section>
      </div>

      <div className="single-ability-section">
        <p className="ability-name">Constitution</p>
        { rolls.con ? <h2 className="ability-modifier">{addPlus(calculateAbilityModifier(rolls.con))}</h2> : null }
        <section className="ability-roll">
        <p id="constitution-roll">{rolls.con}</p>
        </section>
      </div>

      <div className="single-ability-section">
        <p className="ability-name">Intellegence</p>
        { rolls.int ? <h2 className="ability-modifier">{addPlus(calculateAbilityModifier(rolls.int))}</h2> : null }
        <section className="ability-roll">
          <p id="intellegence-roll">{rolls.int}</p>
        </section>
      </div>

      <div className="single-ability-section">
        <p className="ability-name">Wisdom</p>
        { rolls.wis ? <h2 className="ability-modifier">{addPlus(calculateAbilityModifier(rolls.wis))}</h2> : null }
        <section className="ability-roll">
        <p id="wisdom-roll">{rolls.wis}</p> 
        </section>
      </div>

      <div className="single-ability-section">
        <p className="ability-name">Charisma</p>
        { rolls.cha ? <h2 className="ability-modifier">{addPlus(calculateAbilityModifier(rolls.cha))}</h2> : null }
        <section className="ability-roll">
        <p id="charisma-roll">{rolls.cha}</p>
        </section>
      </div>
    
      <button id="ability-roll-button" onClick={() => rollAll()}>Roll!</button>

    </div>
  )
}

export default Abilities;