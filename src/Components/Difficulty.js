import React, { useEffect } from 'react';
import './Difficulty.css';
import levels from '../Data/levels.json';
import { useGlobalState } from '../State/GlobalStateProvider';

function Difficulty() {
	const [{}, dispatch] = useGlobalState();
	const changeLevel = (level) => {
		dispatch({
			type: 'SET_PRESET_WINDOW',
			item: false,
		});
		dispatch({
			type: 'SET_PLAYING',
			item: false,
		});
		setTimeout(() => {
			dispatch({
				type: 'SET_PLAYING',
				item: true,
			});
		}, 1000);
		setTimeout(() => setVar(level), 500);
	};
	function setVar(level) {
		dispatch({
			type: 'SET_STAGE',
			item: level.stage,
		});
		dispatch({
			type: 'SET_DIMENSION',
			item: [level.width, level.height],
		});
		dispatch({
			type: 'SET_COUNT',
			item: level.count,
		});
		dispatch({
			type: 'SET_CARD_STATE',
			item: Array(level.count).fill(false),
		});
		dispatch({
			type: 'SET_CARD_ID',
			item: level.count,
		});
		dispatch({
			type: 'SET_TRIES',
			item: 0,
		});
		dispatch({
			type: 'SET_TIMER',
			item: 0,
		});
	}

	useEffect(() => {});

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
