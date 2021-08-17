import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import GlobalStateProvider from './State/GlobalStateProvider';
import reducer, { initialState } from './State/reducer';

ReactDOM.render(
	<React.StrictMode>
		<GlobalStateProvider reducer={reducer} initialState={initialState}>
			<App />
		</GlobalStateProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
