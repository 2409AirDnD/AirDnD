const ProficiencyBonus = ( {proficiencyBonus} ) => {

  const addPlus = (proficiencyBonus) => {
    return proficiencyBonus > 0 ? `+${proficiencyBonus}` : proficiencyBonus };

  return (
  <div id="proficiency-bonus-block">
    <h1>Proficiency Bonus</h1>
    <h2>{addPlus(proficiencyBonus)}</h2>
  </div>
  )
}

export default ProficiencyBonus;