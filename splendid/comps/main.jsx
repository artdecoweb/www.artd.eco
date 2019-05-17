import { render } from 'preact'
import Components from '../components'

[{
  key: 'adonais',
  id: 'c9848',
  props: {
    
  },
  children: [""],
},
{
  key: 'parallax',
  id: 'c74268',
  props: {
    'background-image': '/img/code2.gif',
class: 'col-lg-5 align-self-stretch',
style: 'background-repeat-x: no-repeat; margin-top:1.5rem; margin-bottom:1.5rem;padding:1.4rem;',
  },
  children: ["\n    <div class=\"d-flex justify-content-center\" style=\"height:100%;\">\n      <img alt=\"Node.JS at the epicenter of modern software development\" src=\"/img/Byss-und-Abyss.gif\" class=\"img-fluid align-self-center\" style=\"filter:drop-shadow(0 0 30px #00000047)\"/>\n    </div>\n  "],
},
{
  key: 'parallax',
  id: 'c80',
  props: {
    'background-image': '/img/seamless.jpg',
class: 'col-lg-3 align-self-stretch mb-3',
  },
  children: ["\n    <div class=\"d-flex justify-content-center\" style=\"height:100%;\">\n      <img src=\"img/images2.png\" class=\"img-fluid align-self-center\">\n    </div>\n  "],
},
{
  key: 'parallax',
  id: 'c75046',
  props: {
    style: 'height:100px;',
'background-image': '/img/bakst1.jpg',
class: 'container-fluid',
  },
  children: [""],
}]
  .map(({ key, id, props, children }) => {
    const el = document.getElementById(id)
    if (!el) {
      console.warn('Parent element for component %s with id %s not found', key, id)
      return
    }
    const parent = el.parentElement
    const Comp = Components[key]
    if (!Comp) {
      console.warn('Component with key %s was not found.', key)
      return
    }
    props.splendid = { export() {} }
    render(h(Comp, props, children), parent, el)
  })
