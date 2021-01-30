import React from 'react'

import { Link } from 'gatsby'

import { IPodcastListNode } from '@/hooks'

import { LinkCustom } from '../LinkCustom'
import { Meta } from '../Meta'
import { PlayerButton } from '../PlayerButton'

export const Episode: React.FC<IPodcastListNode> = ({ node }) => {
  const { frontmatter, excerpt, fields, id } = node
  const { title, duration, publicationDate } = frontmatter

  const { slug } = fields

  return (
    <section className="flex my-6 flex-col py-5">
      <Meta publicationDate={publicationDate} />
      <h2 className="font-extrabold tracking-tight text-white text-3xl md:text-3xl sm:leading-5 hover:underline">
        <Link to={slug}>{title}</Link>
      </h2>

      <div className="flex flex-col items-center md:flex-row">
        <div className="my-2 px-2 md:w-1/6 w-full">
          <div className="my-1 px-1">
            <PlayerButton id={id} />
          </div>
        </div>

        <div className="my-2">
          <p className="mt-4 max-w-3xl mx-auto text-l sm:text-lg">{excerpt}</p>
          <div className="pt-3">
            <LinkCustom
              href={slug}
              className="flex leading-5 hover:underline text-tertiary align-middle"
            >
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-1"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16l4-4-4-4M8 12h8" />
              </svg>
              Lire les notes de l&apos;épisode
            </LinkCustom>
          </div>
        </div>
      </div>
    </section>
  )
}
