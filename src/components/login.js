import React from "react"
import { Link } from "gatsby"
import useSiteAPI from "../store/useSiteAPI"
import { getHomeURL } from "../utils"


const Login = () => {
    const { state, handleAuth, getSiteLanguage } = useSiteAPI()
    const homePath = getHomeURL(getSiteLanguage())

    return (
        <div>
            <h1>Página Login (lingua atual):{state.language}</h1>
            <button
                onClick={() => {
                    handleAuth({ username: "raccoon", password: "raccoon", homePath: homePath })
                }}
            >
                Logar
            </button>
            {" "}
            <Link to={homePath}>Voltar</Link>
        </div>

    )
}

export default Login



