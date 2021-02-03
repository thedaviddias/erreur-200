import { graphql, useStaticQuery } from 'gatsby'

export const useHostsList = () =>
  useStaticQuery(graphql`
    query Hosts {
      hosts: allDataYaml(
        filter: { fields: { type: { eq: "hosts" } }, name: { regex: "/(David|Jean-Rémy)/" } }
      ) {
        edges {
          node {
            twitter
            website
            name
            id
            image {
              publicURL
              childImageSharp {
                fixed(width: 80, quality: 100) {
                  ...GatsbyImageSharpFixed_withWebp
                }
              }
            }
          }
        }
      }
    }
  `)
