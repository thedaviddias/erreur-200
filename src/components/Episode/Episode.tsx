import React from 'react'

import { Link } from 'gatsby'
import { FiArrowRightCircle } from 'react-icons/fi'

import { LinkCustom } from '../LinkCustom'
import { Meta } from '../Meta'
import { PlayerButton } from '../PlayerButton'

export const Episode: React.FC = ({ node }) => {
  const { frontmatter, excerpt, fields, id } = node
  const { title, duration, publicationDate } = frontmatter

  const { slug } = fields

  return (
    <section className="flex my-6 flex-col py-5">
      <Meta publicationDate={publicationDate} />
      <h2 className="leading-5 font-extrabold tracking-tight text-white text-4xl sm:text-3xl hover:underline">
        <Link to={slug}>{title}</Link>
      </h2>

      <div className="flex md:flex-row items-center flex-column">
        <div className="my-2 px-2 md:w-1/6 w-full">
          <div className="my-1 px-1">
            <PlayerButton id={id} />
          </div>
        </div>

        <div className="my-2">
          <p className="mt-4 max-w-3xl mx-auto text-lg">{excerpt}</p>
          <div className="pt-3">
            <LinkCustom
              href={slug}
              className="text-lg flex leading-5 hover:underline text-tertiary"
            >
              <FiArrowRightCircle className="react-icons mr-1" /> Lire les notes de l&apos;épisode
            </LinkCustom>
          </div>
        </div>
      </div>
    </section>
  )
}
