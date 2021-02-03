import React, { useState } from 'react'

import Recaptcha from 'react-recaptcha'

import { useSiteMetadata } from '../../hooks'

export const ContactForm: React.FC = () => {
  const { formspreeUrl, recaptchaSiteKeyV2 } = useSiteMetadata()
  const [status, setStatus] = useState('')

  const submitForm = (ev) => {
    ev.preventDefault()

    const form = ev.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()

    xhr.open(form.method, form.action)
    xhr.setRequestHeader('Accept', 'application/json')
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        form.reset()
        setStatus('SUCCESS')
      } else {
        setStatus('ERROR')
      }
    }
    xhr.send(data)
  }

  return (
    <form
      method="post"
      onSubmit={submitForm}
      action={formspreeUrl}
      className="grid grid-cols-1 gap-y-6"
    >
      {status === 'SUCCESS' ? (
        <></>
      ) : (
        <>
          <label htmlFor="name">
            Prénom et nom
            <input
              type="text"
              name="name"
              id="name"
              autoComplete="name"
              className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md text-black"
              placeholder="Jean Dupont"
            />
          </label>
          <label htmlFor="email">
            Courriel
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md text-black"
              placeholder="moi@example.com"
            />
          </label>
          <label htmlFor="subject">
            De quoi veux-tu nous parler?
            <input
              type="text"
              name="subject"
              id="subject"
              className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md text-black"
              placeholder="Au sujet du dernier podcast"
            />
          </label>
          <label htmlFor="message">
            Ton message!
            <textarea
              name="message"
              id="message"
              rows="5"
              className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md text-black"
              placeholder="Message"
            />
          </label>

          <Recaptcha sitekey={recaptchaSiteKeyV2} />
        </>
      )}

      {status === 'SUCCESS' ? (
        <div className="rounded-md bg-green-50 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg
                className="h-6 w-6 text-green-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-green-800 m-0">
                Super, on a bien reçu ton message. On te réponds très vite!
              </p>
            </div>
          </div>
        </div>
      ) : (
        <button
          type="submit"
          className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Envoyer mon message
        </button>
      )}

      {status === 'ERROR' && (
        <div className="rounded-md bg-red-50 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg
                className="h-6 w-6 text-red-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-red-800 m-0">
                Ooops! Il semble qu'une erreur se soit produise.
              </p>
            </div>
          </div>
        </div>
      )}
    </form>
  )
}
