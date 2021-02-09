/* eslint jsx-a11y/media-has-caption:0 */
import React, { useContext, useLayoutEffect, useRef, useState } from 'react'

import 'plyr-react/dist/plyr.css'

import { LinkCustom } from '..'
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

  useLayoutEffect(() => {
    if (window.Plyr && current?.node) {
      const source = {
        type: 'audio',
        title: current.node.frontmatter.title,
        sources: [
          {
            src: `${current.node.frontmatter.url}`,
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

        instance.current.on('ready', () => {
          instance.current.on('playing', () => {
            dispatch({ type: 'setPlayerStatus', payload: 'PLAY' })
          })
          instance.current.on('pause', () => {
            dispatch({ type: 'setPlayerStatus', payload: 'PAUSE' })
          })
        })
      }

      setCurrentTrack(current.node)
    }
  }, [current, dispatch])

  const day = current && new Date(currentTrack?.frontmatter?.publicationDate)

  return (
    <>
      <div className="bg-secondary fixed w-screen -inset-x-0 bottom-0 p-2 border-solid border-black border-t-2 shadow-md">
        <div className="relative max-w-4xl mx-auto">
          <div className="flex flex-col mb-1 mx-4 md:flex-row">
            {currentTrack?.fields?.slug && (
              <LinkCustom href={currentTrack?.fields?.slug}>
                {currentTrack?.frontmatter.title}
              </LinkCustom>
            )}

            <p className="md:ml-auto">{day?.toLocaleDateString('fr-FR', options)}</p>
          </div>
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
        </div>
      </div>
    </>
  )
}
