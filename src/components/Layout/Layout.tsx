import React, { FunctionComponent } from 'react'

import { Header, Footer, Player, Wrapper } from '..'

export const Layout: FunctionComponent = ({ children }) => {
  return (
    <Wrapper>
      <div className="bg-primary px-4 sm:px-6 lg:pt-10 lg:pb-20 lg:px-8 min-h-screen">
        <div className="px-20 pb-20 relative max-w-5xl mx-auto flex flex-col justify-between">
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
