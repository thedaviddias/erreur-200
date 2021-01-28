import { graphql, useStaticQuery } from 'gatsby'

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          titleDefault
          siteName
          imageDefault
          descriptionDefault
        }
      }
    }
  `)
  return site
}
