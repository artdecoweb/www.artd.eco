import '../js/load-noise'
import 'splendid/internal/js/polyfill/replace-with'
import '../js/object.assign'
import __renameMap0 from './__rename-maps/styles/Adonais'
import makeClassGetter from './__mcg'
const renameMaps = { 'styles/Adonais.css': __renameMap0 }
import { render, h } from 'preact'
import { makeIo, init } from './__competent-lib'
import Adonais from '../components/adonais.jsx'
import Parallax1 from '../components/parallax1'
import Menu from '../components/menu.jsx'

const __components = {
  'adonais': Adonais,
  'parallax1': Parallax1,
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
  key: 'parallax1',
  id: 'c74268',
  props: {
    'background-image': '/img/seamless.jpg',
    'z-index': '-1',
    speedy: '0',
    speedx: '-0.5',
  },
},
{
  key: 'parallax1',
  id: 'c80',
  props: {
    'background-image': '/img/code2.gif',
    speedy: '0.5',
    'background-repeat': 'repeat-y',
    'z-index': '-1',
  },
},
{
  key: 'menu',
  id: 'menu',
},
{
  key: 'parallax1',
  id: 'c75046',
  props: {
    'background-image': '/img/bakst2.jpg',
  },
}]
meta.forEach(({ key, id, props = {}, children = [] }) => {
  const { parent, el } = init(id, key)
  const Comp = __components[key]
  props.splendid = { export() {}, addCSS(stylesheet) {
    return makeClassGetter(renameMaps[stylesheet])
  }, addFile() {} }
  el.render = () => {
    if (Comp.load) {
      Comp.load((err, data) => {
        if (data) Object.assign(props, data)
        if (!err) render(h(Comp, props, children), parent, el)
      }, el)
    } else render(h(Comp, props, children), parent, el)
  }
  el.render.meta = { key, id }
  io.observe(el)
})
