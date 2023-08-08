import { Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { AboutSection } from '@/components/AboutSection'
import { AudioProvider } from '@/components/AudioProvider'
import { AudioPlayer } from '@/components/player/AudioPlayer'
import posterImage from '@/public/images/logo-erreur-200-home.png'
import {
  ApplePodcastIcon,
  OvercastIcon,
  RSSIcon,
  PersonIcon,
  SpotifyIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/Icons'
import { HOSTS } from '@/constants'

import { ReactNode } from 'react'

type PodcastLink = {
  label: string
  Icon: (props: { className?: string }) => JSX.Element
  url: string
}

const podcastLinks: PodcastLink[] = [
  {
    label: 'Spotify',
    Icon: SpotifyIcon,
    url: 'https://open.spotify.com/show/5vlkaq2mJ3niIkkmUcrXfS',
  },
  {
    label: 'Apple Podcast',
    Icon: ApplePodcastIcon,
    url: 'https://apple.co/2NfLQ0b',
  },
  {
    label: 'Overcast',
    Icon: OvercastIcon,
    url: 'https://overcast.fm/itunes1552950061/erreur-200',
  },
  {
    label: 'RSS Feed',
    Icon: RSSIcon,
    url: 'https://erreur200.com/rss.xml',
  },
]

const socialLinks: PodcastLink[] = [
  {
    label: 'X (Twitter)',
    Icon: TwitterIcon,
    url: 'https://twitter.com/erreur200radio',
  },
  {
    label: 'LinkedIn',
    Icon: LinkedInIcon,
    url: 'https://www.linkedin.com/company/82682070/admin/feed/posts/',
  }
]

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <AudioProvider>
      <header className="bg-primary-dark lg:fixed lg:inset-y-0 lg:left-0 lg:flex lg:w-112 lg:items-start lg:overflow-y-auto xl:w-120">
        <div className="hidden lg:sticky lg:top-0 lg:flex lg:w-16 lg:flex-none lg:items-center lg:whitespace-nowrap lg:py-12 lg:text-sm lg:leading-7 lg:[writing-mode:vertical-rl]">
          <span className="font-mono text-accent-gray">Animé par</span>
          <span className="mt-6 flex gap-6 font-bold text-white">
            {HOSTS.map((host, hostIndex) => (
              <Fragment key={host}>
                {hostIndex !== 0 && (
                  <span aria-hidden="true" className="text-slate-400">
                    /
                  </span>
                )}
                {host}
              </Fragment>
            ))}
          </span>
        </div>
        <div className="relative mx-auto px-4 pb-4 pt-10 sm:px-6 md:max-w-2xl md:px-4 lg:min-h-full lg:flex-auto lg:px-8 lg:py-5 xl:px-10">
          <Link
            href="/"
            className="relative mx-auto block w-48 sm:w-64 lg:w-auto p-5"
            aria-label="Page d'accueil"
          >
            <Image
              className="w-full"
              src={posterImage}
              alt=""
              sizes="(min-width: 1024px) 20rem, (min-width: 640px) 16rem, 12rem"
              priority
            />
          </Link>
          <div className="mt-5 text-center lg:mt-5 lg:text-left">
            <p className="text-xl font-bold text-white">
              <Link href="/">Erreur 200</Link>
            </p>
            <p className="mt-1 text-lg font-medium leading-8 text-light-gray">
              Le podcast des gens qui font le web
            </p>
          </div>
          <AboutSection className="mt-12 hidden lg:block" />
          <section className="mt-10 lg:mt-12">
            <h2 className="sr-only flex items-center font-mono text-sm font-medium leading-7 text-white lg:not-sr-only">
              <span>Où nous écoutez!</span>
            </h2>
            <div className="h-px bg-gradient-to-r from-slate-200/0 via-slate-200 to-slate-200/0 lg:hidden" />
            <ul
              role="list"
              className="mt-4 flex justify-center gap-10 text-base font-medium leading-7 text-light-gray sm:gap-8 lg:flex-col lg:gap-4"
            >
              {podcastLinks.map(({ label, Icon, url }) => (
                <li key={label} className="flex">
                  <Link
                    href={url}
                    className="group flex items-center"
                    aria-label={label}
                  >
                    <Icon className="h-8 w-8 fill-slate-400 group-hover:fill-slate-600" />
                    <span className="hidden sm:ml-3 sm:block">{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
          <section className="mt-5 lg:mt-12">
            <h2 className="sr-only flex items-center font-mono text-sm font-medium leading-7 text-white lg:not-sr-only">
              <span>Venez échanger!</span>
            </h2>
            <ul
              role="list"
              className="mt-4 flex justify-center gap-10 text-base font-medium leading-7 text-light-gray sm:gap-8 lg:flex-col lg:gap-4"
            >
              {socialLinks.map(({ label, Icon, url }) => (
                <li key={label} className="flex">
                  <Link
                    href={url}
                    className="group flex items-center"
                    aria-label={label}
                  >
                    <Icon className="h-8 w-8 fill-slate-400 group-hover:fill-slate-600" />
                    <span className="hidden sm:ml-3 sm:block">{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </header>
      <main className="border-t border-border-dark lg:relative lg:mb-28 lg:ml-112 lg:border-t-0 xl:ml-120">
        <div className="relative">{children}</div>
      </main>
      <footer className="border-t border-border-dark bg-primary-dark py-10 pb-20 sm:py-16 sm:pb-32 lg:hidden">
        <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4">
          <AboutSection />
          <h2 className="mt-8 flex items-center font-mono text-sm font-medium leading-7 text-white">
            <PersonIcon className="h-3 w-auto fill-slate-300" />
            <span className="ml-2.5">Hosted by</span>
          </h2>
          <div className="mt-2 flex gap-6 text-sm font-bold leading-7 text-white">
            {HOSTS.map((host, hostIndex) => (
              <Fragment key={host}>
                {hostIndex !== 0 && (
                  <span aria-hidden="true" className="text-slate-400">
                    /
                  </span>
                )}
                {host}
              </Fragment>
            ))}
          </div>
        </div>
      </footer>
      <div className="fixed inset-x-0 bottom-0 z-10 lg:left-112 xl:left-120">
        <AudioPlayer />
      </div>
    </AudioProvider>
  )
}
