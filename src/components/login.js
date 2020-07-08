import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import useSiteAPI from "../store/useSiteAPI"

const Login = (props) => {

    console.log('login', props)

    return (
        <div>
            <h1>Página Login</h1>
            <Link to="/">Voltar</Link>
        </div>

    )
}

export default Login



