import React from 'react'

import { EpisodesProvider } from '../contexts/EpisodesContext'

export const wrapRootElementComponent = ({ element }) => {
  return <EpisodesProvider>{element}</EpisodesProvider>
}
