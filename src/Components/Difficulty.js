import React, { useEffect } from 'react';
import './Difficulty.css';
import levels from '../Data/levels.json';
import { useGlobalState } from '../store/GlobalStateProvider';

function Difficulty() {
	const [{}, dispatch] = useGlobalState();
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
			type: 'SET_CARD_STATE',
			item: Array(level.count).fill(false),
		});
		dispatch({
			type: 'SET_CARD_ID',
			item: getCardList(level.count),
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

function getCardList(count) {
	let arr = Array(count / 2).fill(1);
	for (let i in arr) {
		do {
			var num = Math.floor(Math.random() * 700 + 100);
		} while (arr.includes(num));
		arr[i] = num;
	}
	arr = [...arr, ...arr];
	arr.sort(() => Math.random() - 0.5);
	return arr;
}

export default Difficulty;
