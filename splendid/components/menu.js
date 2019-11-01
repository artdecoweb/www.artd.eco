/* eslint-env browser */
import loadScripts from '@lemuria/load-scripts'

export default class Menu {
  /**
   * @param {Element} el
   */
  constructor(el) {
    this.el = el
    /** @type {_snapsvgAnimator.SVGAnim} */
    this.comp = null
  }
  /**
   * @suppress {checkTypes}
   */
  static get 'plain'() {
    return true
  }
  /**
   * @suppress {checkTypes}
   */
  static 'load'(callback) {
    loadScripts([
      'js/menu.json',
      'snapsvg/dist/snap.svg-min.js',
      '@artdeco/snapsvg-animator/svg-anim.min.js',
    ], (err, res) => {
      if (err) return callback(err)
      try {
        const [json] = /** @type {!Array<string>}*/ (res)
        callback(null, { json: JSON.parse(/** @type {string} */ (json)) })
      } catch (er) {
        callback(er)
      }
    })
  }
  unrender() {
    this.comp.stop()
  }

  render({ json }) {
    if (this.comp) return this.comp.play()
    const width = 1226
    const height = 818

    this.el.removeChild(this.el.querySelector('noscript'))
    const img = this.el.querySelector('img')

    /** @type {!_snapsvgAnimator.SVGAnim} */
    this.comp = new window['SVGAnim'](json, width, height)
    const svg = /** @type {!SVGElement} */ (this.comp.s.node)
    svg.style.position = 'absolute'
    svg.style.top = 0
    svg.style.right = 0
    svg.removeAttribute('height')
    this.el.appendChild(svg)

    setTimeout(() => {
      img.style.opacity = 0
      assignLink(svg, 'svg > g > g[token="4"]', 'about')
      assignLink(svg, 'svg > g > g[token="3"]', 'node')
      assignLink(svg, 'svg > g > g[token="2"]', 'packages')
      assignLink(svg, 'svg > g > g[token="1"]', 'contact')
    }, 100)
  }
}

function assignLink(parent, selector, name, i = 0) {
  if (i > 10) return
  const target = parent.querySelector(selector)
  if (!target) {
    setTimeout(() => assignLink(parent, selector, name, i+1), 100)
  } else {
    target.onclick = function () {
      window.location = '#' + name
    }
  }
}

/**
 * @typedef {import('splendid/src/Splendid').default} Splendid
 */

/**
 * @typedef {import('@artdeco/snapsvg-animator').SVGAnim} _snapsvgAnimator.SVGAnim
 */