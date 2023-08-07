import Link from 'next/link'

import { Container } from '@/components/Container'
import { EpisodePlayButton } from '@/components/EpisodePlayButton'
import { FormattedDate } from '@/components/FormattedDate'
import { PauseIcon, PlayIcon } from '@/components/Icons'
import { allPodcasts } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'

type EpisodeEntryProps = {
  episode: (typeof allPodcasts)[0]
}

async function EpisodeEntry({ episode }: EpisodeEntryProps) {
  let date = new Date(episode.publicationDate)

  return (
    <article
      aria-labelledby={`episode-${episode._id}-title`}
      className="py-10 sm:py-12"
    >
      <Container>
        <div className="flex flex-col items-start">
          <h2
            id={`episode-${episode._id}-title`}
            className="mt-2 text-lg font-bold text-white"
          >
            <Link href={`/${episode.slug}`}>{episode.title}</Link>
          </h2>
          <FormattedDate
            date={date}
            className="order-first font-mono text-sm leading-7 text-accent-gray"
          />
          <p className="mt-1 text-base leading-7 text-light-gray">
            {episode.description}
          </p>
          <div className="mt-4 flex items-center gap-4">
            <EpisodePlayButton
              episode={episode}
              className="flex items-center gap-x-3 text-sm font-bold leading-6 text-accent-red hover:text-accent-red active:text-pink-900"
              playing={
                <>
                  <PauseIcon className="h-2.5 w-2.5 fill-current" />
                  <span aria-hidden="true">Écouter</span>
                </>
              }
              paused={
                <>
                  <PlayIcon className="h-2.5 w-2.5 fill-current" />
                  <span aria-hidden="true">Écouter</span>
                </>
              }
            />
            <span
              aria-hidden="true"
              className="text-sm font-bold text-slate-400"
            >
              /
            </span>
            <Link
              href={`/${episode.slug}`}
              className="flex items-center text-sm font-bold leading-6 text-accent-red hover:text-accent-red active:text-pink-900"
              aria-label={`Show notes for episode ${episode.title}`}
            >
              Lire les notes
            </Link>
          </div>
        </div>
      </Container>
    </article>
  )
}

export default async function Home() {
  const episodes = allPodcasts.sort((a, b) =>
    compareDesc(new Date(a.publicationDate), new Date(b.publicationDate))
  )

  return (
    <div className="pb-12 pt-16 sm:pb-4 lg:pt-12">
      <Container>
        <h1 className="text-2xl font-bold leading-7 text-white">
          Épisodes du podcast
        </h1>
      </Container>
      <div className="divide-y divide-border-dark border-border-dark sm:mt-4 lg:mt-8 lg:border-t lg:border-border-dark">
        {episodes?.map((episode) => (
          <EpisodeEntry key={episode.slug} episode={episode} />
        ))}
      </div>
    </div>
  )
}
