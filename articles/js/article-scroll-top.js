/* eslint-env browser */

function convertRemToPixels(rem) {
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize)
}

/**
 * @param {Element} Photo
 */
function initPhoto(Photo) {
  const parent = Photo.parentElement.parentElement
  let height
  let parentHeight
  let maxScroll
  let heightAdjusted
  const get = () => {
    if (heightAdjusted) {
      Photo.style.height = null
      Photo.style['max-width'] = null
    }
    ({ height } = Photo.getBoundingClientRect())
    parentHeight = convertRemToPixels(parseInt(parent.style.height, 10))
    const needsAdjustement = height < parentHeight
    if (needsAdjustement) { // mobile
      Photo.style.height = parent.style.height
      Photo.style['max-width'] = 'initial'
      heightAdjusted = true
    } else {
      heightAdjusted = false
    }
    // heightAdjusted = true
    // } else if (!needsAdjustement && heightAdjusted) {
    // heightAdjusted = false
    // }
    // ;({ height: parentHeight } = parent.getBoundingClientRect())
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