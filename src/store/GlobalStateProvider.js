import React, { createContext, useReducer, useContext } from 'react';

const stateContext = createContext({});
const GlobalStateProvider = ({ reducer, initialState, children }) => {
	return (
		<stateContext.Provider value={useReducer(reducer, initialState)}>
			{children}
		</stateContext.Provider>
	);
};

export const useGlobalState = () => useContext(stateContext);

export default GlobalStateProvider;
