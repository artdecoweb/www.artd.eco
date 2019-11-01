import __initBottom from './__init/bottom'
import '../js/load-background-img'
import __renameMap0 from './__rename-maps/styles/Adonais'
import __renameMap1 from './__rename-maps/styles/Logo'
import makeClassGetter from './__mcg'
const renameMaps = { 'styles/Adonais.css': __renameMap0,
  'styles/Logo.css': __renameMap1 }
__initBottom()
import { makeIo, init, startPlain } from './__competent-lib'
import Logo from '../components/logo.js'
import Menu from '../components/menu.js'
import Parallax from 'splendid/build/components/parallax'
import Adonais from '../components/adonais.js'

const __components = {
  'logo': Logo,
  'menu': Menu,
  'parallax': Parallax,
  'adonais': Adonais,
}

const io = makeIo()

const meta = [{
  key: 'logo',
  id: 'Logo',
},
{
  key: 'menu',
  id: 'c57253',
},
{
  key: 'parallax',
  id: 'c74268',
  props: {
    'background-image': '/img/code2.gif',
    speedy: '0.5',
  },
},
{
  key: 'parallax',
  id: 'c75046',
  props: {
    'background-image': '/img/bakst2.jpg',
  },
},
{
  key: 'parallax',
  id: 'c80',
  props: {
    'background-image': '/img/seamless.jpg',
    speedy: '0',
    speedx: '-0.5',
  },
},
{
  key: 'adonais',
  id: 'c9848',
}]
meta.forEach(({ key, id, props = {}, children = [] }) => {
  const { parent, el } = init(id, key)
  const Comp = __components[key]
  const plain = true
  const renderMeta = /** @type {_competent.RenderMeta} */ ({ key, id, plain })
  let comp
  props.splendid = { export() {}, addCSS(stylesheet) {
    return makeClassGetter(renameMaps[stylesheet])
  }, addFile() {} }
  el.render = () => {
    comp = startPlain(renderMeta, Comp, comp, el, parent, props, children)
    return comp
  }
  el.render.meta = renderMeta
  io.observe(el)
})
