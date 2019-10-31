/* eslint-env browser */
import loadScripts from '@lemuria/load-scripts'
// import { Component } from 'preact'

export default class Menu {
  /**
   * @param {Element} el
   */
  constructor(el) {
    this.el = el
  }
  /**
   *
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
      'js/svg-anim.js',
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
  /**
   * @param {Object} props
   * @param {Splendid} props.splendid
   */
  serverRender({ splendid }) {
    splendid.export()
    splendid.addFile('js/menu.json')
    splendid.addFile('js/svg-anim.js.map')
    splendid.preload('node_modules://snapsvg/dist/snap.svg-min.js', 'script')
    splendid.preload('js/svg-anim.js', 'script')
    splendid.extern('node_modules://@artdeco/snapsvg-animator/types/externs.js')
    splendid.css('styles/Menu.css', '.Menu', {
      inline: true,
    })

    return (<div className="Menu position-relative">
      <splendid-img
        placeholder-width="1226"
        placeholder-height="818" alt="menu" src="img/menu.svg" />
    </div>)
  }
  render({ json }) {
    const width = 1226
    const height = 818

    this.el.removeChild(this.el.querySelector('noscript'))
    const img = this.el.querySelector('img')

    /** @type {!_snapsvgAnimator.SVGAnim} */
    const comp = new window['SVGAnim'](json, width, height)
    const svg = /** @type {!SVGElement} */ (comp.s.node)
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

// export default function menu({ splendid }) {
//   splendid.export()
//   return (<div id="menu">Menu</div>)
// }
/**
 * @typedef {import('splendid/src/Splendid').default} Splendid
 */