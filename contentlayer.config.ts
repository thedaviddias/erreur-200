import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Episodes = defineDocumentType(() => ({
  name: 'Podcast',
  filePathPattern: `episodes/*.md`,
  fields: {
    type: { type: 'string', required: true },
    guid: { type: 'string', required: true },
    episodeNumber: { type: 'number', required: true },
    season: { type: 'number', required: true },
    title: { type: 'string', required: true },
    slug: { type: 'string', required: true },
    description: { type: 'string', required: true },
    publicationDate: { type: 'date', required: true },
    url: { type: 'string', required: true },
    status: {
      type: 'enum',
      options: ['published', 'draft', 'archived'],
      default: 'draft',
      required: true,
    },
    author: { type: 'string', required: true },
    episodeType: {
      type: 'enum',
      options: ['full', 'trailer', 'bonus'],
      required: true,
    },
    duration: { type: 'number', required: true },
    size: { type: 'number', required: true },
  },
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Episodes],
})
