import React from 'react'

import { CookieBanner } from '../components/CookieBanner'
import { EpisodesProvider } from '../contexts/EpisodesContext'

export const wrapRootElementComponent = ({ element }) => {
  return (
    <EpisodesProvider>
      <>
        {element} <CookieBanner />
      </>
    </EpisodesProvider>
  )
}
