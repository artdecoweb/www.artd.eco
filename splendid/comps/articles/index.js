import __initBottom from '../__init/bottom'
import '../../js/load-background-img'
import makeClassGetter from '../__mcg'
const renameMaps = {  }
__initBottom()
import { makeIo, init, startPlain } from '../__competent-lib'
import Parallax from '../../../node_modules/splendid/src/components/parallax.js'

const __components = {
  'parallax': Parallax,
}

const io = makeIo()

const meta = [{
  key: 'parallax',
  id: 'c0c34',
  props: {
    'background-image': './img/tile.jpg',
  },
}]
meta.forEach(({ key, id, props = {}, children = [] }) => {
  const Comp = __components[key]
  const plain = true
  props.splendid = { addCSS(stylesheet) {
    return makeClassGetter(renameMaps[stylesheet])
  } }

  const ids = id.split(',')
  ids.forEach((Id) => {
    const { parent, el } = init(Id, key)
    const renderMeta = /** @type {_competent.RenderMeta} */ ({ key, id: Id, plain })
    let comp
    el.render = () => {
      comp = startPlain(renderMeta, Comp, comp, el, parent, props, children)
      return comp
    }
    el.render.meta = renderMeta
    io.observe(el)
  })
})
