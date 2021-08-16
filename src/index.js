import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import GlobalStateProvider from './store/GlobalStateProvider';
import reducer, { initialState } from './store/reducer';

ReactDOM.render(
	<React.StrictMode>
		<GlobalStateProvider reducer={reducer} initialState={initialState}>
			<App />
		</GlobalStateProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
