import __initBottom from '../__init/bottom'
import '../../js/load-background-img'
import makeClassGetter from '../__mcg'
const renameMaps = {  }
__initBottom()
import { makeIo, init, startPlain } from '../__competent-lib'
import Parallax from 'splendid/build/components/parallax'

const __components = {
  'parallax': Parallax,
}

const io = makeIo()

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
  const plain = true
  const renderMeta = /** @type {_competent.RenderMeta} */ ({ key, id, plain })
  let comp
  props.splendid = { export() {}, addCSS(stylesheet) {
    return makeClassGetter(renameMaps[stylesheet])
  }, addFile() {} }
  el.render = () => {
    comp = startPlain(renderMeta, Comp, comp, el, parent, props, children)
    return comp
  }
  el.render.meta = renderMeta
  io.observe(el)
})
