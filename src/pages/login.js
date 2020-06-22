import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"

const LoginPage = () => (
    <Layout>
        <SEO title="Login" />
        <h1>Esse é a página de Login </h1>
        <p>Lista de posts</p>
        <Link to="/">Voltar</Link>
    </Layout>
)

export default LoginPage



