const renameMaps = {
  "styles/Parallax.css": {},
  "styles/Adonais.css": {
    "Letter": "a",
    "Image": "b",
    "A": "c",
    "I": "d",
    "A2": "e",
    "D": "f",
    "O": "g",
    "N": "h",
    "S": "i",
    "Copy": "j",
    "Noise": "k"
  }
}
import makeClassGetter from './__mcg'
import { render } from 'preact'
import Components from '../components'

function makeIo() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(({ target, isIntersecting }) => {
      if (isIntersecting) {
        if (target.render) {
          console.warn('rendering component %s into the element %s ',
            target.render.meta.key, target.render.meta.id)
          target.render()
          io.unobserve(target)
        }
      }
    })
  }, { rootMargin: '0px 0px 76px 0px' })
  return io
}
const io = makeIo();[{
  key: 'adonais',
  id: 'c9848',
  props: {
    class: 'position-relative mb-3 align-top',
  },
}]
  .map(({ key, id, props = {}, children }) => {
    const el = document.getElementById(id)
    if (!el) {
      console.warn('Parent element for component %s with id %s not found', key, id)
      return
    }
    const parent = el.parentElement
    if (!parent) {
      console.warn('Parent of element for component %s with id %s not found', key, id)
      return
    }
    const Comp = Components[key]
    if (!Comp) {
      console.warn('Component with key %s was not found.', key)
      return
    }
    props.splendid = { export() {}, addCSS(stylesheet) {
      return makeClassGetter(renameMaps[stylesheet])
    } }
    parent.render = () => {
      render(h(Comp, props, children), parent, el)
    }
    parent.render.meta = { key, id }
    io.observe(parent)
  })
