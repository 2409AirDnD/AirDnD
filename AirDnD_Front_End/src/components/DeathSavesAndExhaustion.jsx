function DeathSavesAndExhaustion() {
  return (
    <div id="death-saves-and-exhaustion-container">
      <div id="deathsaves-block">
        <h1>Death Saves</h1>
        <h2>Successes</h2>
        <span>1</span>
        <input type="checkbox" className="death-saves" />
        <span>2</span>
        <input type="checkbox" className="death-saves" />
        <span>3</span>
        <input type="checkbox" className="death-saves" />
        <h2>Failures</h2>
        <span>1</span>
        <input type="checkbox" className="death-saves" />
        <span>2</span>
        <input type="checkbox" className="death-saves" />
        <span>3</span>
        <input type="checkbox" className="death-saves" />
      </div>

      <div id="exhaustion-block"> 
        <h1 id="exhaustion-header">exhaustion</h1>
        <span>1</span>
        <input type="checkbox" className="exhaustion-checkboxes" />
        <span>2</span>
        <input type="checkbox" className="exhaustion-checkboxes" />
        <span>3</span>
        <input type="checkbox" className="exhaustion-checkboxes" />
        <span>4</span>
        <input type="checkbox" className="exhaustion-checkboxes" />
        <span>5</span>
        <input type="checkbox" className="exhaustion-checkboxes" />
        <span>6</span>
        <input type="checkbox" className="exhaustion-checkboxes" />
      </div>
    </div>
  );
}

export default DeathSavesAndExhaustion;
