/* eslint-env browser */ /*- global SVGAnim */
import SVGAnim from '@artdeco/snapsvg-animator'
// const json = require('./menu.json')

const menuContainer = document.getElementById('menu')

const width = 1226
const height = 818

const assignListeners = () => {
  setTimeout(() => {
    const about = menuContainer.querySelector('svg > g > g[token="4"]')
    const node = menuContainer.querySelector('svg > g > g[token="3"]')
    const packages = menuContainer.querySelector('svg > g > g[token="2"]')
    const contact = menuContainer.querySelector('svg > g > g[token="1"]')

    assignLink(about, 'about')
    assignLink(node, 'node')
    assignLink(packages, 'packages')
    assignLink(contact, 'contact')
  }, 100)
}

var jsonfile = 'js/menu.json'

let AJAX_req
AJAX_JSON_Req(jsonfile)

function handle_AJAX_Complete() {
  const json = JSON.parse(AJAX_req.responseText)
  const comp = new SVGAnim(json, width, height)
  menuContainer.appendChild(comp.s.node)
  assignListeners()
}
//   if (AJAX_req.readyState == 4 && AJAX_req.status == 200) {
//     var json = JSON.parse(AJAX_req.responseText)
//     var comp = new SVGAnim(json, width, height, fps)
//     menuContainer.appendChild(comp.s.node)

//     setTimeout(function () {
//       var about = menuContainer.querySelector('svg > g > g[token="4"]')
//       var node = menuContainer.querySelector('svg > g > g[token="3"]')
//       var packages = menuContainer.querySelector('svg > g > g[token="2"]')
//       var contact = menuContainer.querySelector('svg > g > g[token="1"]')

//       assignLink(about, 'about')
//       assignLink(node, 'node')
//       assignLink(packages, 'packages')
//       assignLink(contact, 'contact')
//     }, 100)
//   }
// }

function assignLink(target, name) {
  target.onclick = function () {
    window.location = '#' + name
  }
}

function AJAX_JSON_Req(url) {
  AJAX_req = new XMLHttpRequest()
  AJAX_req.open('GET', url, true)
  AJAX_req.setRequestHeader('Content-type', 'application/json')

  AJAX_req.onreadystatechange = handle_AJAX_Complete
  AJAX_req.send()
}