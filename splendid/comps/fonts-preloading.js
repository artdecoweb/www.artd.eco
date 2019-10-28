import __initBottom from './__init/bottom'
import '../js/load-background-img'
import makeClassGetter from './__mcg'
const renameMaps = {  }
__initBottom()
import { Component, render, h } from 'preact'
import { makeIo, init, start } from './__competent-lib'
import Parallax from '../../node_modules/splendid/src/components/parallax.jsx'

const __components = {
  'parallax': Parallax,
}

const io = makeIo()

/** @type {!Array<!preact.PreactProps>} */
const meta = [{
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
  id: 'c57253',
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
  id: 'c74268',
  props: {
    speedy: '-0.5',
    'z-index': '-1',
    'background-image': '/img/letters/background.png',
  },
},
{
  key: 'parallax',
  id: 'c75046',
  props: {
    speedy: '-0.5',
    'z-index': '-1',
    'background-image': '/img/letters/background.png',
  },
},
{
  key: 'parallax',
  id: 'c80',
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
    'background-image': '/img/tile.jpg',
  },
},
{
  key: 'parallax',
  id: 'c9848',
  props: {
    speedy: '-0.5',
    'z-index': '-1',
    'background-image': '/img/letters/background.png',
  },
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
