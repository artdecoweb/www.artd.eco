const renameMaps = {
  "styles/Adonais.css": {
    "Letter": "a",
    "Image": "b",
    "A": "c",
    "I": "d",
    "Copy": "e",
    "Noise": "f"
  }
}
import makeClassGetter from './__mcg'
import { render } from 'preact'
import Components from '../components'

[{
  key: 'adonais',
  id: 'c9848',
}]
  .map(({ key, id, props = {}, children }) => {
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
    props.splendid = { export() {}, addCSS(stylesheet) {
      return makeClassGetter(renameMaps[stylesheet])
    } }
    render(h(Comp, props, children), parent, el)
  })
