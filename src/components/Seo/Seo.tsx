import React from 'react'

import { Helmet } from 'react-helmet'

import { useSiteMetadata } from '../../hooks/useSiteMetadata'

export const Seo = ({ description, title, image }) => {
  const { siteTitle, siteDescription, siteName, imageDefault } = useSiteMetadata()

  const _lang = 'fr'
  const _meta = []

  // const socialImage = getShareImage({
  //   title: blogPost.title,
  //   tagline: blogPost.tags.map(tag => `#${tag}`).join(' '),
  //   cloudName: 'jlengstorf',
  //   imagePublicID: 'lwj/blog-post-card',
  //   titleFont: 'lwj-title.otf',
  //   titleExtraConfig: '_line_spacing_-10',
  //   taglineFont: 'lwj-tagline.otf',
  //   textColor: '232129',
  // });

  // https://github.com/jlengstorf/learnwithjason.dev/blob/070468828e8c758d150a8d573fd471d786278243/packages/%40jlengstorf/gatsby-theme-code-blog/src/gatsby-theme-blog-core/components/post.js#L55-L64

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
