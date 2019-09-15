import '../js/load-noise'
import '../js/parallax'
import '../js/object.assign'
import __renameMap0 from './__rename-maps/styles/Adonais'
import __renameMap1 from './__rename-maps/styles/Parallax'
import makeClassGetter from './__mcg'
const renameMaps = { 'styles/Adonais.css': __renameMap0,
  'styles/Parallax.css': __renameMap1 }
import { render, h } from 'preact'
import { makeIo, init } from './__competent-lib'
import Adonais from '../components/adonais.jsx'
import Menu from '../components/menu.jsx'

const __components = {
  'adonais': Adonais,
  'menu': Menu,
}

const io = makeIo()

/** @type {!Array<!preact.PreactProps>} */
const meta = [{
  key: 'adonais',
  id: 'c9848',
  props: {
    class: 'position-relative mb-3 align-top',
  },
},
{
  key: 'menu',
  id: 'menu',
}]
meta.forEach(({ key, id, props = {}, children = [] }) => {
  const { parent, el } = init(id, key)
  const Comp = __components[key]
  props.splendid = { export() {}, addCSS(stylesheet) {
    return makeClassGetter(renameMaps[stylesheet])
  }, addFile() {} }
  el.render = () => {
    render(h(Comp, props, children), parent, el)
  }
  el.render.meta = { key, id }
  io.observe(el)
})
