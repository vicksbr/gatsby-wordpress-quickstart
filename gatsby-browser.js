import React from "react"
import { StateProvider } from "./src/store/StateProvider"

export const wrapRootElement = ({ element }) => (
  <StateProvider>
    {element}
  </StateProvider>
)
