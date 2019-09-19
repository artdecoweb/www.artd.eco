import '../js/load-noise'
import 'splendid/internal/js/polyfill/replace-with'
import '../js/bottom'
import 'splendid/internal/js/polyfill/object.assign'
import __renameMap0 from './__rename-maps/styles/Adonais'
import makeClassGetter from './__mcg'
const renameMaps = { 'styles/Adonais.css': __renameMap0 }
import { render, h } from 'preact'
import { makeIo, init } from './__competent-lib'
import Parallax from '../components/parallax'
import Adonais from '../components/adonais.jsx'
import Menu from '../components/menu.jsx'

const __components = {
  'parallax': Parallax,
  'adonais': Adonais,
  'menu': Menu,
}

const io = makeIo()

/** @type {!Array<!preact.PreactProps>} */
const meta = [{
  key: 'parallax',
  id: 'c9848',
  props: {
    'background-image': '/img/seamless.jpg',
    'z-index': '-1',
    speedy: '0',
    speedx: '-0.5',
  },
},
{
  key: 'parallax',
  id: 'c74268',
  props: {
    'background-image': '/img/code2.gif',
    speedy: '0.5',
    'background-repeat': 'repeat-y',
    'z-index': '-1',
  },
},
{
  key: 'adonais',
  id: 'c80',
  props: {
    class: 'position-relative mb-3 align-top',
  },
},
{
  key: 'menu',
  id: 'menu',
},
{
  key: 'parallax',
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
    const r = () => {
      if (Comp['plain']) {
        const comp = new Comp(el, parent)
        comp.render({ ...props, children })
      } else render(h(Comp, props, children), parent, el)
    }
    if (Comp.load) {
      Comp.load((err, data) => {
        if (data) Object.assign(props, data)
        if (!err) r()
      }, el, props)
    } else r()
  }
  el.render.meta = { key, id }
  io.observe(el)
})
