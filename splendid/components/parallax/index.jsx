/* eslint-env browser */
// import { Component } from 'preact'
import { loadStyle } from '@lemuria/load-scripts'

export default class Parallax {
  constructor(el, parent) {
    /** @type {Element} */
    this.el = el // the target element
    /** @type {Element} */
    this.handle = null
    this.listener = null

    this.speedy = 0
    this.speedx = 0
  }
  async serverRender({
    splendid, style, 'background-image': backgroundImage, class: className,
    ...props
  }) {
    splendid.export()
    const prefix = 'Parallax'
    splendid.addCSS('styles/Parallax.css', null, {
      whitelist: prefix,
      exported: false,
      combined: false,
      preload: true,
    })
    splendid.polyfill('intersection-observer')
    // splendid.addScript('js/parallax.js', false, {}, true)
    if (backgroundImage) await splendid.addFile(backgroundImage)

    const st = splendid.controlStyle(style, { ...props })

    const style2 = splendid.controlStyle(style, {
      ...(backgroundImage ? { 'background-image': `url(${backgroundImage})` } : {}),
      ...props,
    })
    const cn = [className, prefix].join(' ')
    splendid.hideNoJs('[data-loading]')
    // min-y={minY} min-y-md={minYMd} x={x} y={y} oy={oy}
    return [
      <div data-loading className={cn} style={st} />,
      <div className={prefix}/>,
      <noscript><div className={cn} style={style2} /></noscript>,
    ]
  }
  /**
   * @suppress {checkTypes}
   */
  static get 'browserProps'() {
    return ['background-image']
  }
  componentWillUnmount() {
    if (this.listener) {
      window.removeEventListener('scroll', this.listener)
    }
  }
  compute() {
    // use handle to prevent against resizes.
    const box = this.handle.getBoundingClientRect()
    const { top, height, width } = box
    const d = top - window.innerHeight

    const maxScrollY = -(-window.innerHeight - height)
    // not accounting for horizontal scrolling yet
    const maxY = maxScrollY * Math.abs(this.speedy)
    this.el.style['min-height'] = height + maxY + 'px'

    const maxX = maxScrollY * Math.abs(this.speedx)
    this.el.style['min-width'] = width + maxX + 'px'

    const Y = d * this.speedy
    let X = d * this.speedx
    if (this.speedx < 0) X -= maxX

    const t = `translate3d(${floatToPx(X)}, ${floatToPx(Y)}, 0)`
    this.el.style.transform = t
    this.el.style.webkitTransform = t
  }
  /**
   * @param {function(Error, *)} callback
   * @param {Element} el
   * @suppress {checkTypes}
   */
  static 'load'(callback, el, { 'background-image': backgroundImage }) {
    const img = document.createElement('img')
    img.src = backgroundImage
    img.onload = () => {
      callback(null, { class: el.className, style: el.getAttribute('style') })
    }
    img.onerror = () => {
      callback(new Error('Image could not be loaded.'))
    }
    loadStyle('/css/Parallax.css', () => {})
  }
  static get 'plain'() {
    return true
  }
  render({ 'background-image': backgroundImage,
    speedy = 0.5, speedx = 0,
  }) {
    this.speedy = parseFloat(speedy || 0.5)
    this.speedx = parseFloat(speedx || 0)
    this.handle = this.el.nextElementSibling

    this.listener = () => {
      this.compute()
    }
    window.addEventListener('scroll', this.listener)
    this.el.style['background-image'] = `url(${backgroundImage})`
    this.el.className += ' RunFadeIn'
    this.compute()
  }
}

// export const plain = true

const floatToPx = (f) => {
  return `${f.toFixed()}px`
}

// window.addAdditionalScroll = (y) => {
//   if (y === null) this.additionalY = 0
//   this.additionalY += y
//   this.additionY = Math.max(this.additionalY, 200)
//   this.compute()
// }