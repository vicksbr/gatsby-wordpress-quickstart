import PropTypes from "prop-types"
import React from "react"
import Link from "../link"
import useHeaderData from './useHeaderData'
import useSiteAPI from "../../store/useSiteAPI";
import { navigate } from 'gatsby';
import { groupBy, getHomeURL, getHeaderOptions, isEmptyObj } from "../../utils"
import { isLoggedIn } from "../../services/auth";

import Style from './style.module.css'

const MenuLinks = ({ menus }) =>
  menus.map((item, idx) => {
    return <Link key={idx} className={Style.navLink} to={item.url} type={item.type}><span>{item.title}</span> </Link>
  })

const LoginOrUserMenu = ({ authenticatedUser, homePath }) => {
  const { handleLogout } = useSiteAPI()
  return (
    <>
      {isEmptyObj(authenticatedUser) ?
        <Link className={Style.navLink} to="/app/login">Login</Link>
        :
        <Link className={Style.navLink} to="/" onClick={(event) => { event.preventDefault(); handleLogout(homePath) }}>Logout</Link>
      }
    </>
  )
}

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

const Header = ({ siteTitle, currentPageLanguage, currentPageTranslationsMeta }) => {
  const { getUser } = useSiteAPI()
  const { wpMenuItems } = useHeaderData(currentPageLanguage)
  const homePath = getHomeURL(currentPageLanguage)
  const isUserLoggedIn = getUser()

  return (
    <header className={Style.headerContainer}>
      <nav className={Style.navMenu}>
        <Link className={Style.navLink} to={homePath}>{siteTitle}</Link>
        <MenuLinks menus={wpMenuItems} />
        <LanguageSwitcher currentPageTranslationsMeta={currentPageTranslationsMeta} currentPageLanguage={currentPageLanguage} />
        <LoginOrUserMenu authenticatedUser={isUserLoggedIn} homePath={homePath} />
      </nav>
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
