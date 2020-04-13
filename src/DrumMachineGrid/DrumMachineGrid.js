import React from 'react';
import './DrumMachineGrid.css';

export function DrumMachineGrid(props) {
  const NUMBER_OF_COLUMNS = 16;
  const BEATS_TYPE_NAMES = ['KICK', 'SNARE', 'OPEN HAT', 'CLOSE HAT'];
  const SEQUENCE1 = [
    [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0],
    [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0]
  ];
  const SEQUENCE2 = [
    [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0],
    [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1]
  ];
  const SEQUENCE3 = [
    [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0],
    [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0]
  ];
  const activeSequenceMap = {
    1: SEQUENCE1,
    2: SEQUENCE2,
    3: SEQUENCE3
  };

  const renderColumnHeader = () => {
    const columnArray = [];
    const activeColumn = props.activeColumn;
    columnArray.push('');
    for (let j = 1; j <= NUMBER_OF_COLUMNS; j++) {
      columnArray.push(j);
    }
    return (<tr>{columnArray.map((val, index) => (<th className={(val === activeColumn && props.isPlaying) ? 'DrumMachineGrid--activeColumn' : ''} key={index}>{val}</th>))}</tr>);
  };
  const renderActiveSequence = () => {
    const activeSequence = props.activeSequence;
    const gridArray = [];
    const sequence = activeSequenceMap[activeSequence];
    for (let i = 0; i < BEATS_TYPE_NAMES.length; i++) {
      gridArray.push([]);
      gridArray[i].push(<th key={BEATS_TYPE_NAMES[i]} className="DrumMachineGrid-beatsHeader">{BEATS_TYPE_NAMES[i]}</th>);
      for (let j = 0; j < NUMBER_OF_COLUMNS; j++) {
        gridArray[i].push(
          <td className={sequence[i][j] ? 'DrumMachineGrid--selectedCell' : ''} key={`${i},${j}`}></td>
        );
      }
    }
    return gridArray.map((row, index) => (<tr key={`row${index}`}>{row}</tr>));
  };

  return (
  	<div className="DrumMachineGrid">
      <table className="DrumMachineGrid-table">
        <thead className="DrumMachineGrid-tableHeader">
          {renderColumnHeader()}
        </thead>
        <tbody className="DrumMachineGrid-tableBody">
  		    {renderActiveSequence()}
        </tbody>
      </table>
  	</div>
  );
}
