import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import useHeaderData from './useHeaderData'
import { parseUrl } from '../../utils'
import useSiteAPI from "../../store/useSiteAPI";
import { navigate } from '@reach/router';
import { groupBy } from "../../utils"

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

const NavMenu = ({ menus, translationPages, currentLanguage }) => (
  <nav>
    <a style={{ padding: '2px 4px', color: 'black', float: 'left' }} href="/">Raccon Boilerplate</a>
    {menus.map((item, index) => <MenuItem key={index} item={item} />)}
    <LanguageSwitcher translationPages={translationPages} currentLanguage={currentLanguage} />
    <a style={linkStyle} href="/login/">Login</a>
  </nav>
)

const LanguageSwitcher = ({ translationPages, currentLanguage }) => {

  const { setLanguage } = useSiteAPI()
  const countryLanguageCodes = { 'Português': 'pt_BR', 'Inglês': 'en_US' }
  const CodeCountryName = { 'pt_BR': 'Português', 'en_US': 'Inglês' }

  const translatedPagePath = groupBy(translationPages, 'polylang_current_lang')

  const handleLanguageChange = (languageToSwitch) => {
    const destinationPageCountryCode = countryLanguageCodes[languageToSwitch]
    setLanguage(countryLanguageCodes[languageToSwitch])
    navigate(translatedPagePath[destinationPageCountryCode][0].path)
  }

  return (
    <select value={CodeCountryName[currentLanguage]} onChange={(event) => handleLanguageChange(event.target.value)}>
      <option>Português</option>
      <option>Inglês</option>
    </select>
  )
}

const Header = ({ siteTitle, pageLocation, currentLanguage, translationPages }) => {

  const { state } = useSiteAPI()
  const language = currentLanguage || state.language

  const { wpMenuItems } = useHeaderData(language)


  return (
    <header style={{ background: `orange`, marginBottom: `1.45rem`, }}>
      <div style={{ textAlign: 'right', padding: `1.45rem 1.0875rem` }}>
        <NavMenu menus={wpMenuItems} translationPages={translationPages} currentLanguage={language} />
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
