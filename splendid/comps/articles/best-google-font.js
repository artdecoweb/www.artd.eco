import __initBottom from '../__init/bottom'
import '../../../articles/best-google-font/script'
import '../../js/load-background-img'
import makeClassGetter from '../__mcg'
const renameMaps = {  }
__initBottom()
import { Component, render, h } from '@externs/preact'
import { makeIo, init, start } from '../__competent-lib'
import Parallax from 'splendid/build/components/parallax'
import Highlightjs from 'splendid/build/components/highlightjs'
import Animation from '../../components/animation.js'
import Tip from '../../components/tip.js'
import SocialButtons from 'splendid/build/components/social-buttons'

const __components = {
  'parallax': Parallax,
  'highlightjs': Highlightjs,
  'animation': Animation,
  'tip': Tip,
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
  id: 'c16f7,c16f71,c16f72',
  props: {
    lang: 'xml',
  },
},
{
  key: 'tip',
  id: 'c716e',
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
  key: 'highlightjs',
  id: 'c1d47,c1d471',
  props: {
    lang: 'css',
  },
},
{
  key: 'social-buttons',
  id: 'ce856',
  props: {
    url: 'https://www.artd.eco/articles/how-to-load-google-fonts-asynchronously.html',
    subject: 'How To Load Google Fonts Asynchronously.',
    size: '24',
    title: 'Loading Google Font in standard manner will block rendering and reduce page speed. Part I shows how to embed web font stylesheet asynchronously.',
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
