import React from 'react'

import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import { Seo } from '../../components/Seo'

const Page: React.FC = ({ data }) => {
  const { mdx } = data
  const { frontmatter } = mdx
  const { title, description, isHome } = frontmatter
  return (
    <>
      <Seo
        title={title}
        description={description && description !== '' ? description : mdx.excerpt}
        isDefault
      />
      {isHome && <h1 className="sr-only">Liste des épisodes du podcast Erreur 200</h1>}
      <MDXRenderer>{mdx.body}</MDXRenderer>{' '}
    </>
  )
}

export default Page

export const query = graphql`
  query PageQuery($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
        isHome
      }
      body
      excerpt(pruneLength: 200, truncate: true)
    }
  }
`
