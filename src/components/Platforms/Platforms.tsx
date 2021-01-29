import React from 'react'

import { v4 as uuid } from 'uuid'

import { LinkCustom } from '..'

export const Platforms: React.FC = () => {
  const rssUrl = 'https://erreur200.com/rss.xml'
  const applePodcastUrl = 'https://podcasts.apple.com/'
  const spotifyUrl = 'https://open.spotify.com/'
  const googlePodcastUrl = 'https://podcasts.google.com/'
  const overcastUrl = 'https://overcast.fm/'
  const youtubeUrl = 'https://www.youtube.com/'
  const discordUrl = 'https://discord.gg/szWshKqYDj'

  return (
    <ul className="flex flex-wrap py-5 mt-4">
      <li className="mx-2">
        <LinkCustom key={uuid} to={rssUrl} title="RSS">
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6 fill-current text-white hover:text-tertiary"
            height="24"
            width="24"
          >
            <path d="M19.199 24C19.199 13.467 10.533 4.8 0 4.8V0c13.165 0 24 10.835 24 24h-4.801zM3.291 17.415a3.3 3.3 0 013.293 3.295A3.303 3.303 0 013.283 24C1.47 24 0 22.526 0 20.71s1.475-3.294 3.291-3.295zM15.909 24h-4.665c0-6.169-5.075-11.245-11.244-11.245V8.09c8.727 0 15.909 7.184 15.909 15.91z" />
          </svg>
        </LinkCustom>
      </li>
      <li className="mx-2">
        <LinkCustom key={uuid} to={applePodcastUrl} title="Apple Podcasts">
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6 fill-current text-white hover:text-tertiary"
            height="24"
            width="24"
          >
            <path d="M5.34 0A5.328 5.328 0 000 5.34v13.32A5.328 5.328 0 005.34 24h13.32A5.328 5.328 0 0024 18.66V5.34A5.328 5.328 0 0018.66 0zm6.525 2.568c2.336 0 4.448.902 6.056 2.587 1.224 1.272 1.912 2.619 2.264 4.392.12.59.12 2.2.007 2.864a8.506 8.506 0 01-3.24 5.296c-.608.46-2.096 1.261-2.336 1.261-.088 0-.096-.091-.056-.46.072-.592.144-.715.48-.856.536-.224 1.448-.874 2.008-1.435a7.644 7.644 0 002.008-3.536c.208-.824.184-2.656-.048-3.504-.728-2.696-2.928-4.792-5.624-5.352-.784-.16-2.208-.16-3 0-2.728.56-4.984 2.76-5.672 5.528-.184.752-.184 2.584 0 3.336.456 1.832 1.64 3.512 3.192 4.512.304.2.672.408.824.472.336.144.408.264.472.856.04.36.03.464-.056.464-.056 0-.464-.176-.896-.384l-.04-.03c-2.472-1.216-4.056-3.274-4.632-6.012-.144-.706-.168-2.392-.03-3.04.36-1.74 1.048-3.1 2.192-4.304 1.648-1.737 3.768-2.656 6.128-2.656zm.134 2.81c.409.004.803.04 1.106.106 2.784.62 4.76 3.408 4.376 6.174-.152 1.114-.536 2.03-1.216 2.88-.336.43-1.152 1.15-1.296 1.15-.023 0-.048-.272-.048-.603v-.605l.416-.496c1.568-1.878 1.456-4.502-.256-6.224-.664-.67-1.432-1.064-2.424-1.246-.64-.118-.776-.118-1.448-.008-1.02.167-1.81.562-2.512 1.256-1.72 1.704-1.832 4.342-.264 6.222l.413.496v.608c0 .336-.027.608-.06.608-.03 0-.264-.16-.512-.36l-.034-.011c-.832-.664-1.568-1.842-1.872-2.997-.184-.698-.184-2.024.008-2.72.504-1.878 1.888-3.335 3.808-4.019.41-.145 1.133-.22 1.814-.211zm-.13 2.99c.31 0 .62.06.844.178a2.17 2.17 0 011.04 1.259c.464 1.578-1.208 2.96-2.72 2.254h-.015c-.712-.331-1.096-.956-1.104-1.77 0-.733.408-1.371 1.112-1.745.224-.117.534-.176.844-.176zm-.011 4.728c.988-.004 1.706.349 1.97.97.198.464.124 1.932-.218 4.302-.232 1.656-.36 2.074-.68 2.356-.44.39-1.064.498-1.656.288h-.003c-.716-.257-.87-.605-1.164-2.644-.341-2.37-.416-3.838-.218-4.302.262-.616.974-.966 1.97-.97z" />
          </svg>
        </LinkCustom>
      </li>
      <li className="mx-2">
        <LinkCustom key={uuid} to={spotifyUrl} title="Spotify">
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6 fill-current text-white hover:text-tertiary"
            height="24"
            width="24"
          >
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
          </svg>
        </LinkCustom>
      </li>
      <li className="mx-2">
        <LinkCustom key={uuid} to={googlePodcastUrl} title="Google Podcasts">
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6 fill-current text-white hover:text-tertiary"
            height="24"
            width="24"
          >
            <path d="M1.503 9.678c-.83 0-1.5.67-1.5 1.5v1.63a1.5 1.5 0 103 0v-1.63c0-.83-.67-1.5-1.5-1.5zm20.994 0c-.83 0-1.5.67-1.5 1.5v1.63a1.5 1.5 0 103 0v-1.63c0-.83-.67-1.5-1.5-1.5zM6.68 14.587c-.83 0-1.5.67-1.5 1.5v1.63a1.5 1.5 0 103 0v-1.62c0-.83-.67-1.5-1.5-1.5zm0-9.817c-.83 0-1.5.67-1.5 1.5v5.357a1.5 1.5 0 003 0V6.258c0-.83-.67-1.5-1.5-1.5zm10.638 0c-.83 0-1.5.67-1.5 1.5v1.64a1.5 1.5 0 003 0V6.27c0-.83-.67-1.5-1.5-1.5zM12 0c-.83 0-1.5.67-1.5 1.5v1.63a1.5 1.5 0 103 0V1.5c0-.83-.67-1.499-1.5-1.499zm0 19.355c-.83 0-1.5.67-1.5 1.5v1.64a1.5 1.5 0 103 .01v-1.64c0-.82-.67-1.5-1.5-1.5zm5.319-8.457c-.83 0-1.5.68-1.5 1.5v5.328a1.5 1.5 0 003 0v-5.329c0-.83-.67-1.5-1.5-1.5zM12 6.128c-.83 0-1.5.68-1.5 1.5v8.728a1.5 1.5 0 003 0V7.638c0-.83-.67-1.5-1.5-1.5z" />
          </svg>
        </LinkCustom>
      </li>
      <li className="mx-2">
        <LinkCustom key={uuid} to={overcastUrl} title="Overcast">
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6 fill-current text-white hover:text-tertiary"
            height="24"
            width="24"
          >
            <path d="M12 24C5.389 24.018.017 18.671 0 12.061V12C0 5.35 5.351 0 12 0s12 5.35 12 12c0 6.649-5.351 12-12 12zm0-4.751l.9-.899-.9-3.45-.9 3.45.9.899zm-1.15-.05L10.4 20.9l1.05-1.052-.6-.649zm2.3 0l-.6.601 1.05 1.051-.45-1.652zm.85 3.102L12 20.3l-2 2.001c.65.1 1.3.199 2 .199s1.35-.05 2-.199zM12 1.5C6.201 1.5 1.5 6.201 1.5 12a10.447 10.447 0 007.051 9.899l2.25-8.35a1.947 1.947 0 01-.801-1.6c0-1.101.9-2.001 2-2.001s2 .9 2 2.001c0 .649-.301 1.2-.801 1.6l2.25 8.35A10.445 10.445 0 0022.5 12c0-5.799-4.701-10.5-10.5-10.5zm6.85 15.7a.774.774 0 01-1.049.15.68.68 0 01-.15-1.001s1.35-1.799 1.35-4.35-1.35-4.35-1.35-4.35a.68.68 0 01.151-1.001.774.774 0 011.049.15c.1.101 1.65 2.15 1.65 5.2S18.949 17.1 18.85 17.2zm-3.651-1.95c-.3-.3-.249-.85.051-1.15 0 0 .75-.799.75-2.1s-.75-2.051-.75-2.1c-.3-.301-.3-.801-.051-1.15a.69.69 0 011.051-.051C16.301 8.75 17.5 10 17.5 12s-1.199 3.25-1.25 3.301c-.301.299-.75.25-1.051-.051zm-6.398 0c-.301.301-.75.35-1.051.051C7.699 15.199 6.5 14 6.5 12s1.199-3.199 1.25-3.301c.301-.299.801-.299 1.051.051.3.3.249.85-.051 1.15 0 .049-.75.799-.75 2.1s.75 2.1.75 2.1c.3.3.351.799.051 1.15zm-2.602 2.101a.776.776 0 01-1.05-.15C5.051 17.1 3.5 15.05 3.5 12s1.551-5.1 1.649-5.2a.774.774 0 011.05-.15.68.68 0 01.151 1S5 9.449 5 12s1.35 4.35 1.35 4.35c.25.3.15.75-.151 1.001z" />
          </svg>
        </LinkCustom>
      </li>
      <li className="mx-2">
        <LinkCustom key={uuid} to={youtubeUrl} title="Youtube">
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6 fill-current text-white hover:text-tertiary"
            height="24"
            width="24"
          >
            <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
        </LinkCustom>
      </li>
      <li className="mx-2">
        <LinkCustom key={uuid} to={discordUrl} title="Discord">
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6 fill-current text-white hover:text-tertiary"
            height="24"
            width="24"
          >
            <path d="M20.222 0c1.406 0 2.54 1.137 2.607 2.475V24l-2.677-2.273-1.47-1.338-1.604-1.398.67 2.205H3.71c-1.402 0-2.54-1.065-2.54-2.476V2.48C1.17 1.142 2.31.003 3.715.003h16.5L20.222 0zm-6.118 5.683h-.03l-.202.2c2.073.6 3.076 1.537 3.076 1.537-1.336-.668-2.54-1.002-3.744-1.137-.87-.135-1.74-.064-2.475 0h-.2c-.47 0-1.47.2-2.81.735-.467.203-.735.336-.735.336s1.002-1.002 3.21-1.537l-.135-.135s-1.672-.064-3.477 1.27c0 0-1.805 3.144-1.805 7.02 0 0 1 1.74 3.743 1.806 0 0 .4-.533.805-1.002-1.54-.468-2.14-1.404-2.14-1.404s.134.066.335.2h.06c.03 0 .044.015.06.03v.006c.016.016.03.03.06.03.33.136.66.27.93.4a8.18 8.18 0 001.8.536c.93.135 1.996.2 3.21 0 .6-.135 1.2-.267 1.8-.535.39-.2.87-.4 1.397-.737 0 0-.6.936-2.205 1.404.33.466.795 1 .795 1 2.744-.06 3.81-1.8 3.87-1.726 0-3.87-1.815-7.02-1.815-7.02-1.635-1.214-3.165-1.26-3.435-1.26l.056-.02zm.168 4.413c.703 0 1.27.6 1.27 1.335 0 .74-.57 1.34-1.27 1.34-.7 0-1.27-.6-1.27-1.334.002-.74.573-1.338 1.27-1.338zm-4.543 0c.7 0 1.266.6 1.266 1.335 0 .74-.57 1.34-1.27 1.34-.7 0-1.27-.6-1.27-1.334 0-.74.57-1.338 1.27-1.338z" />
          </svg>
        </LinkCustom>
      </li>
    </ul>
  )
}
