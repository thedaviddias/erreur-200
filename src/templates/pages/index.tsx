import React from 'react'

import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import { Seo } from '../../components/Seo'

const Page = ({ data, location }) => {
  const { mdx } = data
  const { frontmatter } = mdx
  const { title, description, isHome } = frontmatter
  return (
    <>
      <Seo
        title={title}
        description={description && description !== '' ? description : mdx.excerpt}
      />
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
