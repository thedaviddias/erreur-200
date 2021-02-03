import React from 'react'

import Img from 'gatsby-image'
import { v4 as uuid } from 'uuid'

import { useHostsList } from '../../hooks/useHostsList'
import { LinkCustom } from '../LinkCustom'

export const Hosts: React.FC = () => {
  const { hosts } = useHostsList()

  return (
    <div className="flex mx-auto md:ml-auto">
      {hosts.edges.map(({ node }) => {
        const { name, twitter, image } = node

        const twitterName = twitter ? twitter.substring(twitter.lastIndexOf('/') + 1) : ''

        return (
          <div className="max-w-xs my-3" key={uuid()}>
            <div className="flex justify-center">
              <Img
                className="rounded-full border-solid border-white border-2"
                fixed={image.childImageSharp.fixed}
                alt={name}
              />
            </div>
            <div className="text-center px-3 pb-6 pt-2">
              <p className="text-white text-l md:text-xl bold font-sans">{name}</p>
              <p className="mt-1 font-sans text-m font-light text-grey-dark hover:underline hover:text-tertiary">
                <LinkCustom to={twitter}>{`@${twitterName}`}</LinkCustom>
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
