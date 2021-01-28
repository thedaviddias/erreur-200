const urljoin = require("url-join");
const config = require("./data/site-config");
const podcastInfo = require('./data/podcast-infos');

module.exports = {
  pathPrefix: config.pathPrefix === "" ? "/" : config.pathPrefix,
  siteMetadata: {
    ...config,
    siteUrl: urljoin(config.siteUrl, config.pathPrefix),
    siteName: config.siteTitle,
    titleDefault: config.siteTitleShort,
    author: '',
    descriptionDefault: config.siteDescription,
    imageDefault:
    'https://res.cloudinary.com/doubleslash/image/upload/v1597260128/doubleSlashDefault_kyl8s9.png',
    rssMetadata: {
      site_url: urljoin(config.siteUrl, config.pathPrefix),
      feed_url: urljoin(config.siteUrl, config.pathPrefix, config.siteRss),
      title: config.siteTitle,
      description: config.siteDescription,
      // image_url: `${urljoin(
      //   config.siteUrl,
      //   config.pathPrefix
      // )}/logos/code_chefs_square512.png`,
      copyright: config.copyright
    }
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        defaultLang: 'fr'
      },
    },
    {
      resolve: `gatsby-plugin-podcast-feed-mdx`,
      options: podcastInfo
    },
    {
      resolve: 'gatsby-plugin-preconnect',
      options: {
        domains: [
          'https://cdn.plyr.io',
        ],
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        modulePath: `${__dirname}/src/cms/index.js`,
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-yaml`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-external-links`,
            options: {
              target: `_blank`,
              rel: `noopener`,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          config.googleAnalyticsID,
        ]
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        resolveEnv: () => process.env.GATSBY_ENV,
        env: {
          production: {
            policy: [
              {
                userAgent: '*',
                allow: '/',
                disallow: ['/tag'],
              },
            ],
            sitemap: `${config.siteUrl}/sitemap.xml`,
            host: config.siteUrl,
          },
          'branch-deploy': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null,
          },
          'deploy-preview': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null,
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/*`, `/episodes/*`],
      },
    }
  ],
}
