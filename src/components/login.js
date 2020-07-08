import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import useSiteAPI from "../store/useSiteAPI"

const Login = ({ location }) => {
    
    // const { state } = useSiteAPI()
    
    return  (
        <Layout 
            currentPageLocation={location} 
            currentPageLanguage='pt_BR'
            currentPageTranslationsMeta={[]} 
        >
            <SEO title="Login" />
            <h1>Esse é a página de Login</h1>
            <Link to="/">Voltar</Link>
         </Layout>
    )
}

export default Login



