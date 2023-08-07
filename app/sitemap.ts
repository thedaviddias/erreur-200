import { allPodcasts } from 'contentlayer/generated'

export default async function sitemap() {
  const episodes = allPodcasts.map((episode) => ({
    url: `https://erreur200.com/${episode.slug}`,
    lastModified: episode.publicationDate,
  }))

  const routes = [''].map((route) => ({
    url: `https://erreur200.com${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...episodes]
}
