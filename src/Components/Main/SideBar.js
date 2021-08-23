import './SideBar.css';
import React, { useState } from 'react';
import Difficulty from '../Sub/Difficulty';
import Theme from '../Sub/Theme';
import { useGlobalState } from '../../State/GlobalStateProvider';
import charmander from '../../Images/charmander.png';
import bulbasaur from '../../Images/bulbasaur.png';
import squirtle from '../../Images/squirtle.png';

export default function SideBar() {
	const [timer, setTimer] = useState('');
	const [state, dispatch] = useGlobalState();

	const setDifficulty = () => {
		dispatch({
			type: 'SET_PRESET_WINDOW',
			item: 'stage',
		});
	};
	const setTheme = () => {
		dispatch({
			type: 'SET_PRESET_WINDOW',
			item: 'theme',
		});
	};
	const [character] = useState({
		summer: charmander,
		spring: bulbasaur,
		winter: squirtle,
	});

	const id = React.useRef(null);

	const clearInterval = () => {
		window.clearInterval(id.current);
	};

	React.useEffect(() => {
		if (state.tries === 0) {
			clearInterval();
			setTimer('00:00');
		} else if (state.tries === 1) {
			counter();
		} else {
			const opened = state.card_state.reduce((total, card) => {
				return card ? total + 1 : total;
			});
			if (opened === state.count) {
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

	return (
		<div className="sidebar">
			<h1>Memory Limit</h1>
			<div className="side__container">
				<div className="menu__setDifficulty button" onClick={() => setDifficulty()}>
					Difficulty
				</div>
				<div className="menu__setTheme button" onClick={() => setTheme()}>
					Theme
				</div>
				<div className="menu__info">
					<div className="menu__stage">Stage: {state.stage.toUpperCase()}</div>
					<div className="menu__tries">Tries: {state.tries}</div>
					<div className="menu__timer">Time: {timer}</div>
				</div>
			</div>
			<img className="menu_image" src={character[state.theme]} alt="pokemon" />
			<div className="tab__stage">{state.presetWindow === 'stage' && <Difficulty />}</div>
			<div className="tag__theme">{state.presetWindow === 'theme' && <Theme />}</div>
		</div>
	);
}
