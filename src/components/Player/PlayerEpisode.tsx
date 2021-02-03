import React from 'react'

import { LinkCustom, PlayerButton } from '..'
import { secondToTime } from '../../utils/index'

interface IPlayerEpisode {
  id: string
  title: string
  duration: string
  fileAbsolutePath: string
}

export const PlayerEpisode: React.FC<IPlayerEpisode> = ({
  id,
  title,
  duration,
  fileAbsolutePath,
}) => {
  return (
    <div className="border-solid border-primaryDark border-4 p-4 rounded-lg max-w-l my-3 flex">
      <div>
        <PlayerButton id={id} />
      </div>
      <div className="ml-3">
        <p className="pb-2">Épisode: {title}</p>
        <p>Durée: {duration && <span>{`${secondToTime(duration)}`}</span>}</p>

        <LinkCustom
          href={fileAbsolutePath}
          className="inline-flex justify-center py-2 px-4 rounded-md text-sm font-medium"
        >
          <span className="sr-only">Télécharger l'épisode</span>

          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
          </svg>
        </LinkCustom>
      </div>
    </div>
  )
}
