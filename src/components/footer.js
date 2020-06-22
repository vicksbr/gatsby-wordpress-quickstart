import React from "react"

const Footer = () => {
    const buildYear = new Date().getFullYear()
    const pageLink = <a href="https://www.raccoon.ag">Raccoon</a>


    return (
        <footer style={{ textAlign: 'right' }}>
            {`${buildYear} Built by `}
            {pageLink}
        </footer>
    )
}

export default Footer

