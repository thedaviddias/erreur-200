import { useCallback } from 'react'

/**
 * A hook that handles gtag-enabled event tracking gracefully.
 */
const useGtagEvent = (name) => {
  const acceptsCookies = true
  // const acceptsCookies = useSelector((state) => state.shell.acceptsCookies)
  const canSendEvent = typeof window !== 'undefined' && typeof gtag === `function`

  return useCallback(
    (params) => {
      if (acceptsCookies && canSendEvent) window.gtag('event', name, params)
      else if (process.env.NODE_ENV === 'development') console.log('event', name, params)
    },
    [acceptsCookies]
  )
}

export { useGtagEvent }
