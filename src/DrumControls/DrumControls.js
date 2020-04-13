import React from 'react';
import './DrumControls.css';

export function DrumControls(props) {
  return (
  	<div className="DrumControls">
  		<div className="DrumControls-control DrumControls-stop">
        <button onClick={props.stop}>■</button>
      </div>
  		<div className="DrumControls-control DrumControls-play">
        <button onClick={props.play}>▶</button>
      </div>
      <div className="DrumControls-control DrumControls-tempo">
        <input type="number" value={props.tempo} onChange={props.onChangeTempo} max={props.maxTempo} min={props.minTempo}/> BPM
      </div>
      <div className="DrumControls-control DrumControls-sequenceSelector">
        <select onChange={props.onChangeSequence}>
          <option value="1">SEQUENCE 1</option>
          <option value="2">SEQUENCE 2</option>
          <option value="3">SEQUENCE 3</option>
        </select>
      </div>
  	</div>
  );
}
