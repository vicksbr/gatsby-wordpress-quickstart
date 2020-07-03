import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"

const BlogPage = () => (
    <Layout>
        <SEO title="Blog" />
        <h1>Esse é o nosso Blog!!</h1>
        <p>Lista de posts</p>
        <Link to="/">Voltar</Link>
    </Layout>
)

export default BlogPage



