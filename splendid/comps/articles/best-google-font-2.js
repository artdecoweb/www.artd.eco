import __initBottom from '../__init/bottom'
import '../../js/load-background-img'
import makeClassGetter from '../__mcg'
const renameMaps = {  }
__initBottom()
import { makeIo, init, startPlain } from '../__competent-lib'
import Highlightjs from 'splendid/build/components/highlightjs'
import Parallax from 'splendid/build/components/parallax'
import Animation from '../../components/animation.js'

const __components = {
  'highlightjs': Highlightjs,
  'parallax': Parallax,
  'animation': Animation,
}

const io = makeIo()

const meta = [{
  key: 'highlightjs',
  id: 'c6ce5,c6ce51,c6ce52,c6ce53',
  props: {
    lang: 'xml,javascript',
  },
},
{
  key: 'highlightjs',
  id: 'c724c',
  props: {
    lang: 'shell',
  },
},
{
  key: 'highlightjs',
  id: 'c1602,c16021',
  props: {
    lang: 'xml,css',
  },
},
{
  key: 'highlightjs',
  id: 'c16f7',
  props: {
    lang: 'xml',
  },
},
{
  key: 'parallax',
  id: 'c5471',
  props: {
    'background-image': '/img/tile.jpg',
  },
},
{
  key: 'highlightjs',
  id: 'ccdbf,ccdbf1,ccdbf2,ccdbf3,ccdbf4,ccdbf5,ccdbf6',
  props: {
    lang: 'javascript',
  },
},
{
  key: 'animation',
  id: 'c5f46',
  props: {
    path: 'best-google-font-2/animate/async-google-font.json',
    width: '505',
    height: '299',
    align: 'right',
  },
},
{
  key: 'highlightjs',
  id: 'c1d47',
  props: {
    lang: 'css',
  },
},
{
  key: 'highlightjs',
  id: 'cbdf7',
  props: {
    lang: 'xml,javascript,css',
  },
},
{
  key: 'animation',
  id: 'c228f',
  props: {
    path: 'best-google-font-2/animate/advanced-google-font.json',
    width: '505',
    height: '299',
  },
},
{
  key: 'parallax',
  id: 'c709f,c709f1,c709f2,c709f3,c709f4,c709f5,c709f6,c709f7,c709f8',
  props: {
    'background-image': '/img/letters/background.png',
    speedy: '-0.5',
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
