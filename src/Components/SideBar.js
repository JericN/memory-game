import './SideBar.css';
import React from 'react';
import Difficulty from './Difficulty';

export default function SideBar({
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
	const setDifficulty = () => {
		setPreset(true);
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
					<div className="menu__stage">Difficulty:{level}</div>
					<div className="menu__tries">Tries:{tries}</div>
					<div className="menu__timer">Time:{timer}</div>
				</div>
			</div>
			<div className="slidetabs">
				{preset && (
					<Difficulty
						level={level}
						setLevel={setLevel}
						dimension={dimension}
						setDimension={setDimension}
						tries={tries}
						setTries={setTries}
						timer={timer}
						setTimer={setTimer}
						preset={preset}
						setPreset={setPreset}
					/>
				)}
			</div>
		</div>
	);
}
