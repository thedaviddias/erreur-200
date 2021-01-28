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
      // className={`${styles.button_play} ${
      //   isOnAir && playerStatus === 'PLAY' ? styles.PLAY : styles.PAUSE
      // }`}
      onClick={setEpisode}
      aria-label="Ecouter l'épisode du podcast Erreur 200"
    >
      {isOnAir && playerStatus === 'PLAY' ? <Pause /> : <Play />}
    </button>
  )
}
