/* eslint "react/jsx-no-target-blank": "off" */

import React from 'react'

import Img from 'gatsby-image'

import { usePlatformsList } from '../../hooks/usePlatformsList'

export const Platforms = () => {
  const { allDataYaml } = usePlatformsList()

  return (
    <div>
      {allDataYaml.edges.map(({ node }) => {
        const { id, name, url, image } = node
        return (
          <a key={id} href={url} target="_blank">
            <Img fixed={image.childImageSharp.fixed} alt={name} />
          </a>
        )
      })}
    </div>
  )
}
