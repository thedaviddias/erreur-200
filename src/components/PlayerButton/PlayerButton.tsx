import React, { useContext } from 'react'

import { EpisodesContext } from '../../contexts/EpisodesContext'
import { Pause } from './Pause'
import { Play } from './Play'

export const PlayerButton = ({ id }) => {
  const { state, dispatch } = useContext(EpisodesContext)

  const isOnAir = state.current ? id === state.current.node.id : false
  const { playerStatus } = state

  const setEpisode = () => {
    dispatch({
      type: 'setCurrent',
      payload: id,
    })
    if (state.player && state.playerStatus === 'PLAY') {
      state.player.pause()
    } else if (state.player && state.playerStatus === 'PAUSE') {
      state.player.play()
    }
  }

  return (
    <button
      type="button"
      className={`${
        isOnAir && playerStatus === 'PLAY'
          ? `bg-primary hover:bg-secondary`
          : `bg-secondary hover:primary`
      } inline-flex px-1 py-1 border border-transparent text-base font-medium rounded-full shadow-sm text-white`}
      onClick={setEpisode}
      aria-label="Ecouter l'épisode du podcast Erreur 200"
    >
      {isOnAir && playerStatus === 'PLAY' ? <Pause /> : <Play />}
    </button>
  )
}
