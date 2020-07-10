import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/layout"
import Login from "../components/login"
import PrivateRoute from "../components/PrivateRoute"
import Link from "../components/link"

const AccountDetail = () => (
  <div>
    <h1>Detalhes conta</h1>
    <Link to="/">Voltar</Link>
  </div>
)

const App = () => (
  <Router basepath="/app">
    <Login path="/login" />
    <PrivateRoute path="/account" component={AccountDetail} />
  </Router>
)
export default App