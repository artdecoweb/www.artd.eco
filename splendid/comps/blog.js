import '../js/load-background-img'
import '../js/bottom'
import 'splendid/internal/js/polyfill/object.assign'
import makeClassGetter from './__mcg'
const renameMaps = {  }
import { render, h } from 'preact'
import { makeIo, init } from './__competent-lib'
import Parallax from '../components/parallax.jsx'

const __components = {
  'parallax': Parallax,
}

const io = makeIo()

/** @type {!Array<!preact.PreactProps>} */
const meta = [{
  key: 'parallax',
  id: 'c9848',
  props: {
    'background-image': '/img/tile.jpg',
  },
}]
meta.forEach(({ key, id, props = {}, children = [] }) => {
  const { parent, el } = init(id, key)
  const Comp = __components[key]
  props.splendid = { export() {}, addCSS(stylesheet) {
    return makeClassGetter(renameMaps[stylesheet])
  }, addFile() {} }
  el.render = () => {
    const r = () => {
      if (Comp['plain']) {
        const comp = new Comp(el, parent)
        comp.render({ ...props, children })
      } else render(h(Comp, props, children), parent, el)
    }
    if (Comp.load) {
      Comp.load((err, data) => {
        if (data) Object.assign(props, data)
        if (!err) r()
      }, el, props)
    } else r()
  }
  el.render.meta = { key, id }
  io.observe(el)
})
