import './SideBar.css';
import React from 'react';
import Difficulty from './Difficulty';
import { useGlobalState } from '../store/GlobalStateProvider';

export default function SideBar() {
	const [state, dispatch] = useGlobalState();
	const setDifficulty = () => {
		dispatch({
			type: 'SET_PRESET_WINDOW',
			item: true,
		});
	};

	const setTheme = () => {};
	return (
		<div className="sidebar">
			<div className="side__container">
				<h1>Memory Limit</h1>
				<div className="menu__setDifficulty button" onClick={() => setDifficulty()}>
					Difficulty
				</div>
				<div className="menu__setTheme button" onClick={() => setTheme()}>
					Theme
				</div>

				<div className="menu__presets">
					<div className="menu__stage">Difficulty:{state.stage}</div>
					<div className="menu__tries">Tries:{state.tries}</div>
					<div className="menu__timer">Time:{state.timer}</div>
				</div>
			</div>
			<div className="slidetabs">{state.presetWindow && <Difficulty />}</div>
		</div>
	);
}
