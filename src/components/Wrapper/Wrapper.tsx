import React from 'react'

import { MDXProvider } from '@mdx-js/react'

import { EpisodeList } from '../EpisodeList'

export const components = { EpisodeList }

export const Wrapper = ({ children }) => (
  <MDXProvider components={components}>{children}</MDXProvider>
)
