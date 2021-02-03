import React from 'react'

import { LinkCustom } from '..'
import { useSiteMetadata } from '../../hooks/index'

export const Footer = () => {
  const { copyright, githubRepo } = useSiteMetadata()

  return (
    <footer>
      <div className="max-w-7xl mx-auto pt-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
          <div className="px-5 py-2">
            <LinkCustom
              href="/about"
              className="text-base text-gray-300 underline hover:text-white hover:underline"
            >
              À propos
            </LinkCustom>
          </div>

          <div className="px-5 py-2">
            <LinkCustom
              href="/be-a-guest"
              className="text-base text-gray-300 underline hover:text-white hover:underline"
            >
              Être invité
            </LinkCustom>
          </div>

          <div className="px-5 py-2">
            <LinkCustom
              href="/cookies"
              className="text-base text-gray-300 underline hover:text-white hover:underline"
            >
              Cookies
            </LinkCustom>
          </div>
        </nav>

        <p className="mt-8 text-center text-base text-gray-400">
          {copyright} - Fait avec{' '}
          <LinkCustom to="https://www.gatsbyjs.com/" className="hover:text-white hover:underline">
            Gatsby
          </LinkCustom>
          , hébergé sur{' '}
          <LinkCustom to="https://www.netlify.com/" className="hover:text-white hover:underline">
            Netlify
          </LinkCustom>{' '}
          (
          <LinkCustom to={githubRepo} className="text-base hover:text-white hover:underline">
            Source code
          </LinkCustom>
          )
        </p>
      </div>
    </footer>
  )
}
