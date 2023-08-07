'use client'

import clsx from 'clsx'
import { useState } from 'react'
import david from '@/public/images/david-dias.png'
import jr from '@/public/images/jean-remy-duboc.jpg'
import Image from 'next/image'

export function AboutSection(props) {
  let [isExpanded, setIsExpanded] = useState(false)

  return (
    <section {...props}>
      <h2 className="flex items-center font-mono text-sm font-medium leading-7 text-white">
        <span>À propos du podcast</span>
      </h2>
      <div className="my-3 flex">
        <Image
          className="rounded-full"
          src={david}
          width={100}
          height={100}
          alt="Photo de David Dias"
          priority
        />
        <Image
          className="rounded-full"
          src={jr}
          width={100}
          height={100}
          alt="Photo de Jean-Rémy Duboc"
          priority
        />
      </div>
      <p
        className={clsx(
          'mt-2 text-base leading-7 text-light-gray',
          !isExpanded && 'lg:line-clamp-4'
        )}
      >
        Erreur 200 est un podcast dédié aux gens qui font le web. Animé par deux
        développeurs français, l&#39;un vivant au Canada, l&#39;autre en
        Angleterre, nous échangeons sur le web d&#39;aujourd&#39;hui et de
        demain. Retrouvez-nous pour discuter de code, d&#39;accessibilité, des
        frameworks JavaScript, de l&#39;UX et plein d&#39;autres sujets
        passionnants. Nous laissons parfois la parole à d&#39;autres personnes
        qui partagent la même passion et qui nous parlerons de leurs échecs et
        leurs succès.
      </p>
      {!isExpanded && (
        <button
          type="button"
          className="mt-2 hidden text-sm font-bold leading-6 text-accent-red hover:text-accent-red active:text-pink-900 lg:inline-block"
          onClick={() => setIsExpanded(true)}
        >
          Voir plus
        </button>
      )}
    </section>
  )
}
