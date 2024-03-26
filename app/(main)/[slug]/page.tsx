import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

import { Container } from '@/components/Container'
import { EpisodePlayButton } from '@/components/EpisodePlayButton'
import { FormattedDate } from '@/components/FormattedDate'
import { PauseIcon } from '@/components/PauseIcon'
import { PlayIcon } from '@/components/PlayIcon'

import { allPodcasts } from 'contentlayer/generated'

export const generateStaticParams = async () =>
  allPodcasts.map((episode) => ({ slug: episode._raw.flattenedPath }))

export const generateMetadata = ({
  params,
}: {
  params: { slug: string }
}): Metadata => {
  const episode = allPodcasts.find((episode) => episode.slug === params.slug)

  if (!episode) {
    notFound()
  }

  return {
    title: episode.title,
    description: episode.description,
    openGraph: {
      type: 'article',
      publishedTime: episode.publicationDate,
      authors: ['David Dias', 'Jean-Rémy Duboc'],
      images: [
        {
          url: `/api/og?title=${episode.title}`,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      title: episode.title,
      card: 'summary_large_image',
      creator: '@erreur200radio',
      images: `/api/og?title=${episode.title}`,
    },
  }
}

export default async function Episode({
  params,
}: {
  params: { slug: string }
}) {
  const episode = allPodcasts.find((episode) => episode.slug === params.slug)

  let date = episode && new Date(episode.publicationDate)

  return (
    <article className="py-16 lg:py-36">
      <Container>
        <header className="flex flex-col">
          <div className="flex items-center gap-6">
            <EpisodePlayButton
              episode={episode}
              className="group relative flex h-18 w-18 flex-shrink-0 items-center justify-center rounded-full bg-slate-700 hover:bg-slate-900 focus:outline-none focus:ring focus:ring-slate-700 focus:ring-offset-4"
              playing={
                <PauseIcon className="h-9 w-9 fill-white group-active:fill-white/80" />
              }
              paused={
                <PlayIcon className="h-9 w-9 fill-white group-active:fill-white/80" />
              }
            />
            <div className="flex flex-col">
              <h1 className="mt-2 text-4xl font-bold text-white">
                {episode?.title}
              </h1>
              <FormattedDate
                date={date}
                className="order-first font-mono text-sm leading-7 text-accent-gray"
              />
            </div>
          </div>
          <p className="ml-24 mt-3 text-lg font-medium leading-8 text-light-gray">
            {episode?.description}
          </p>
        </header>
        <hr className="my-12 border-gray-200" />
        {episode?.body.html && (
          <div
            className="prose prose-slate mt-14 text-light-gray [&>h2]:mt-12 [&>h2]:flex [&>h2]:items-center [&>h2]:font-mono [&>h2]:text-sm [&>h2]:font-medium [&>h2]:leading-7 [&>h2]:text-white [&>h2]:before:mr-3 [&>h2]:before:h-3 [&>h2]:before:rounded-r-full [&>ul]:mt-6 [&>ul]:list-['\2013\20'] [&>ul]:pl-5 [&>h3]:font-mono [&>h3]:text-white [&>h3]:before:mr-3 [&>h3]:before:h-3"
            dangerouslySetInnerHTML={{ __html: episode.body.html }}
          />
        )}
      </Container>
    </article>
  )
}
