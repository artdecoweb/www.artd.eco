import __initBottom from '../__init/bottom'
import '../../../articles/best-google-font/script'
import '../../js/load-background-img'
import makeClassGetter from '../__mcg'
const renameMaps = {  }
__initBottom()
import { Component, render, h } from '@externs/preact'
import { makeIo, init, start } from '../__competent-lib'
import Animation from '../../components/animation.js'
import Highlightjs from '../../../node_modules/splendid/src/components/highlightjs.js'
import Parallax from '../../../node_modules/splendid/src/components/parallax.js'
import SocialButtons from '../../../node_modules/splendid/src/components/social-buttons.jsx'
import Tip from '../../components/tip.js'

const __components = {
  'animation': Animation,
  'highlightjs': Highlightjs,
  'parallax': Parallax,
  'social-buttons': SocialButtons,
  'tip': Tip,
}

const io = makeIo()

/** @type {!Array<!preact.PreactProps>} */
const meta = [{
  key: 'highlightjs',
  id: 'c6ce5,c6ce51,c6ce52,c6ce53,c6ce54',
  props: {
    lang: 'xml,javascript',
  },
},
{
  key: 'highlightjs',
  id: 'c16f7,c16f71',
  props: {
    lang: 'xml',
  },
},
{
  key: 'tip',
  id: 'c716e',
},
{
  key: 'social-buttons',
  id: 'c23c7',
  props: {
    url: 'https://www.artd.eco/articles/how-to-load-google-fonts-asynchronously.html',
    subject: 'How To Load Google Fonts Asynchronously.',
    size: '24',
    title: 'Using performance measurement, we analyse how a web page is loaded and show how to embed web font stylesheet asynchronously to avoid blocks and reflows.',
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
  key: 'animation',
  id: 'c65b9',
  props: {
    path: 'best-google-font/animate/agf.json',
    width: '550',
    height: '400',
    align: 'center',
  },
},
{
  key: 'social-buttons',
  id: 'c1c0c',
  props: {
    url: 'https://www.artd.eco/articles/how-to-load-google-fonts-asynchronously.html',
    subject: 'How To Load Google Fonts Asynchronously.',
    title: 'Using performance measurement, we analyse how a web page is loaded and show how to embed web font stylesheet asynchronously to avoid blocks and reflows.',
  },
},
{
  key: 'animation',
  id: 'cde7b',
  props: {
    path: 'best-google-font/animate/aligator.json',
    width: '74',
    height: '36',
  },
},
{
  key: 'highlightjs',
  id: 'c1d47,c1d471',
  props: {
    lang: 'css',
  },
},
{
  key: 'parallax',
  id: 'c709f,c709f1,c709f2,c709f3,c709f4,c709f5,c709f6,c709f7',
  props: {
    'background-image': '/img/letters/background.png',
    speedy: '-0.5',
  },
}]
meta.forEach(({ key, id, props = {}, children = [] }) => {
  const Comp = __components[key]
  const plain = Comp.plain || (/^\s*class\s+/.test(Comp.toString()) && !Component.isPrototypeOf(Comp))
  props.splendid = { addCSS(stylesheet) {
    return makeClassGetter(renameMaps[stylesheet])
  } }

  const ids = id.split(',')
  ids.forEach((Id) => {
    const { parent, el } = init(Id, key)
    const renderMeta = /** @type {_competent.RenderMeta} */ ({ key, id: Id, plain })
    let comp
    el.render = () => {
      comp = start(renderMeta, Comp, comp, el, parent, props, children, { render, Component, h })
      return comp
    }
    el.render.meta = renderMeta
    io.observe(el)
  })
})
