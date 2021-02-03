const config = {
  siteTitle: "Erreur 200", // Site title.
  siteTitleShort: "Erreur 200", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Erreur 200", // Alternative site title for SEO.
  siteName: "Erreur 200", // Site name.
  siteLogo: "/assets/logo-erreur-200-name.png", // Logo used for SEO and manifest.
  siteUrl: process.env.ROOT_URL || "https://erreur200.com", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "Erreur 200 est un podcast dédié aux gens qui font le web. Animé par deux développeurs français, l'un vivant au Canada, l'autre en Angleterre, nous échangeons sur le web d'aujourd'hui et de demain. ", // Website description used for RSS feeds/meta description tag.
  googleAnalyticsID: "G-1K83YYJLKD",
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  userName: "Erreur 200", // Username to display in the author segment.
  userEmail: "info@erreur200.com", // Email used for RSS feed's author segment
  userTwitter: "erreur200", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Toronto, Canada", // User location to display in the author segment.
  userAvatar: "https://erreur200.com/logos/erreur-200.png", // User avatar to display in the author segment.
  userDescription: "Erreur 200 est un podcast pour les développeurs web du monde francophone.",
  copyright: "Erreur 200 © 2021", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#b12518ff", // Used for setting manifest and progress theme colors.
  backgroundColor: "#1a2940ff", // Used for setting manifest background color.
  imageDefault: "https://res.cloudinary.com/thedaviddias/image/upload/v1612027685/erreur-200/erreur-200-podcast-artwork.jpg",
  s3bucket: 'https://erreur200.s3.eu-west-3.amazonaws.com/',
  githubRepo: 'https://github.com/thedaviddias/erreur-200',
  formspreeUrl: 'https://formspree.io/f/xeqpdqqa',
  recaptchaSiteKeyV2: '6Lc7BEMaAAAAAEcM_2xtfR7hDvytXT8osD8Jxdjm'
};

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

module.exports = config;
