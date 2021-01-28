import React from 'react'

import { Platforms } from '..'
import { useSiteMetadata } from '../../hooks/index'
import { Hosts } from '../Hosts'

export const Header = () => {
  const { siteMetadata } = useSiteMetadata()
  return (
    <header>
      {/* {siteLogo} */}
      <Hosts />
      <Platforms />
    </header>
  )
}
