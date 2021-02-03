import React, { createContext, useReducer, useEffect } from 'react'

import { usePodcastsList } from '../hooks/index'

interface IEpisodesContext {
  player: null | string
  playerStatus: string
  current: null | string
  podcasts: any[]
  podcastEnter: null | string
}

export const initialState = {
  player: null,
  playerStatus: 'PAUSE',
  current: null,
  podcasts: [],
  podcastEnter: null,
}

export const EpisodesContext = createContext<IEpisodesContext>(initialState)

const reducer = (state, action) => {
  switch (action.type) {
    case 'setPlayer':
      return { ...state, ...{ player: action.payload } }
    case 'setPodcastEnter':
      return { ...state, ...{ podcastEnter: action.payload } }
    case 'setPlayerStatus':
      return { ...state, ...{ playerStatus: action.payload } }
    case 'setPodcasts':
      return { ...state, ...{ podcasts: action.payload } }
    case 'initCurrent':
      return {
        ...state,
        ...{
          current: state.podcasts.find((e) => e.node.id === (state.podcastEnter || action.payload)),
        },
      }
    case 'setCurrent':
      return {
        ...state,
        ...{
          current: state.podcasts.find((e) => e.node.id === action.payload),
        },
      }
    default:
      return state
  }
}

export const EpisodesProvider: React.FC = ({ children }) => {
  const { podcastEpisodes } = usePodcastsList()
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    if (podcastEpisodes.edges.length) {
      dispatch({ type: 'setPodcasts', payload: podcastEpisodes.edges })
      dispatch({
        type: 'initCurrent',
        payload: podcastEpisodes.edges[0].node.id,
      })
    }
  }, [podcastEpisodes])

  return <EpisodesContext.Provider value={{ state, dispatch }}>{children}</EpisodesContext.Provider>
}
