import React from 'react'

import { ErrorBoundary } from 'react-error-boundary'

import { LinkCustom } from '..'
import { WebmentionCount } from './WebmentionCount'
import { WebmentionReplies } from './WebmentionReplies'

/**
 * This displays an error message when Webmention fails to load
 */
const WebmentionFallbackComponent = ({ componentStack, error }) => (
  <div>
    <p>
      <strong>Error occurred while fetching Webmention...</strong>
    </p>
    <p>Here’s what we know…</p>
    <p>
      <strong>Error:</strong> {error.toString()}
    </p>
    <p>
      <strong>Stacktrace:</strong> {componentStack}
    </p>
  </div>
)

export const Webmention = ({ target }) => {
  return (
    <ErrorBoundary FallbackComponent={WebmentionFallbackComponent}>
      <section>
        <div>
          <h2 className="leading-5 font-extrabold tracking-tight text-white text-4xl sm:text-3xl mb-2">
            Webmentions
          </h2>

          <p>
            <LinkCustom
              to={`https://twitter.com/intent/tweet/?text=${target}`}
              className="inline-flex justify-center py-2 px-4 rounded-md text-sm font-medium bg-twitter text-white"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 mr-2">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
              Tweetez cet épisode
            </LinkCustom>{' '}
          </p>
        </div>

        <WebmentionCount target={target} />
        <WebmentionReplies target={target} />
      </section>
    </ErrorBoundary>
  )
}
