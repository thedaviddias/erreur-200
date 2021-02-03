import React from 'react'

const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}

interface IMeta {
  publicationDate: string
}

export const Meta: React.FC<IMeta> = ({ publicationDate }) => {
  const date = new Date(publicationDate)

  return (
    <div className="pb-2 text-gray-400">
      {date && <span className="ml-auto my-1">{date.toLocaleDateString('fr-FR', options)}</span>}
    </div>
  )
}
