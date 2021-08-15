import React from 'react';
import './Difficulty.css';
import levels from '../Data/levels.json';

function Difficulty({ level, setLevel, dimension, setDimension, tries, setTries, timer, setTimer, preset, setPreset }) {
	const changeLevel = (level) => {
		setLevel(level.stage);
		setDimension([level.width, level.height]);
		setTries(level.tries);
		setTimer(level.timer);
		setPreset(false);
	};
	return (
		<div className="level">
			{levels.map((level) => {
				return (
					<div id={`level__${level.stage}`} className={`level__stage`} onClick={() => changeLevel(level)}>
						{level.stage.toUpperCase()}
					</div>
				);
			})}
		</div>
	);
}

export default Difficulty;
