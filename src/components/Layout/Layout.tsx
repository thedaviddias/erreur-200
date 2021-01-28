import React, { FunctionComponent } from 'react'

import { Header, Footer, Player, Wrapper } from '..'

export const Layout: FunctionComponent = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <main>{children}</main>
      <Footer />
      <Player />
    </Wrapper>
  )
}
