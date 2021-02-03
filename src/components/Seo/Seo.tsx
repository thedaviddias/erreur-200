import React from 'react'

import getShareImage from '@jlengstorf/get-share-image'
import { Helmet } from 'react-helmet'

import { useSiteMetadata } from '../../hooks/useSiteMetadata'

interface ISeo {
  description: string
  title: string
  isDefault?: boolean
}

export const Seo: React.FC<ISeo> = ({ description, title, isDefault }) => {
  const { siteTitle, siteDescription, siteName, imageDefault } = useSiteMetadata()

  const _lang = 'fr'
  const _meta = []

  const image = isDefault
    ? imageDefault
    : getShareImage({
        title,
        cloudName: 'thedaviddias',
        imagePublicID: 'erreur-200/social-card-template.jpg',
        titleFont: 'fonts:OpenSansCondensed-Bold.ttf',
        titleExtraConfig: '_line_spacing_-15',
        textColor: 'ffffff',
        titleLeftOffset: 55,
        titleBottomOffset: 430,
        titleFontSize: 90,
        textAreaWidth: 850,
        imageHeight: 700,
      })

  return (
    <Helmet
      htmlAttributes={{
        lang: _lang,
      }}
      title={`${title || siteTitle} | ${siteName}`}
      meta={[
        ...[
          {
            name: `description`,
            content: description || siteDescription,
          },
          {
            property: `og:title`,
            content: title || siteTitle,
          },
          {
            property: `og:description`,
            content: description || siteDescription,
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
            content: title || siteTitle,
          },
          {
            name: `twitter:description`,
            content: description || siteDescription,
          },
        ],
        ..._meta,
      ]}
    ></Helmet>
  )
}
