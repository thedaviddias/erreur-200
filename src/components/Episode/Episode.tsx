import React from 'react'

import { Link } from 'gatsby'

import { PlayerButton } from '../PlayerButton'

export const Episode = ({ node }) => {
  const { frontmatter, excerpt, fields, id } = node
  const { title, episodeNumber, duration, publicationDate } = frontmatter
  const d = new Date(publicationDate)
  const { slug } = fields

  return (
    <>
      <h2>
        <Link to={slug}>
          <span>
            {episodeNumber}
            {' - '}
            {title}
          </span>
        </Link>
      </h2>
      <p>{excerpt}</p>

      <PlayerButton id={id}></PlayerButton>
    </>
  )
}
