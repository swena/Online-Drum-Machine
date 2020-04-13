import React, { useEffect, useRef, useState } from 'react';
import './DrumMachine.css';
import { DrumControls } from '../DrumControls/DrumControls';
import { DrumMachineGrid } from '../DrumMachineGrid/DrumMachineGrid';

export function DrumMachine() {
	const [activeSequence, setActiveSequence] = useState(1);
	const [activeColumn, setActiveColumn] = useState(1);
	const [isPlaying, setIsPlaying] = useState(false);
	const [tempo, setTempo] = useState(128);
	const NUMBER_OF_COLUMNS = 16;
	const MIN_TEMPO = 40;
    const MAX_TEMPO = 240;
	const timer = useRef();
	useEffect(() => {
		if (isPlaying) {
			if (timer.current) {
				clearInterval(timer.current);
			}
			let tempoInterval = (tempo >= MIN_TEMPO && tempo <= MAX_TEMPO) ? tempo : (tempo < MIN_TEMPO ? MIN_TEMPO : MAX_TEMPO);
			timer.current = setInterval(() => {
				if (activeColumn < NUMBER_OF_COLUMNS)
					setActiveColumn(activeColumn + 1);
				else {
					setActiveColumn(1);
				}
			}, 60000 / tempoInterval); // state for tempo will go here
		} else {
			clearInterval(timer.current);
		}
	}, [isPlaying, activeColumn, tempo]);
	const handleChangeSequence = e => {
		setActiveSequence(e.target.value);
		setActiveColumn(1);
	}
	const handleChangeTempo = e => {
		setTempo(e.target.value);
	}
	const handlePlay = e => {
		setIsPlaying(true);
	}
	const handleStop = e => {
		setIsPlaying(false);
		setActiveColumn(1);
	}
	return (
		<div className="DrumMachine">
			<div className="DrumMachine-header">
				<h1 className="DrumMachine-name">JS-808</h1>
				<DrumControls 
					tempo={tempo}
					maxTempo={MAX_TEMPO}
					minTempo={MIN_TEMPO}
					onChangeTempo={handleChangeTempo}
					onChangeSequence={handleChangeSequence}
					play={handlePlay}
					stop={handleStop}
				/>
			</div>
			<div className="DrumMachine-section">
				<DrumMachineGrid 
					isPlaying={isPlaying}
					activeColumn={activeColumn}
					activeSequence={activeSequence}
				/>
			</div>
		</div>
	);
}
