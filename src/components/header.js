import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const linkStyle = {
  padding: '2px 4px',
  color: 'black'
}


const Header = ({ siteTitle }) => (
  <header style={{ background: `orange`, marginBottom: `1.45rem`, }}>
    <div style={{ textAlign: 'right', padding: `1.45rem 1.0875rem` }}>
      <nav>
        <a style={{ padding: '2px 4px', color: 'black', float: 'left' }} href="/">{siteTitle}</a>
        <a style={linkStyle} href="/about/">About</a>
        <a style={linkStyle} href="/blog/">Blog</a>
        <a style={linkStyle} href="/faq/">Faq</a>
        <select>
          <option>Português</option>
          <option>Inglês</option>
          <option>Espanhol</option>
        </select>
        <a style={linkStyle} href="/login/">Login</a>
      </nav>

    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
