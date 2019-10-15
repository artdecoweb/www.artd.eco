import __initBottom from './__init/bottom'
import '../js/load-background-img'
import makeClassGetter from './__mcg'
const renameMaps = {  }
__initBottom()
import { Component, render, h } from 'preact'
import { makeIo, init, start } from './__competent-lib'
import Parallax from '../../node_modules/splendid/src/components/parallax.jsx'

const __components = {
  'parallax': Parallax,
}

const io = makeIo()

/** @type {!Array<!preact.PreactProps>} */
const meta = [{
  key: 'parallax',
  id: 'c9848',
  props: {
    'background-image': '/img/tile.jpg',
  },
}]
meta.forEach(({ key, id, props = {}, children = [] }) => {
  const { parent, el } = init(id, key)
  const Comp = __components[key]
  props.splendid = { export() {}, addCSS(stylesheet) {
    return makeClassGetter(renameMaps[stylesheet])
  }, addFile() {} }
  el.render = () => {
    start(Comp, el, parent, props, children, { render, Component, h })
  }
  el.render.meta = { key, id }
  io.observe(el)
})
