import React from 'react'

import { Platforms } from '..'
import { Hosts } from '../Hosts'
import { Logo } from '../Logo'

export const Header: React.FC = () => {
  return (
    <header className="mb-3">
      <div className="flex items-center flex-col sm:flex-row">
        <div className="w-full md:w-1/2">
          <Logo />
          <Platforms />
        </div>
        <div className="flex w-full md:w-1/2">
          <Hosts />
        </div>
      </div>
    </header>
  )
}
