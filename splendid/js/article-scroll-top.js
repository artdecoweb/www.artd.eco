/* eslint-env browser */

/**
 * @param {Element} Photo
 */
function initPhoto(Photo) {
  const parent = Photo.parentElement.parentElement
  let height
  let parentHeight
  let maxScroll
  const get = () => {
    ({ height } = Photo.getBoundingClientRect())
    ;({ height: parentHeight } = parent.getBoundingClientRect())
    maxScroll = height - parentHeight
  }
  window.addEventListener('resize', get)
  get()

  window.addEventListener('scroll', () => {
    const t = 'translate3d(0px, -' +Math.min(maxScroll, window.scrollY) + 'px, 0px)'
    Photo.style.transform = t
    Photo.style.webkitTransform = t
  })
}
window['initPhoto'] = initPhoto