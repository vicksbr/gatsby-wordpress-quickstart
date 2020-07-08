import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { parseUrl } from "../utils"


const Link = ({ children, to, activeClassName, partiallyActive, type, ...other }) => {
  if (type === 'custom') {   
    return (
      <a href={to} {...other}>
        {children}
      </a>
    )
  }

  return (
      <GatsbyLink
        to={ parseUrl(to) }
        activeClassName={activeClassName}
        partiallyActive={partiallyActive}
        {...other}
      >
        {children}
      </GatsbyLink>
  )
  
}
export default Link