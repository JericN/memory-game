import React from 'react';
import './Difficulty.css';
import levels from '../../Data/levels.json';
import { useGlobalState } from '../../State/GlobalStateProvider';

function Difficulty() {
	const [, dispatch] = useGlobalState();
	const changeLevel = (stage, level) => {
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
		setTimeout(() => setVar(stage, level), 500);
	};
	function setVar(stage, level) {
		dispatch({
			type: 'SET_STAGE',
			item: stage,
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

	return (
		<div className="level">
			{Object.entries(levels).map((level) => {
				return (
					<div
						id={`level__${level[0]}`}
						className={`level__stage`}
						onClick={() => changeLevel(level[0], level[1])}
					>
						{level[0].toUpperCase()}
					</div>
				);
			})}
		</div>
	);
}

export default Difficulty;
