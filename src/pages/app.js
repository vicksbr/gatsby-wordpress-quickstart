import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/layout"
import Login from "../components/login"


const App = () => (
  <Router basepath="/app">
    <Login path="/login" />
  </Router>
)
export default App