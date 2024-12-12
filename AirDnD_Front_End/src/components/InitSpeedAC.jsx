const InitSpeedAC = ( { abilityModifiers } ) => {

  const roll = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  
  return (
    <div id="initspeedac-container">
      <div id="init-block">
        <h1 className="initspeedac-header">Initiative</h1>
        <h2 className="initspeedac-value">{roll(1, 20) + abilityModifiers.dexterity}</h2>
      </div>

      <div id="speed-block">
        <h1>Speed</h1>
      </div>

      <div id="ac-block">
        <h1>Armor Class</h1>
      </div>
    </div>
  );
}

export default InitSpeedAC;
