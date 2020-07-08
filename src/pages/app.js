import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/layout"
import Login from "../components/login"


const App = (props) => {
  console.log(props)

  return (
    <Router basepath="/app">
      <Login path="/login" />
    </Router>
  )
}

export default App