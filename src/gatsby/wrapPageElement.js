import React from 'react'

import { Layout } from '../components/Layout'

export const wrapPageElementComponent = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}
