import React from 'react'

import { Episode } from '..'
import { usePodcastsList } from '../../hooks'

export const EpisodeList = () => {
  const podcastList = usePodcastsList()
  return (
    <div>
      {podcastList.podcastEpisodes.edges.map(({ node }) => {
        return <Episode key={node.id} node={node} />
      })}
    </div>
  )
}
