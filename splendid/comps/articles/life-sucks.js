import __initBottom from '../__init/bottom'
import __initResizeObserver from '../__init/resize-observer'
import '../../js/load-background-img'
import makeClassGetter from '../__mcg'
const renameMaps = {  }
__initBottom(),__initResizeObserver()
import { Component, render, h } from '@externs/preact'
import { makeIo, init, start } from '../__competent-lib'
import BackTo from '../../../articles/components/back-to.js'
import Parallax from 'splendid/build/components/parallax'
import SocialButtons from 'splendid/build/components/social-buttons'

const __components = {
  'back-to': BackTo,
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
  key: 'social-buttons',
  id: 'c977c',
  props: {
    url: 'https://www.artd.eco/articles/when-life-sucks-get-a-dot-sucks.html',
    size: '24',
    meta: 'true',
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
  key: 'parallax',
  id: 'c647b',
  props: {
    'background-image': 'img/tile.jpg',
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
  key: 'back-to',
  id: 'c632c',
  props: {
    name: 'fig-57253',
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
  key: 'parallax',
  id: 'c709f,c709f1,c709f2,c709f3,c709f4',
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
