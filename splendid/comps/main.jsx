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
    'background-image': '/img/seamless.jpg',
class: 'text-center col-lg-3 align-self-stretch mb-3 text-center',
  },
  children: ["\n    <div class=\"d-flex justify-content-center\" style=\"height:100%;\">\n      <img src=\"img/images2.png\" class=\"img-fluid align-self-center\">\n    </div>\n  "],
},
{
  key: 'parallax',
  id: 'c80',
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
