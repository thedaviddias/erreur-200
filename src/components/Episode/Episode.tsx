import React from 'react'

import { Link } from 'gatsby'

import { secondToTime } from '../../utils/index'
import { PlayerButton } from '../PlayerButton'

const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}

export const Episode = ({ node }) => {
  const { frontmatter, excerpt, fields, id } = node
  const { title, episodeNumber, duration, publicationDate } = frontmatter
  const d = new Date(publicationDate)
  const { slug } = fields

  return (
    <div className="flex my-6 flex-col">
      <div className="flex flex-row items-center">
        <h2 className="text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <Link to={slug}>
            <span>
              Ep. {episodeNumber}
              {' : '}
              {title}
            </span>
          </Link>
        </h2>
        <strong className="ml-auto">{d.toLocaleDateString('fr-FR', options)}</strong>
      </div>

      <div className="flex flex-row">
        <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">{excerpt}</p>
        <div>
          <PlayerButton id={id} />
          <span>
            {`Épisode "${title}"`}
            <br />
            {`Durée : ${secondToTime(duration)}`}
          </span>
        </div>
      </div>
    </div>
  )
}
