const config = {
  siteTitle: "Erreur 200", // Site title.
  siteTitleShort: "Erreur 200", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Erreur 200", // Alternative site title for SEO.
  siteLogo: "/logos/erreur-200.png", // Logo used for SEO and manifest.
  siteUrl: "https://erreur200.com", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "Podcast des développeurs web francophones", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteRssTitle: "Erreur 200 - Podcast des développeurs web", // Title of the RSS feed
  googleAnalyticsID: "G-1K83YYJLKD",
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  postsPerPage: 9999, // Amount of posts displayed per listing page.
  userName: "Erreur 200", // Username to display in the author segment.
  userEmail: "info@erreur200.com", // Email used for RSS feed's author segment
  userTwitter: "erreur200", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Toronto, Canada", // User location to display in the author segment.
  userAvatar: "https://erreur200.com/logos/erreur-200.png", // User avatar to display in the author segment.
  userDescription: "Erreur 200 est un podcast pour les développeurs web du monde francophone.",
  copyright: "Tous droits réservés © 2021 Erreur 200", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0", // Used for setting manifest background color.
  s3bucket: 'https://erreur200.s3.eu-west-3.amazonaws.com/'
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
