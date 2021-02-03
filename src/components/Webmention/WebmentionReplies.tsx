import React, { useEffect, useState, useReducer, useCallback } from 'react'

import { v4 as uuid } from 'uuid'

import { LinkCustom } from '..'
import AvatarPlaceholder from '../../../static/assets/avatar-placeholder.jpg'

function Replies({ replies }) {
  const replyElements = replies?.map((link) => (
    <li key={link.id} key={uuid()} className="m-2">
      {link && link.data && link.data.author && (
        <div key={uuid()} className="flex">
          <div className="mr-2">
            <LinkCustom to={link.data.author.url}>
              <img
                width="60"
                height="60"
                src={link.data.author.photo || AvatarPlaceholder}
                alt={`avatar of ${link.data.author.name}`}
                className="full-rounded"
              />
            </LinkCustom>
          </div>
          <article dangerouslySetInnerHTML={{ __html: link.activity.sentence_html }} />
        </div>
      )}
    </li>
  ))

  return (
    <div>{replies && replies.length ? <ul>{replyElements}</ul> : <p>There is no reply...</p>}</div>
  )
}

export const WebmentionReplies = ({ target }) => {
  const [page, setPage] = useState(0)
  const [fetchState, setFetchState] = useState('fetching')

  const initialReplies = []
  const mergeReplies = (oldReplies, newReplies) => [...oldReplies, ...newReplies]
  const [replies, setReplies] = useReducer(mergeReplies, initialReplies)

  const perPage = 30

  const webmentionURL = `https://webmention.io/api/mentions?page=${page}&per-page=${perPage}&target=${target}`

  const getMentions = useCallback(
    () =>
      fetch(webmentionURL)
        .then((response) => response.json())
        .then((json) => [...json.links]),
    []
  )

  const incrementPage = () => setPage((page) => page + 1)

  const fetchMore = () =>
    getMentions()
      .then((newReplies) => {
        if (newReplies.length) {
          setReplies(newReplies)
        } else {
          setFetchState('nomore')
        }
      })
      .then(incrementPage)

  useEffect(() => {
    getMentions()
      .then((newReplies) => {
        setReplies(newReplies)
        setFetchState('done')
      })
      .then(incrementPage)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {fetchState === 'fetching' && <p>Fetching Replies...</p>}
      <div className="markdown-mention">
        <Replies replies={replies} />
      </div>

      {fetchState !== 'nomore' || !replies.length ? (
        <button onClick={fetchMore}>Fetch More...</button>
      ) : (
        <p>No further replies found.</p>
      )}
    </>
  )
}
