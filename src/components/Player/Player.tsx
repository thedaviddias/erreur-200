/* eslint jsx-a11y/media-has-caption:0 */
import React, { useContext, useEffect, useLayoutEffect, useRef, useState } from 'react'

import 'plyr-react/dist/plyr.css'

import { EpisodesContext } from '../../contexts/EpisodesContext'

const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}

export const Player = () => {
  const { state, dispatch } = useContext(EpisodesContext)
  const [currentTrack, setCurrentTrack] = useState<any>()

  const player = useRef(null)
  const instance = useRef(null)

  const { current } = state

  useEffect(() => {
    if (window.Plyr && current?.node) {
      const source = {
        type: 'audio',
        title: current.node.frontmatter.title,
        sources: [
          {
            src: `https://erreur200.s3.eu-west-3.amazonaws.com/${current.node.frontmatter.url}`,
            type: 'audio/mp3',
          },
        ],
      }

      if (instance.current !== null) {
        instance.current.source = source
        instance.current.restart()

        // play only after user action
        instance.current.play()
      } else {
        instance.current = new window.Plyr(player.current, {
          // debug: true,
        })
        instance.current.source = source

        // set player in context
        dispatch({ type: 'setPlayer', payload: instance.current })

        instance.current.on('ready', (event) => {
          instance.current.on('playing', (event) => {
            dispatch({ type: 'setPlayerStatus', payload: 'PLAY' })
          })
          instance.current.on('pause', (event) => {
            dispatch({ type: 'setPlayerStatus', payload: 'PAUSE' })
          })
        })
      }

      setCurrentTrack(current.node)
    }
  }, [current, dispatch])

  // const { frontmatter } = currentTrack && currentTrack
  // const { slug } = currentTrack?.fields
  // const d = current && new Date(currentTrack?.frontmatter?.publicationDate)

  return (
    <>
      <audio
        preload="none"
        ref={player}
        controls
        style={{
          display: 'none',
        }}
      >
        <source src={currentTrack?.frontmatter.url} type="audio/mp3" />
      </audio>
    </>
  )
}
