import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Faq = () => (
    <Layout>
        <SEO title="Page two" />
        <h1>Pagina faq</h1>
        <p>Descrições sobre a página faq</p>
        <Link to="/">Voltar</Link>
    </Layout>
)

export default Faq
