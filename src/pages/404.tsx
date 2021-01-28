import React from 'react'

import { useStaticQuery, graphql, Link } from 'gatsby'
import { v4 as uuid } from 'uuid'

const NotFoundPage = () => {
  const { allSitePage } = useStaticQuery(graphql`
    query allPages {
      allSitePage(
        filter: { path: { regex: "/^((?!404).)*$/" } }
        sort: { fields: path, order: ASC }
      ) {
        nodes {
          path
        }
      }
    }
  `)
  return (
    <>
      <h1>404: Not Found</h1>
      <div>
        <p>Voici les pages disponibles sur le site :</p>
        <ul>
          {allSitePage.nodes.map((p) => (
            <li key={uuid()}>
              <Link to={p.path}>{p.path}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default NotFoundPage
