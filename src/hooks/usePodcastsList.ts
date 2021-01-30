import { graphql, useStaticQuery } from 'gatsby'

export interface IPodcastListNode {
  node: {
    id: string
    excerpt: string
    fields: {
      slug: string
    }
    frontmatter: {
      title: string
      subtitle: string
      duration: number
      url: string
      season: number
      episodeNumber: number
      publicationDate: string
      size: number
    }
  }
}

interface IUsePodcastsList {
  podcastEpisodes: {
    edges: IPodcastListNode
  }
}

export const usePodcastsList = (): IUsePodcastsList =>
  useStaticQuery(graphql`
    query PodcastList {
      podcastEpisodes: allMdx(
        filter: { frontmatter: { active: { eq: true } }, fileAbsolutePath: { regex: "/episodes/" } }
        sort: { fields: frontmatter___publicationDate, order: DESC }
      ) {
        edges {
          node {
            id
            excerpt(pruneLength: 300)
            fields {
              slug
            }
            frontmatter {
              title
              subtitle
              duration
              url
              season
              episodeNumber
              publicationDate
              size
            }
          }
        }
      }
    }
  `)
