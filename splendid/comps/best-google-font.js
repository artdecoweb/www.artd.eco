import __initBottom from './__init/bottom'
import '../js/svg-anim-src'
import '../js/load-background-img'
import makeClassGetter from './__mcg'
const renameMaps = {  }
__initBottom()
import { Component, render, h } from 'preact'
import { makeIo, init, start } from './__competent-lib'
import Parallax from '../../node_modules/splendid/src/components/parallax.jsx'
import Animation from '../components/animation.jsx'
import Tip from '../components/tip.jsx'

const __components = {
  'parallax': Parallax,
  'animation': Animation,
  'tip': Tip,
}

const io = makeIo()

/** @type {!Array<!preact.PreactProps>} */
const meta = [{
  key: 'parallax',
  id: 'c70819',
  props: {
    speedy: '-0.5',
    'z-index': '-1',
    'background-image': '/img/letters/background.png',
  },
},
{
  key: 'parallax',
  id: 'c95958',
  props: {
    'background-image': '/img/tile.jpg',
  },
},
{
  key: 'animation',
  id: 'c80',
  props: {
    width: '505',
    height: '299',
    align: 'right',
    path: '/pages/articles/best-google-font/animate/async-google-font.json',
  },
},
{
  key: 'animation',
  id: 'c75046',
  props: {
    width: '505',
    height: '299',
    path: '/pages/articles/best-google-font/animate/advanced-google-font.json',
  },
},
{
  key: 'parallax',
  id: 'c57253',
  props: {
    speedy: '-0.5',
    'z-index': '-1',
    'background-image': '/img/letters/background.png',
  },
},
{
  key: 'parallax',
  id: 'c45018',
  props: {
    speedy: '-0.5',
    'z-index': '-1',
    'background-image': '/img/letters/background.png',
  },
},
{
  key: 'parallax',
  id: 'c65987',
  props: {
    speedy: '-0.5',
    'z-index': '-1',
    'background-image': '/img/letters/background.png',
  },
},
{
  key: 'parallax',
  id: 'c82466',
  props: {
    speedy: '-0.5',
    'z-index': '-1',
    'background-image': '/img/letters/background.png',
  },
},
{
  key: 'parallax',
  id: 'c84852',
  props: {
    speedy: '-0.5',
    'z-index': '-1',
    'background-image': '/img/letters/background.png',
  },
},
{
  key: 'parallax',
  id: 'c88891',
  props: {
    speedy: '-0.5',
    'z-index': '-1',
    'background-image': '/img/letters/background.png',
  },
},
{
  key: 'parallax',
  id: 'c86907',
  props: {
    speedy: '-0.5',
    'z-index': '-1',
    'background-image': '/img/letters/background.png',
  },
},
{
  key: 'animation',
  id: 'c74268',
  props: {
    width: '550',
    height: '400',
    align: 'center',
    path: '/pages/articles/best-google-font/animate/agf.json',
  },
},
{
  key: 'parallax',
  id: 'c70368',
  props: {
    speedy: '-0.5',
    'z-index': '-1',
    'background-image': '/img/letters/background.png',
  },
},
{
  key: 'parallax',
  id: 'c73556',
  props: {
    speedy: '-0.5',
    'z-index': '-1',
    'background-image': '/img/letters/background.png',
  },
},
{
  key: 'parallax',
  id: 'c78401',
  props: {
    speedy: '-0.5',
    'z-index': '-1',
    'background-image': '/img/letters/background.png',
  },
},
{
  key: 'parallax',
  id: 'c66833',
  props: {
    speedy: '-0.5',
    'z-index': '-1',
    'background-image': '/img/letters/background.png',
  },
},
{
  key: 'parallax',
  id: 'c25081',
  props: {
    speedy: '-0.5',
    'z-index': '-1',
    'background-image': '/img/letters/background.png',
  },
},
{
  key: 'parallax',
  id: 'c27532',
  props: {
    speedy: '-0.5',
    'z-index': '-1',
    'background-image': '/img/letters/background.png',
  },
},
{
  key: 'parallax',
  id: 'c72096',
  props: {
    speedy: '-0.5',
    'z-index': '-1',
    'background-image': '/img/letters/background.png',
  },
},
{
  key: 'parallax',
  id: 'c52507',
  props: {
    speedy: '-0.5',
    'z-index': '-1',
    'background-image': '/img/letters/background.png',
  },
},
{
  key: 'parallax',
  id: 'c56385',
  props: {
    speedy: '-0.5',
    'z-index': '-1',
    'background-image': '/img/letters/background.png',
  },
},
{
  key: 'parallax',
  id: 'c97934',
  props: {
    speedy: '-0.5',
    'z-index': '-1',
    'background-image': '/img/letters/background.png',
  },
},
{
  key: 'tip',
  id: 'c9848',
}]
meta.forEach(({ key, id, props = {}, children = [] }) => {
  const { parent, el } = init(id, key)
  const Comp = __components[key]
  props.splendid = { export() {}, addCSS(stylesheet) {
    return makeClassGetter(renameMaps[stylesheet])
  }, addFile() {} }
  el.render = () => {
    start(Comp, el, parent, props, children, { render, Component, h })
  }
  el.render.meta = { key, id }
  io.observe(el)
})
