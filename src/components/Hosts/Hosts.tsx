import React from 'react'

import Img from 'gatsby-image'
import { v4 as uuid } from 'uuid'

import { useHostsList } from '../../hooks/useHostsList'
import { LinkCustom } from '../LinkCustom'

export const Hosts = () => {
  const { hosts } = useHostsList()

  return (
    <div className="flex">
      {hosts.edges.map(({ node }) => {
        const { name, twitter, website, image } = node

        const twname = twitter ? twitter.substring(twitter.lastIndexOf('/') + 1) : ''
        const wurl = website ? website.replace('https://', '') : ''

        return (
          <div key={uuid()}>
            <div>
              <strong>{name}</strong>
              <LinkCustom to={twitter}>{`@${twname}`}</LinkCustom>
              <LinkCustom href={website}>{wurl}</LinkCustom>
            </div>
            <div>
              <Img className="rounded-full" fixed={image.childImageSharp.fixed} alt={name} />
            </div>
          </div>
        )
      })}
    </div>
  )
}
