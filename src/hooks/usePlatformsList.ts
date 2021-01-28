import { graphql, useStaticQuery } from 'gatsby'

export const usePlatformsList = () =>
  useStaticQuery(graphql`
    query Repository {
      allDataYaml(filter: { fields: { type: { eq: "platforms" } } }) {
        edges {
          node {
            url
            name
            id
            image {
              publicURL
              childImageSharp {
                fixed(width: 50, quality: 100) {
                  ...GatsbyImageSharpFixed_withWebp
                }
              }
            }
          }
        }
      }
    }
  `)
