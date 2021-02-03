import React from 'react'

export const onRenderBodyComponent = ({ setPostBodyComponents }, pluginOptions = {}) => {
  const components = [<script key="plyr-script" src="https://cdn.plyr.io/3.6.2/plyr.js"></script>]
  // <link rel="stylesheet" href="https://cdn.plyr.io/3.6.2/plyr.css" />,

  return setPostBodyComponents(components)
}
