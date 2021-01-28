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

export const secondToTime = (timeInSeconds) => {
  const pad = (num, size) => {
    return ('000' + num).slice(size * -1)
  }
  const time = parseFloat(timeInSeconds).toFixed(3)
  const hours = Math.floor(time / 60 / 60)
  const minutes = Math.floor(time / 60) % 60
  const seconds = Math.floor(time - minutes * 60)

  return `${pad(hours, 2) !== '00' ? `${pad(hours, 2)}h` : ''} ${pad(minutes, 2)}mn ${pad(
    seconds,
    2
  )}s`
}
