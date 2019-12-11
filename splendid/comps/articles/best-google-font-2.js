import __initBottom from '../__init/bottom'
import 'splendid/internal/js/smooth-scroll'
import '../../js/load-background-img'
import makeClassGetter from '../__mcg'
const renameMaps = {  }
__initBottom()
import { Component, render, h } from '@externs/preact'
import { makeIo, init, start } from '../__competent-lib'
import Animation from '../../components/animation.js'
import BackTo from '../../../articles/components/back-to.js'
import Highlightjs from 'splendid/build/components/highlightjs'
import Parallax from 'splendid/build/components/parallax'
import SocialButtons from 'splendid/build/components/social-buttons'

const __components = {
  'animation': Animation,
  'back-to': BackTo,
  'highlightjs': Highlightjs,
  'parallax': Parallax,
  'social-buttons': SocialButtons,
}

const io = makeIo()

/** @type {!Array<!preact.PreactProps>} */
const meta = [{
  key: 'highlightjs',
  id: 'c6ce5,c6ce51,c6ce52',
  props: {
    lang: 'xml,javascript',
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
  id: 'ce5ba',
  props: {
    url: 'https://www.artd.eco/articles/the-best-way-to-load-google-fonts-asynchronously.html',
    size: 24,
    meta: true,
  },
},
{
  key: 'back-to',
  id: 'ceba0',
  props: {
    name: 'fig-lemuria-font',
  },
},
{
  key: 'back-to',
  id: 'c0208',
  props: {
    name: 'fig-advanced-loading',
  },
},
{
  key: 'highlightjs',
  id: 'ccdbf,ccdbf1,ccdbf2,ccdbf3,ccdbf4,ccdbf5',
  props: {
    lang: 'javascript',
  },
},
{
  key: 'animation',
  id: 'c5f46',
  props: {
    path: 'best-google-font-2/animate/async-google-font.json',
    width: 505,
    height: 299,
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
  key: 'back-to',
  id: 'ccb6d',
  props: {
    name: 'fig-before-body',
  },
},
{
  key: 'animation',
  id: 'c228f',
  props: {
    path: 'best-google-font-2/animate/advanced-google-font.json',
    width: 505,
    height: 299,
  },
},
{
  key: 'social-buttons',
  id: 'cc4dd',
  props: {
    url: 'https://www.artd.eco/articles/the-best-way-to-load-google-fonts-asynchronously.html',
    size: 36,
    meta: true,
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
  id: 'c69e3,c69e31,c69e32,c69e33,c69e34',
  props: {
    'background-image': 'img/letters/background.png',
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
