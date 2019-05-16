import { render } from 'preact'
import Components from '../components'

[{
  key: 'adonais',
  id: 'c9848',
  props: {
    
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
