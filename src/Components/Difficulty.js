import React from 'react';
import './Difficulty.css';
import levels from '../Data/levels.json';
import { useGlobalState } from '../store/GlobalStateProvider';

function Difficulty({
	level,
	setLevel,
	dimension,
	setDimension,
	tries,
	setTries,
	timer,
	setTimer,
	preset,
	setPreset,
}) {
	const [state, dispatch] = useGlobalState();
	const changeLevel = (level) => {
		dispatch({
			type: 'SET_STAGE',
			item: level.stage,
		});
		dispatch({
			type: 'SET_DIMENSION',
			item: [level.width, level.height],
		});
		dispatch({
			type: 'SET_TRIES',
			item: level.tries,
		});
		dispatch({
			type: 'SET_TIMER',
			item: level.timer,
		});
		dispatch({
			type: 'SET_PRESET_WINDOW',
			item: false,
		});

		console.log(state);
	};
	return (
		<div className="level">
			{levels.map((level) => {
				return (
					<div
						id={`level__${level.stage}`}
						className={`level__stage`}
						onClick={() => changeLevel(level)}
					>
						{level.stage.toUpperCase()}
					</div>
				);
			})}
		</div>
	);
}

export default Difficulty;
