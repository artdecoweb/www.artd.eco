import __initBottom from './__init/bottom'
import '../js/load-background-img'
import __renameMap0 from './__rename-maps/styles/Adonais'
import __renameMap1 from './__rename-maps/styles/Logo'
import makeClassGetter from './__mcg'
const renameMaps = { 'styles/Adonais.css': __renameMap0,
  'styles/Logo.css': __renameMap1 }
__initBottom()
import { Component, render, h } from 'preact'
import { makeIo, init, start } from './__competent-lib'
import Parallax from '../../node_modules/splendid/src/components/parallax.jsx'
import Menu from '../components/menu.jsx'
import Logo from '../components/logo.jsx'
import Adonais from '../components/adonais.jsx'

const __components = {
  'parallax': Parallax,
  'menu': Menu,
  'logo': Logo,
  'adonais': Adonais,
}

const io = makeIo()

/** @type {!Array<!preact.PreactProps>} */
const meta = [{
  key: 'parallax',
  id: 'c45018',
  props: {
    'background-image': '/img/bakst2.jpg',
  },
},
{
  key: 'menu',
  id: 'c57253',
},
{
  key: 'parallax',
  id: 'c74268',
  props: {
    'background-image': '/img/code2.gif',
    speedy: '0.5',
    'background-repeat': 'repeat-y',
    'z-index': '-1',
  },
},
{
  key: 'logo',
  id: 'c75046',
},
{
  key: 'parallax',
  id: 'c80',
  props: {
    'background-image': '/img/seamless.jpg',
    'z-index': '-1',
    speedy: '0',
    speedx: '-0.5',
  },
},
{
  key: 'adonais',
  id: 'c9848',
  props: {
    class: 'position-relative mb-3 align-top',
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
