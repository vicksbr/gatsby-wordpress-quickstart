import PropTypes from "prop-types"
import React from "react"
import Link from "../link"
import useHeaderData from './useHeaderData'
import useSiteAPI from "../../store/useSiteAPI";
import { parseUrl } from '../../utils'
import { navigate } from 'gatsby';
import { groupBy, getHomeURL, getHeaderOptions, useHasMounted } from "../../utils"

const linkStyle = {
  padding: '2px 4px',
  color: 'black'
}

const MenuItem = ({ item }) => (
  <Link style={linkStyle} to={item.url} type={item.type}>
    <span>{item.title}</span>
  </Link>

)

const NavMenu = ({ menus, currentPageTranslationsMeta, currentPageLanguage }) => (
  <nav>
    <Link style={{ padding: '2px 4px', color: 'black', float: 'left' }} to={getHomeURL(currentPageLanguage)}>Raccon Boilerplate</Link>
    {menus.map((item, index) => <MenuItem key={index} item={item} />)}
    <LanguageSwitcher currentPageTranslationsMeta={currentPageTranslationsMeta} currentPageLanguage={currentPageLanguage} />
  </nav>

)

const LanguageSwitcher = ({ currentPageTranslationsMeta, currentPageLanguage }) => {
  const { setLanguage } = useSiteAPI()
  const options = getHeaderOptions(currentPageLanguage)
  const translationsPath = groupBy(currentPageTranslationsMeta, 'polylang_current_lang')

  const handleLanguageChange = (language) => {
    const translatedPath = translationsPath[language][0].path

    setLanguage(language)
    navigate(translatedPath)
  }

  return (
    <select value={currentPageLanguage} onChange={(event) => handleLanguageChange(event.target.value)}>
      {options.map(lang => <option key={lang.label} value={lang.value}>{lang.label}</option>)}
    </select>
  )
}

const Header = ({ siteTitle, currentPageLocation, currentPageLanguage, currentPageTranslationsMeta }) => {

  const { state } = useSiteAPI()
  const language = currentPageLanguage || state.language
  const { wpMenuItems } = useHeaderData(language)

  return (
    <header style={{ background: `orange`, marginBottom: `1.45rem`, }}>
      <div style={{ textAlign: 'right', padding: `1.45rem 1.0875rem` }}>
        <NavMenu menus={wpMenuItems} currentPageTranslationsMeta={currentPageTranslationsMeta} currentPageLanguage={language} />
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
