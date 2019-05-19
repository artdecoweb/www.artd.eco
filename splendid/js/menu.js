/* eslint-env browser */
/* global SVGAnim */
const menuContainer = document.getElementById('menu')

var jsonfile = 'js/menu.json',
  fps = 0,
  width = 1226,
  height = 818,
  AJAX_req

AJAX_JSON_Req(jsonfile)

function handle_AJAX_Complete() {
  if (AJAX_req.readyState == 4 && AJAX_req.status == 200) {
    var json = JSON.parse(AJAX_req.responseText)
    var comp = new SVGAnim(json, width, height, fps)
    menuContainer.appendChild(comp.s.node)

    setTimeout(function () {
      var about = menuContainer.querySelector('svg > g > g[token="4"]')
      var node = menuContainer.querySelector('svg > g > g[token="3"]')
      var packages = menuContainer.querySelector('svg > g > g[token="2"]')
      var contact = menuContainer.querySelector('svg > g > g[token="1"]')

      assignLink(about, 'about')
      assignLink(node, 'node')
      assignLink(packages, 'packages')
      assignLink(contact, 'contact')
    }, 100)
  }
}

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