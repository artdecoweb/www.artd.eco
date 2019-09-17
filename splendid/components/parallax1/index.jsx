/* eslint-env browser */
import { Component } from 'preact'

export default class Parallax extends Component {
  constructor() {
    super()
    /** @type {Element} */
    this.el = null // the target element
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
    const prefix = 'Parallax1'
    splendid.addCSS('styles/Parallax1.css', null, {
      whitelist: prefix,
      exported: false,
      // combined: false,
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
      <div className="Parallax1"/>,
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
  componentDidMount() {
    this.speedy = parseFloat(this.props.speedy || 0.5)
    this.speedx = parseFloat(this.props.speedx || 0)
    this.handle = this.el.nextElementSibling

    this.listener = () => {
      this.compute()
    }
    window.addEventListener('scroll', this.listener)
    this.compute()
  }
  /**
   * @param {function(Error, *)} callback
   * @param {Element} el
   * @suppress {checkTypes}
   */
  static 'load'(callback, el) {
    callback(null, { class: el.className, style: el.getAttribute('style') })
  }
  render({ class: cn, style, 'background-image': backgroundImage }) {
    return (<div className={cn} style={style} ref={(el) => {
      this.el = el
      if (el) el.style['background-image'] = `url(${backgroundImage})`
    }}/>)
  }
}

const floatToPx = (f) => {
  return `${f.toFixed()}px`
}