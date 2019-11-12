import __initBottom from './__init/bottom'
import '../js/load-background-img'
import __renameMap0 from './__rename-maps/styles/Adonais'
import __renameMap1 from './__rename-maps/styles/Logo'
import makeClassGetter from './__mcg'
const renameMaps = { 'styles/Adonais.css': __renameMap0,
  'styles/Logo.css': __renameMap1 }
__initBottom()
import { makeIo, init, startPlain } from './__competent-lib'
import Adonais from '../components/adonais.js'
import Logo from '../components/logo.js'
import Menu from '../components/menu.js'
import Parallax from 'splendid/build/components/parallax'

const __components = {
  'adonais': Adonais,
  'logo': Logo,
  'menu': Menu,
  'parallax': Parallax,
}

const io = makeIo()

const meta = [{
  key: 'logo',
  id: 'Logo',
},
{
  key: 'menu',
  id: 'ce4db',
},
{
  key: 'parallax',
  id: 'c7c22',
  props: {
    'background-image': '/pages/index/img/seamless.jpg',
    speedy: '0',
    speedx: '-0.5',
  },
},
{
  key: 'parallax',
  id: 'c6b51',
  props: {
    'background-image': '/img/bakst2.jpg',
  },
},
{
  key: 'adonais',
  id: 'c57d0',
},
{
  key: 'parallax',
  id: 'c8cec',
  props: {
    'background-image': '/pages/index/img/code2.gif',
    speedy: '0.5',
  },
}]
meta.forEach(({ key, id, props = {}, children = [] }) => {
  const Comp = __components[key]
  const plain = true
  props.splendid = { addCSS(stylesheet) {
    return makeClassGetter(renameMaps[stylesheet])
  } }

  const ids = id.split(',')
  ids.forEach((Id) => {
    const { parent, el } = init(Id, key)
    const renderMeta = /** @type {_competent.RenderMeta} */ ({ key, id: Id, plain })
    let comp
    el.render = () => {
      comp = startPlain(renderMeta, Comp, comp, el, parent, props, children)
      return comp
    }
    el.render.meta = renderMeta
    io.observe(el)
  })
})
