import __initBottom from '../__init/bottom'
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

const __components = {
  'animation': Animation,
  'highlightjs': Highlightjs,
  'parallax': Parallax,
  'social-buttons': SocialButtons,
}

const io = makeIo()

/** @type {!Array<!preact.PreactProps>} */
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
  key: 'social-buttons',
  id: 'c6d6c',
  props: {
    url: 'https://www.artd.eco/articles/the-best-way-to-load-google-fonts-asynchronously.html',
    subject: 'The Best Way To Load Google Fonts Asynchronously.',
    size: '24',
    title: 'An advanced method of loading Google Fonts in the most efficient manner asynchronously to avoid render blocking and minimise the number of reflows.',
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
  key: 'parallax',
  id: 'c0c34',
  props: {
    'background-image': './img/tile.jpg',
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
