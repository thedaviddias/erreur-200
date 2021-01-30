import React from 'react'

import { Episode } from '..'
import { usePodcastsList } from '../../hooks'

export const EpisodeList: React.FC = () => {
  const podcastList = usePodcastsList()

  return (
    <div className="divide-y divide-gray-500">
      {podcastList.podcastEpisodes.edges.map(({ node }) => {
        return <Episode key={node.id} node={node} />
      })}
    </div>
  )
}
