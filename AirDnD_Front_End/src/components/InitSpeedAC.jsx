const InitSpeedAC = ( { abilityModifiers } ) => {

  return (
    <div id="initspeedac-container">
      <div id="init-block">
        <h1 className="initspeedac-header">Initiative</h1>
        <h2 className="initspeedac-value">{abilityModifiers.dex}</h2>
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
