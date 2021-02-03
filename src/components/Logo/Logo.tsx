import React from 'react'

import { LinkCustom } from '..'
import { useSiteMetadata } from '../../hooks/index'

export const Logo: React.FC = () => {
  const { siteLogo } = useSiteMetadata()

  return (
    <div>
      {siteLogo && (
        <LinkCustom href="/">
          <img src={siteLogo} alt="Logo du podcast Erreur 200" width="350" height="74" />
        </LinkCustom>
      )}
    </div>
  )
}
