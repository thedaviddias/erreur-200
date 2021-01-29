import React from 'react'

import { Platforms } from '..'
import { Hosts } from '../Hosts'
import { Logo } from '../Logo'

export const Header = () => {
  return (
    <header className="mb-3">
      <div className="flex items-center">
        <div className="w-1/2">
          <Logo />
          <Platforms />
        </div>
        <div className="flex w-1/2">
          <Hosts />
        </div>
      </div>
    </header>
  )
}
