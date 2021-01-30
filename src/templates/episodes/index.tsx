import React, { useEffect, useContext } from 'react'

import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import { LinkCustom } from '../../components/LinkCustom'
import { Meta } from '../../components/Meta'
import { PlayerEpisode } from '../../components/Player'
import { Seo } from '../../components/Seo'
import { EpisodesContext } from '../../contexts/EpisodesContext'

const Episode: React.FC = ({ data }) => {
  const { state, dispatch } = useContext(EpisodesContext)
  const { mdx } = data
  const { frontmatter, id, fileAbsolutePath } = mdx

  const { title, subtitle, duration, publicationDate } = frontmatter
  const d = new Date(publicationDate)

  useEffect(() => {
    if (!state.podcastEnter) {
      dispatch({
        type: 'setPodcastEnter',
        payload: id,
      })
    }
  }, [id, state, dispatch])

  return (
    <>
      <Seo title={title} description={subtitle && subtitle !== '' ? subtitle : mdx.excerpt} />
      <article className="h-card">
        <header className="pb-4">
          <Meta publicationDate={publicationDate} />
          <h1 className="text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl p-name">
            {title}
          </h1>

          <time
            className="sr-only dt-published"
            itemProp="datepublished"
            dateTime={publicationDate}
          >
            {new Date(publicationDate).toISOString().replace('Z', '') + '+01:00'}
          </time>
        </header>

        {duration !== 0 && (
          <PlayerEpisode
            id={id}
            title={title}
            duration={duration}
            fileAbsolutePath={fileAbsolutePath}
          />
        )}

        <div className="py-5 markdown p-summary e-content">
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </div>
      </article>

      <hr />

      <div className="markdown">
        <h2>Venez échanger avec la communauté!</h2>

        <p>
          Rejoignez nous sur <LinkCustom to="#">Discord</LinkCustom> pour échanger davantage sur le
          sujet de ce podcast.
        </p>
      </div>
    </>
  )
}

export default Episode

export const query = graphql`
  query EpisodeQuery($slug: String!) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      fileAbsolutePath
      frontmatter {
        title
        subtitle
        publicationDate
        url
        duration
        season
        episodeNumber
        size
      }
      id
      body
      excerpt(pruneLength: 270, truncate: true)
      fields {
        slug
      }
    }
  }
`
