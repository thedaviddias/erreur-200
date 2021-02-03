import { graphql, useStaticQuery } from 'gatsby'

interface IUseSiteMetadata {
  siteTitle: string
  siteTitleShort: string
  siteTitleAlt: string
  siteName: string
  siteLogo: string
  siteUrl: string
  pathPrefix: string
  siteDescription: string
  googleAnalyticsID: string
  dateFromFormat: string
  dateFormat: string
  userName: string
  userEmail: string
  userTwitter: string
  userLocation: string
  userAvatar: string
  userDescription: string
  copyright: string
  themeColor: string
  backgroundColor: string
  s3bucket: string
  githubRepo: string
  imageDefault: string
  formspreeUrl: string
  recaptchaSiteKeyV2: string
}

export const useSiteMetadata = (): IUseSiteMetadata => {
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          siteTitle
          siteTitleShort
          siteTitleAlt
          siteName
          siteLogo
          siteUrl
          pathPrefix
          siteDescription
          googleAnalyticsID
          dateFromFormat
          dateFormat
          userName
          userEmail
          userTwitter
          userLocation
          userAvatar
          userDescription
          copyright
          themeColor
          backgroundColor
          s3bucket
          githubRepo
          imageDefault
          formspreeUrl
          recaptchaSiteKeyV2
        }
      }
    }
  `)
  return site.siteMetadata
}
