import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import useHeaderData from './useHeaderData'
import { parseUrl } from '../../utils'

const linkStyle = {
  padding: '2px 4px',
  color: 'black'
}


const MenuItem = ({ item }) => {
  const ItemTitle = () => <span>{item.title}</span>

  return item.type !== "custom" ?
    <Link style={linkStyle} to={parseUrl(item.url)}><ItemTitle /></Link>
    :
    <a style={linkStyle} href={item.url}><ItemTitle /></a>
}

const NavMenu = ({ menus }) => (
  <nav>
    <a style={{ padding: '2px 4px', color: 'black', float: 'left' }} href="/">Raccon Boilerplate</a>
    {menus.map((item, index) => <MenuItem key={index} item={item} />)}
    <LanguageSwitcher />
    <a style={linkStyle} href="/login/">Login</a>
  </nav>
)

const LanguageSwitcher = () => {
  return (
    <select>
      <option>Português</option>
      <option>Inglês</option>
    </select>
  )
}

const Header = ({ siteTitle }) => {

  const { wpMenuItems } = useHeaderData()

  return (
    <header style={{ background: `orange`, marginBottom: `1.45rem`, }}>
      <div style={{ textAlign: 'right', padding: `1.45rem 1.0875rem` }}>
        <NavMenu menus={wpMenuItems} />
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
