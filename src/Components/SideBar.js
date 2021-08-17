import './SideBar.css';
import React, { useEffect, useRef, useState } from 'react';
import Difficulty from './Difficulty';
import { useGlobalState } from '../State/GlobalStateProvider';

export default function SideBar() {
	const [timer, setTimer] = useState('');
	const [state, dispatch] = useGlobalState();

	const setDifficulty = () => {
		dispatch({
			type: 'SET_PRESET_WINDOW',
			item: true,
		});
	};

	const id = React.useRef(null);

	const clearInterval = () => {
		window.clearInterval(id.current);
	};

	React.useEffect(() => {
		if (state.tries === 0) {
			console.log('0');
			clearInterval();
			setTimer('00:00');
		} else if (state.tries === 1) {
			console.log('1');
			counter();
		} else {
			const opened = state.card_state.reduce((total, card) => {
				return card ? total + 1 : total;
			});
			if (opened === state.count) {
				console.log('end');
				clearInterval();
			}
		}
	}, [state.tries]);

	const counter = () => {
		const timeStart = new Date();
		id.current = window.setInterval(() => {
			const timeNow = new Date();
			const distance = timeNow - timeStart;
			const minute = Math.floor(distance / (1000 * 60));
			const seconds = Math.floor((distance % (1000 * 60)) / 1000);
			setTimer(
				`${minute < 10 ? '0' + minute : minute}:${seconds < 10 ? '0' + seconds : seconds}`
			);
		}, 1000);
	};

	const setTheme = () => {};

	return (
		<div className="sidebar">
			<div className="side__container">
				<h1>Memory Limit</h1>
				<div className="menu__setDifficulty button" onClick={() => setDifficulty()}>
					Difficulty
				</div>
				<div className="menu__setTheme button" onClick={() => clearInterval()}>
					Theme
				</div>

				<div className="menu__presets">
					<div className="menu__stage">Difficulty:{state.stage}</div>
					<div className="menu__tries">Tries:{state.tries}</div>
					<div className="menu__timer">Time:{timer}</div>
				</div>
			</div>
			<div className="slidetabs">{state.presetWindow && <Difficulty />}</div>
		</div>
	);
}
