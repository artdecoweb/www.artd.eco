import __initBottom from '../__init/bottom'
import '../../../articles/best-google-font/script'
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
import Tip from '../../components/tip.js'

const __components = {
  'animation': Animation,
  'back-to': BackTo,
  'highlightjs': Highlightjs,
  'parallax': Parallax,
  'social-buttons': SocialButtons,
  'tip': Tip,
}

const io = makeIo()

/** @type {!Array<!preact.PreactProps>} */
const meta = [{
  key: 'back-to',
  id: 'cccdc',
  props: {
    name: 'fig-75046',
  },
},
{
  key: 'highlightjs',
  id: 'c6ce5,c6ce51,c6ce52,c6ce53,c6ce54',
  props: {
    lang: 'xml,javascript',
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
  key: 'highlightjs',
  id: 'c16f7,c16f71',
  props: {
    lang: 'xml',
  },
},
{
  key: 'back-to',
  id: 'c632c',
  props: {
    name: 'fig-57253',
  },
},
{
  key: 'tip',
  id: 'c716e',
},
{
  key: 'social-buttons',
  id: 'cd871',
  props: {
    url: 'https://www.artd.eco/articles/how-to-load-google-fonts-asynchronously.html',
    size: '24',
    meta: 'true',
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
  key: 'back-to',
  id: 'c5040',
  props: {
    name: 'fig-82466',
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
  key: 'back-to',
  id: 'c8e80',
  props: {
    name: 'fig-80',
  },
},
{
  key: 'back-to',
  id: 'c7de0',
  props: {
    name: 'fig-65987',
  },
},
{
  key: 'social-buttons',
  id: 'cfc84',
  props: {
    url: 'https://www.artd.eco/articles/how-to-load-google-fonts-asynchronously.html',
    size: '36',
    meta: 'true',
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
  id: 'c8757',
  props: {
    'background-image': '../articles/img/tile.jpg',
  },
},
{
  key: 'back-to',
  id: 'c458c',
  props: {
    name: 'fig-45018',
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
