'use client'

import { useMemo } from 'react'

import { useAudioPlayer } from '@/components/AudioProvider'

export function EpisodePlayButton({ episode, playing, paused, ...props }) {
  let audioPlayerData = useMemo(
    () => ({
      title: episode.title,
      audio: {
        src: episode.url,
        type: 'audio/mpeg',
      },
      link: `/${episode.slug}`,
    }),
    [episode]
  )
  let player = useAudioPlayer(audioPlayerData)

  return (
    <button
      type="button"
      onClick={() => player.toggle()}
      aria-label={`${player.playing ? 'Pause' : 'Play'} episode ${
        episode.title
      }`}
      {...props}
    >
      {player.playing ? playing : paused}
    </button>
  )
}
