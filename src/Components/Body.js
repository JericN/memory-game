import './Body.css';
import React from 'react';
import Card from './Cards.js';
import theme from '../Data/theme.json';
import { useGlobalState } from '../State/GlobalStateProvider';

export default function Body() {
	const [state] = useGlobalState();
	const bodyStyle = {
		// backgroundImage: theme[state.theme].body_bg,
	};
	return (
		<div className="body" style={bodyStyle}>
			<div className="body__container">
				<Card />
			</div>
		</div>
	);
}
