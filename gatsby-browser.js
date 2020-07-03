import React from "react"
import { StateProvider } from "./src/store/StateProvider"
import { siteReducer, appInitialState } from "./src/store/reducers"

export const wrapRootElement = ({ element }) => (
  <StateProvider reducer={siteReducer} initialState={appInitialState}>
    {element}
  </StateProvider>
)
