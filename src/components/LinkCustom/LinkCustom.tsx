import React from 'react'

import GatsbyLink from 'gatsby-link'

import { isExternalLink } from '../../utils'

interface ILinkCustomProps {
  href?: string
  to?: string
  className?: string
  onClick?: any
  children: React.ReactNode
  title?: string
}

export const LinkCustom: React.FC<ILinkCustomProps> = ({
  children,
  href,
  to,
  title,
  className,
  onClick,
}) => {
  let _to = to
  // mdx pass url with href
  if (!_to && href) {
    _to = href
  }

  if (isExternalLink(_to) === false) {
    return (
      <GatsbyLink className={`${className || ''}`} to={_to} title={title}>
        {children}
      </GatsbyLink>
    )
  }

  return (
    <a
      href={_to}
      title={title}
      onClick={onClick}
      target="_blank"
      rel="noreferrer"
      className={`${className || ''}`}
    >
      {children}
    </a>
  )
}
