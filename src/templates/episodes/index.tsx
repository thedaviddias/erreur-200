import { url } from 'inspector'

import React, { useEffect, useContext } from 'react'

import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import { Meta } from '../../components/Meta'
import { PlayerEpisode } from '../../components/Player'
import { Seo } from '../../components/Seo'
import { Webmention } from '../../components/Webmention'
import { EpisodesContext } from '../../contexts/EpisodesContext'

// const getImgURL = ({ episodeNumber, title }) =>
//   `https://res.cloudinary.com/thedaviddias/image/upload/co_rgb:a700ff,g_east,l_text:mono.otf_120_letter_spacing_-5:%23${episodeNumber},x_54/co_rgb:a700ff,g_east,l_text:mono.otf_120_letter_spacing_-5:${cleanAndEncodeURI(
//     title
//   )},x_54,y_150,w_1000/v1597238012/FACEBOOK_-_OG_Card_RAW_eu5xdv.png`

const Episode = ({ data, location }) => {
  const { state, dispatch } = useContext(EpisodesContext)
  const { mdx, site } = data
  const { siteMetadata } = site
  const { frontmatter, id, fileAbsolutePath, fields } = mdx

  const { title, subtitle, episodeNumber, duration, publicationDate } = frontmatter
  const d = new Date(publicationDate)

  const url = new URL(`episodes/${fields.slug}`, siteMetadata.siteUrl).href || siteMetadata.siteUrl

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
      <Seo
        title={title}
        // image={getImgURL({ episodeNumber, title })}
        description={subtitle && subtitle !== '' ? subtitle : mdx.excerpt}
      />
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

        <PlayerEpisode id={id} title={title} duration={duration} />

        <div className="py-5 markdown p-summary e-content">
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </div>
      </article>

      <Webmention target={url} />
    </>
  )
}

export default Episode

export const query = graphql`
  query PodcastQuery($slug: String!) {
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
