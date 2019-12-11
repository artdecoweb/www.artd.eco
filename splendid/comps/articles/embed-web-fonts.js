import __initBottom from '../__init/bottom'
import '../../js/load-background-img'
import makeClassGetter from '../__mcg'
const renameMaps = {  }
__initBottom()
import { Component, render, h } from '@externs/preact'
import { makeIo, init, start } from '../__competent-lib'
import BackTo from '../../../articles/components/back-to.js'
import Highlightjs from 'splendid/build/components/highlightjs'
import Parallax from 'splendid/build/components/parallax'
import SocialButtons from 'splendid/build/components/social-buttons'

const __components = {
  'back-to': BackTo,
  'highlightjs': Highlightjs,
  'parallax': Parallax,
  'social-buttons': SocialButtons,
}

const io = makeIo()

/** @type {!Array<!preact.PreactProps>} */
const meta = [{
  key: 'highlightjs',
  id: 'c6ce5',
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
  id: 'c1602',
  props: {
    lang: 'xml,css',
  },
},
{
  key: 'back-to',
  id: 'c6965',
  props: {
    name: 'fig-74268',
  },
},
{
  key: 'back-to',
  id: 'ce513',
  props: {
    name: 'fig-9848',
  },
},
{
  key: 'social-buttons',
  id: 'c6a73',
  props: {
    url: 'https://www.artd.eco/articles/embedding-critical-path-fonts.html',
    meta: true,
  },
},
{
  key: 'highlightjs',
  id: 'ccdbf',
  props: {
    lang: 'javascript',
  },
},
{
  key: 'back-to',
  id: 'c9412',
  props: {
    name: 'fig-data-url',
  },
},
{
  key: 'social-buttons',
  id: 'c9f74',
  props: {
    url: 'https://www.artd.eco/articles/embedding-critical-path-fonts.html',
    size: 24,
    meta: true,
  },
},
{
  key: 'back-to',
  id: 'c8e80',
  props: {
    name: 'fig-80',
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
  key: 'parallax',
  id: 'c8757',
  props: {
    'background-image': '../articles/img/tile.jpg',
  },
},
{
  key: 'parallax',
  id: 'c709f,c709f1,c709f2,c709f3',
  props: {
    'background-image': '/img/letters/background.png',
    speedy: '-0.5',
  },
}]
meta.forEach(({ key, id, props = {}, children = [] }) => {
  const Comp = __components[key]
  const plain = Comp.plain || (/^\s*class\s+/.test(Comp.toString()) && !Component.isPrototypeOf(Comp))
  props.splendid = { mount: '/', addCSS(stylesheet) {
    return makeClassGetter(renameMaps[stylesheet])
  } }

  const ids = id.split(',')
  ids.forEach((Id) => {
    const { parent, el } = init(Id, key)
    if (!el) return
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
