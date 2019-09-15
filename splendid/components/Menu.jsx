/* eslint-env browser */
import loadScripts from '@lemuria/load-scripts'
import { Component } from 'preact'

export default class Menu extends Component {
  constructor() {
    super()
    this.state = { json: null }
  }
  componentWillMount() {
    loadScripts([
      'js/menu.json',
      'snapsvg/dist/snap.svg-min.js',
      'js/svg-anim.js',
    ], (err, res) => {
      if (!res) return
      const [json] = res
      this.setState({ json: JSON.parse(/** @type {string} */ (json)) })
    })
  }
  serverRender({ splendid }) {
    splendid.export()
    splendid.addFile('js/menu.json')
    splendid.addFile('js/svg-anim.js.map')
    splendid.addFile('img/menu.svg')
    splendid.addExtern('node_modules://@artdeco/snapsvg-animator/types/externs.js')
    return (<div id="menu" style="width:100%;"><img style="max-width:100%;" alt="menu" src="img/menu.svg" /></div>)
  }
  cancelRender() {
    const err = new Error('loading...')
    err['cancelRender'] = true
    throw err
  }
  render() {
    const menuContainer = document.getElementById('menu')
    if (!this.state.json) {
      this.cancelRender()
    }

    const width = 1226
    const height = 818

    /** @type {!_snapsvgAnimator.SVGAnim} */
    const comp = new window['SVGAnim'](this.state.json, width, height)
    const n = comp.s.node
    n.style['max-width'] = '100%'

    setTimeout(() => {
      const about = n.querySelector('svg > g > g[token="4"]')
      const node = n.querySelector('svg > g > g[token="3"]')
      const packages = n.querySelector('svg > g > g[token="2"]')
      const contact = n.querySelector('svg > g > g[token="1"]')

      assignLink(about, 'about')
      assignLink(node, 'node')
      assignLink(packages, 'packages')
      assignLink(contact, 'contact')

      menuContainer.querySelector('img').replaceWith(n)
    }, 100)
    return null
  }
}

function assignLink(target, name) {
  target.onclick = function () {
    window.location = '#' + name
  }
}

// export default function menu({ splendid }) {
//   splendid.export()
//   return (<div id="menu">Menu</div>)
// }