import __initBottom from '../__init/bottom'
import '../../js/load-background-img'
import makeClassGetter from '../__mcg'
const renameMaps = {  }
__initBottom()
import { Component, render, h } from '@externs/preact'
import { makeIo, init, start } from '../__competent-lib'
import Animation from '../../components/animation.js'
import BackTo from '../../../articles/components/back-to.js'
import Comments from '../../../articles/components/comments.jsx'
import Parallax from 'splendid/build/components/parallax'
import SocialButtons from 'splendid/build/components/social-buttons'

const __components = {
  'animation': Animation,
  'back-to': BackTo,
  'comments': Comments,
  'parallax': Parallax,
  'social-buttons': SocialButtons,
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
  key: 'back-to',
  id: 'ce427',
  props: {
    name: 'fig-97934',
  },
},
{
  key: 'parallax',
  id: 'c3f3d',
  props: {
    'background-image': '../articles/life-sucks/pyramid/politicians.png',
    speedx: '-0.5',
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
  key: 'parallax',
  id: 'c3150',
  props: {
    'background-image': '../articles/life-sucks/pyramid/capitalists2.png',
    speedx: '0.5',
  },
},
{
  key: 'social-buttons',
  id: 'c04f3',
  props: {
    url: 'https://www.artd.eco/articles/inside-uks-technocracy-and-mafia-behind-it.html',
    size: 24,
    meta: true,
  },
},
{
  key: 'parallax',
  id: 'cc379',
  props: {
    'background-image': '../articles/life-sucks/pyramid/£.png',
    speedy: '-1.5',
    speedx: '-0.75',
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
  key: 'parallax',
  id: 'c2999',
  props: {
    'background-image': '../articles/life-sucks/pyramid/propaganda2.png',
  },
},
{
  key: 'parallax',
  id: 'c4e1a',
  props: {
    'background-image': '../articles/life-sucks/pyramid/eye3.png',
  },
},
{
  key: 'back-to',
  id: 'c804a',
  props: {
    name: 'fig-84852',
  },
},
{
  key: 'parallax',
  id: 'c5436',
  props: {
    'background-image': '../articles/life-sucks/pyramid/$.png',
    speedy: '1.5',
    speedx: '-0.75',
  },
},
{
  key: 'animation',
  id: 'c4a0d',
  props: {
    path: 'life-sucks/animate/rat.json',
    width: 511,
    height: 282,
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
  key: 'comments',
  id: 'preact-div',
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
  key: 'back-to',
  id: 'cc3e7',
  props: {
    name: 'fig-88891',
  },
},
{
  key: 'animation',
  id: 'cd7b3',
  props: {
    path: 'life-sucks/animate/mark.json',
    width: 1132,
    height: 843,
  },
},
{
  key: 'parallax',
  id: 'c709f,c709f1,c709f10,c709f2,c709f3,c709f4,c709f5,c709f6,c709f7,c709f8,c709f9',
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
