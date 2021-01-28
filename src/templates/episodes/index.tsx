import React, { useEffect, useContext } from 'react'

import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import { PlayerButton } from '../../components/PlayerButton'
import { Seo } from '../../components/Seo'
import { EpisodesContext } from '../../contexts/EpisodesContext'

const getImgURL = ({ episodeNumber, title }) =>
  `https://res.cloudinary.com/thedaviddias/image/upload/co_rgb:a700ff,g_east,l_text:mono.otf_120_letter_spacing_-5:%23${episodeNumber},x_54/co_rgb:a700ff,g_east,l_text:mono.otf_120_letter_spacing_-5:${cleanAndEncodeURI(
    title
  )},x_54,y_150,w_1000/v1597238012/FACEBOOK_-_OG_Card_RAW_eu5xdv.png`

const Episode = ({ data, location }) => {
  const { state, dispatch } = useContext(EpisodesContext)
  const { mdx } = data
  const { frontmatter, id, fileAbsolutePath } = mdx

  const { title, subtitle, episodeNumber, duration, publicationDate } = frontmatter
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
      <Seo
        title={title}
        image={getImgURL({ episodeNumber, title })}
        description={subtitle && subtitle !== '' ? subtitle : mdx.excerpt}
      />
      <h1>
        <span>
          {episodeNumber}
          {' - '}
          {title}
        </span>
      </h1>

      <MDXRenderer>{mdx.body}</MDXRenderer>

      <PlayerButton id={id} />
    </>
  )
}

export default Episode

export const query = graphql`
  query PodcastQuery($slug: String!) {
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
    }
  }
`
