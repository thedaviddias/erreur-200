import { allPodcasts } from 'contentlayer/generated'
import { Podcast } from 'podcast'

export async function GET() {
  const episodes = allPodcasts
  const siteURL = 'https://erreur200.com/'

  const feedFr = new Podcast({
    title: `Erreur 200`,
    description: `Erreur 200 est un podcast dédié aux gens qui font le web. Animé par deux développeurs français, l'un vivant au Canada, l'autre en Angleterre, nous échangeons sur le web d'aujourd'hui et de demain. Retrouvez-nous pour discuter de code, d'accessibilité, des frameworks JavaScript, de l'UX et plein d'autres sujets passionnants. Nous laissons parfois la parole à d'autres personnes qui partagent la même passion et qui nous parlerons de leurs échecs et leurs succès.`,
    siteUrl: `https://erreur200.com/`,
    imageUrl: `https://erreur200.com/images/erreur-200-podcast-artwork.jpg`,
    feedUrl: `https://erreur200.com/rss.xml`,
    language: `fr-FR`,
    copyright: `Copyright © 2023 Erreur 200`,
    author: `David Dias & Jean-Rémy Duboc`,
    webMaster: 'thedaviddias@gmail.com (David Dias)',
    managingEditor: `info@erreur200.com (Erreur 200)`,
    pubDate: `February 01, 2021 00:00:00 GMT`,
    categories: ['Technology', 'News', 'Business'],
    ttl: 60,
    itunesCategory: [
      {
        text: 'Technology',
      },
      {
        text: 'News',
        subcats: [
          {
            text: 'Tech News',
          },
        ],
      },
      {
        text: 'Business',
        subcats: [
          {
            text: 'Careers',
          },
        ],
      },
    ],
    itunesAuthor: 'David Dias & Jean-Rémy Duboc',
    itunesSubtitle: `Le podcast des gens qui font le web`,
    itunesSummary: `Le podcast dédié au web et aux gens qui tous les jours construisent Internet`,
    itunesOwner: { name: 'Erreur 200', email: 'info@erreur200.com' },
    itunesExplicit: false,
    namespaces: {
      'podcast': true,
    },
    customNamespaces: {
      'googleplay': 'http://www.google.com/schemas/play-podcasts/1.0',
    },
  })

  for (const episode of episodes) {
    const url = `${siteURL}${episode.slug}`

    feedFr.addItem({
      guid: episode.guid,
      title: episode.title,
      description: episode.description,
      url,
      date: new Date(episode.publicationDate),
      itunesAuthor: episode.author,
      itunesDuration: episode.duration,
      itunesSeason: episode.season,
      itunesEpisode: episode.episodeNumber,
      itunesEpisodeType: episode.episodeType,
      itunesImage: 'https://erreur200.com/images/erreur-200-podcast-artwork.jpg',
      content: episode.body.html,
      enclosure : {url: episode.url, type: 'audio/mpeg', size: episode.size}
    })
  }

  return new Response(feedFr.buildXml(), {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
