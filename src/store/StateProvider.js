import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { siteReducer, appInitialState } from "../store/reducers"

export const StateContext = createContext();

export const StateProvider = ({ children }) => {
    return (
        <StateContext.Provider value={useReducer(siteReducer, appInitialState)}>
            {children}
        </StateContext.Provider>
    )
}

export const useStore = () => useContext(StateContext);


