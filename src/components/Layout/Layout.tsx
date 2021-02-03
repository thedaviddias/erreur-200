import React, { FunctionComponent } from 'react'

import { Header, Footer, Player, Wrapper } from '..'

export const Layout: FunctionComponent = ({ children }) => {
  return (
    <Wrapper>
      <div className="bg-primary pb-36 pt-10 px-4 min-h-screen sm:px-6 lg:pt-10 lg:pb-20 lg:px-8 ">
        <div className="sm:px-20 sm:pb-20 relative max-w-5xl mx-auto flex flex-col justify-between">
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
