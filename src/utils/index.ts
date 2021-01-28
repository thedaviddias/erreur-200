/* eslint  no-useless-escape:0 */
const reg = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/

/**
 * define if link is external or not
 * @param link
 */
export const isExternalLink = (link) => reg.test(link)

/**
 * add slash on first position if not exist
 * @param link
 */
export const addSlash = (link) => (link.charAt(0) === '/' ? link : `/${link}`)
