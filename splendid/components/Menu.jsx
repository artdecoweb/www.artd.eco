/* eslint-env browser */
import SVGAnim from '@artdeco/snapsvg-animator'
import fetch from 'unfetch'
import { Component } from 'preact'

const loadSnap = async () => {
  await new Promise((r, j) => {
    const script = document.createElement('script')
    script.src = 'snapsvg/dist/snap.svg-min.js'
    document.body.appendChild(script)
    script.onload = r
    script.onerror = j
  })
}

const loadMenu = async () => {
  const res = await fetch('js/menu.json')
  return await res.json()
}

export default class Menu extends Component {
  constructor() {
    super()
    this.state = { json: null }
  }
  async componentWillMount() {
    const [json] = await Promise.all([
      loadMenu(),
      loadSnap(),
    ])
    this.setState({ json })
  }
  serverRender({ splendid }) {
    splendid.export()
    splendid.addFile('js/menu.json')
    splendid.addFile('node_modules://snapsvg/dist/snap.svg-min.js')
    splendid.addFile('img/menu.svg')
    return (<div id="menu" style="width:100%;"><img style="width:100%;" alt="menu" src="img/menu.svg" /></div>)
  }
  render() {
    const menuContainer = document.getElementById('menu')
    if (!this.state.json) {
      const err = new Error('loading...')
      err['cancelRender'] = true
      throw err
    }
    // return menuContainer

    const width = 1226
    const height = 818

    const comp = new SVGAnim(this.state.json, width, height)
    const n = comp.s.node
    n.style['width'] = '100%'
    menuContainer.querySelector('img').replaceWith(n)

    setTimeout(() => {
      const about = n.querySelector('svg > g > g[token="4"]')
      const node = n.querySelector('svg > g > g[token="3"]')
      const packages = n.querySelector('svg > g > g[token="2"]')
      const contact = n.querySelector('svg > g > g[token="1"]')

      assignLink(about, 'about')
      assignLink(node, 'node')
      assignLink(packages, 'packages')
      assignLink(contact, 'contact')
    }, 100)
    return
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