import React, { FunctionComponent } from 'react'

import { Header, Footer, Player, Wrapper } from '..'

export const Layout: FunctionComponent = ({ children }) => {
  return (
    <Wrapper>
      <div className="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="relative max-w-3xl mx-auto flex flex-col h-screen justify-between">
          <Header />
          <main className="mb-auto">
            <Player />
            {children}
          </main>
          <Footer />
        </div>
      </div>
    </Wrapper>
  )
}
