import React from 'react'

import GatsbyLink from 'gatsby-link'

import { isExternalLink } from '../../utils'

export const LinkCustom = ({ children, href, to, title, onClick }) => {
  let _to = to
  // mdx pass url with href
  if (!_to && href) {
    _to = href
  }

  if (isExternalLink(_to) === false) {
    return (
      <GatsbyLink to={_to} title={title}>
        {children}
      </GatsbyLink>
    )
  }

  return (
    <a href={_to} title={title} onClick={onClick} target="_blank" rel="noreferrer">
      {children}
    </a>
  )
}
