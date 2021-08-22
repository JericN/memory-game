import React, { useEffect } from 'react';
import './Theme.css';
import theme from '../../Data/theme.json';
import { useGlobalState } from '../../State/GlobalStateProvider';

function Difficulty() {
	const [state, dispatch] = useGlobalState();
	const changeLevel = (style) => {
		console.log(style);
		dispatch({
			type: 'SET_PRESET_WINDOW',
			item: false,
		});
		dispatch({
			type: 'SET_THEME',
			item: style,
		});
	};

	useEffect(() => {});

	return (
		<div className="theme">
			{Object.entries(theme).map((style) => {
				console.log(style[0]);
				return (
					<div
						id={`theme__${style[0]}`}
						className={`theme__type`}
						onClick={() => changeLevel(style[0])}
					>
						{style[0].toLowerCase()}
					</div>
				);
			})}
		</div>
	);
}

export default Difficulty;
