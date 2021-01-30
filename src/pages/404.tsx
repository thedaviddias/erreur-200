import React from 'react'

import { useStaticQuery, graphql, Link } from 'gatsby'
import { v4 as uuid } from 'uuid'

const NotFoundPage: React.FC = () => {
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
    <article>
      <header className="pb-4">
        <h1 className="text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl p-name">
          404: Page introuvable
        </h1>
      </header>
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
    </article>
  )
}

export default NotFoundPage
