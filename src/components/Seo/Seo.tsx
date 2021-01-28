import React from 'react'

import { Helmet } from 'react-helmet'

import { useSiteMetadata } from '../../hooks/useSiteMetadata'

export const Seo = ({ description, title, image }) => {
  const { siteMetadata } = useSiteMetadata()
  const { titleDefault, descriptionDefault, siteName, imageDefault } = siteMetadata
  const _lang = 'fr'
  const _meta = []

  return (
    <Helmet
      htmlAttributes={{
        lang: _lang,
      }}
      title={`${title || titleDefault} | ${siteName}`}
      meta={[
        ...[
          {
            name: `description`,
            content: description || descriptionDefault,
          },
          {
            property: `og:title`,
            content: title || titleDefault,
          },
          {
            property: `og:description`,
            content: description || descriptionDefault,
          },
          {
            property: `og:type`,
            content: `website`,
          },
          {
            name: `twitter:card`,
            content: `summary_large_image`,
          },
          {
            name: `image`,
            content: image || imageDefault,
          },
          {
            property: `og:image`,
            content: image || imageDefault,
          },
          {
            property: `twitter:image`,
            content: image || imageDefault,
          },
          //     // {
          //     //   name: `twitter:creator`,
          //     //   content: author,
          //     // },
          {
            name: `twitter:title`,
            content: title || titleDefault,
          },
          {
            name: `twitter:description`,
            content: description || descriptionDefault,
          },
        ],
        ..._meta,
      ]}
    ></Helmet>
  )
}
