/* eslint-env browser */
import loadScripts from '@lemuria/load-scripts'

export default class Animation {
  /**
   * @param {Element} el
   */
  constructor(el) {
    this.el = el
  }
  /**
   * Non-preact component.
   * @suppress {checkTypes}
   */
  static get 'plain'() {
    return true
  }
  /**
   * @suppress {checkTypes}
   */
  static 'load'(callback, el, { path, dev }) {
    const scripts = [
      path,
      dev ? '/snapsvg/dist/snap.svg.js' : '/snapsvg/dist/snap.svg-min.js',
      ...(dev ? [] : ['/js/svg-anim.js']),
    ]
    loadScripts(scripts, (err, res) => {
      if (err) return callback(err)
      try {
        const [json] = /** @type {!Array<string>}*/ (res)
        callback(null, { json: JSON.parse(/** @type {string} */ (json)) })
      } catch (er) {
        callback(er)
      }
    })
  }
  render({ json, width, height, align }) {
    // this.el.removeChild(this.el.querySelector('noscript'))
    const img = this.el.querySelector('img')

    /** @type {!_snapsvgAnimator.SVGAnim} */
    const comp = new window['SVGAnim'](json, width, height)
    const svg = /** @type {!SVGElement} */ (comp.s.node)
    svg.style.position = 'absolute'
    svg.style.top = 0
    if (align == 'right') svg.style.right = 0
    else if (align == 'center') {
      svg.style.right = 0
      svg.style.left = 0
      svg.style.margin = '0 auto'
    }
    else svg.style.left = 0
    svg.style.maxWidth = '100%'
    svg.style.maxHeight = '100%'
    svg.removeAttribute('height')
    this.el.appendChild(svg)

    setTimeout(() => {
      img.style.opacity = 0
    }, 100)
  }
}

/**
 * @typedef {import('splendid/src/Splendid').default} Splendid
 */