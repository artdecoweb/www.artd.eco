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
import Logo from '../components/logo.jsx'
import Adonais from '../components/adonais.jsx'
import Menu from '../components/menu.jsx'

const __components = {
  'parallax': Parallax,
  'logo': Logo,
  'adonais': Adonais,
  'menu': Menu,
}

const io = makeIo()

/** @type {!Array<!preact.PreactProps>} */
const meta = [{
  key: 'parallax',
  id: 'c57253',
  props: {
    'background-image': '/img/bakst2.jpg',
  },
},
{
  key: 'parallax',
  id: 'c74268',
  props: {
    'background-image': '/img/seamless.jpg',
    'z-index': '-1',
    speedy: '0',
    speedx: '-0.5',
  },
},
{
  key: 'logo',
  id: 'c75046',
},
{
  key: 'adonais',
  id: 'c80',
  props: {
    class: 'position-relative mb-3 align-top',
  },
},
{
  key: 'parallax',
  id: 'c9848',
  props: {
    'background-image': '/img/code2.gif',
    speedy: '0.5',
    'background-repeat': 'repeat-y',
    'z-index': '-1',
  },
},
{
  key: 'menu',
  id: 'menu',
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
