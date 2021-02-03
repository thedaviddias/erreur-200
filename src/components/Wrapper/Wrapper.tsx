import React from 'react'

import { MDXProvider } from '@mdx-js/react'

import { ContactForm } from '../ContactForm'
import { EpisodeList } from '../EpisodeList'

export const components = { EpisodeList, ContactForm }

export const Wrapper = ({ children }) => (
  <>
    <MDXProvider components={components}>{children}</MDXProvider>
  </>
)
