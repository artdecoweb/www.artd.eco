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
  id: 'c78401',
  props: {
    lang: 'xml,javascript,css',
  },
},
{
  key: 'parallax',
  id: 'c61157',
  props: {
    'background-image': '/img/tile.jpg',
  },
},
{
  key: 'animation',
  id: 'c57883',
  props: {
    path: 'best-google-font-2/animate/async-google-font.json',
    width: '505',
    height: '299',
    align: 'right',
  },
},
{
  key: 'parallax',
  id: 'c59284',
  props: {
    'background-image': '/img/letters/background.png',
    speedy: '-0.5',
  },
},
{
  key: 'highlightjs',
  id: 'c57253',
  props: {
    lang: 'xml,javascript',
  },
},
{
  key: 'highlightjs',
  id: 'c45018',
  props: {
    lang: 'javascript',
  },
},
{
  key: 'parallax',
  id: 'c16379',
  props: {
    'background-image': '/img/letters/background.png',
    speedy: '-0.5',
  },
},
{
  key: 'parallax',
  id: 'c56385',
  props: {
    'background-image': '/img/letters/background.png',
    speedy: '-0.5',
  },
},
{
  key: 'parallax',
  id: 'c52507',
  props: {
    'background-image': '/img/letters/background.png',
    speedy: '-0.5',
  },
},
{
  key: 'parallax',
  id: 'c27532',
  props: {
    'background-image': '/img/letters/background.png',
    speedy: '-0.5',
  },
},
{
  key: 'parallax',
  id: 'c25081',
  props: {
    'background-image': '/img/letters/background.png',
    speedy: '-0.5',
  },
},
{
  key: 'highlightjs',
  id: 'c82466',
  props: {
    lang: 'xml',
  },
},
{
  key: 'highlightjs',
  id: 'c70819',
  props: {
    lang: 'css',
  },
},
{
  key: 'highlightjs',
  id: 'c65987',
  props: {
    lang: 'xml,javascript',
  },
},
{
  key: 'highlightjs',
  id: 'c70368',
  props: {
    lang: 'javascript',
  },
},
{
  key: 'highlightjs',
  id: 'c66833',
  props: {
    lang: 'xml,javascript',
  },
},
{
  key: 'parallax',
  id: 'c95958',
  props: {
    'background-image': '/img/letters/background.png',
    speedy: '-0.5',
  },
},
{
  key: 'highlightjs',
  id: 'c97934',
  props: {
    lang: 'shell',
  },
},
{
  key: 'parallax',
  id: 'c72096',
  props: {
    'background-image': '/img/letters/background.png',
    speedy: '-0.5',
  },
},
{
  key: 'highlightjs',
  id: 'c84852',
  props: {
    lang: 'javascript',
  },
},
{
  key: 'highlightjs',
  id: 'c74268',
  props: {
    lang: 'javascript',
  },
},
{
  key: 'parallax',
  id: 'c86907',
  props: {
    'background-image': '/img/letters/background.png',
    speedy: '-0.5',
  },
},
{
  key: 'highlightjs',
  id: 'c88891',
  props: {
    lang: 'xml,css',
  },
},
{
  key: 'highlightjs',
  id: 'c73556',
  props: {
    lang: 'xml,css',
  },
},
{
  key: 'highlightjs',
  id: 'c82499',
  props: {
    lang: 'javascript',
  },
},
{
  key: 'highlightjs',
  id: 'c75046',
  props: {
    lang: 'xml,javascript',
  },
},
{
  key: 'animation',
  id: 'c84504',
  props: {
    path: 'best-google-font-2/animate/advanced-google-font.json',
    width: '505',
    height: '299',
  },
},
{
  key: 'highlightjs',
  id: 'c80',
  props: {
    lang: 'javascript',
  },
},
{
  key: 'highlightjs',
  id: 'c9848',
  props: {
    lang: 'javascript',
  },
}]
meta.forEach(({ key, id, props = {}, children = [] }) => {
  const { parent, el } = init(id, key)
  const Comp = __components[key]
  const plain = true
  const renderMeta = /** @type {_competent.RenderMeta} */ ({ key, id, plain })
  let comp
  props.splendid = { addCSS(stylesheet) {
    return makeClassGetter(renameMaps[stylesheet])
  } }
  el.render = () => {
    comp = startPlain(renderMeta, Comp, comp, el, parent, props, children)
    return comp
  }
  el.render.meta = renderMeta
  io.observe(el)
})
