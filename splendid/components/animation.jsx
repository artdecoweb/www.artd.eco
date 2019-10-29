/* eslint-env browser */
import loadScripts from '@lemuria/load-scripts'

export default class Animation {
  /**
   * @param {Element} el
   */
  constructor(el) {
    this.el = el
  }
  /**
   *
   */
  static get 'plain'() {
    return true
  }
  /**
   * @suppress {checkTypes}
   */
  static 'load'(callback, el, props) {
    const scripts = [
      props.path,
      props.debug ? '/snapsvg/dist/snap.svg.js' : '/snapsvg/dist/snap.svg-min.js',
      ...(props.debug ? [] : ['/js/svg-anim.js']),
    ]
    loadScripts(scripts, (err, res) => {
      if (err) return callback(err)
      try {
        const [json] = /** @type {!Array<string>}*/ (res)
        callback(null, { json: JSON.parse(/** @type {string} */ (json)) })
      } catch (er) {
        callback(er)
      }
    })
  }

  serverRender({ splendid, class: cl, alt, src }) {
    splendid.export()
    const c = cl ? `position-relative ${cl}` : 'position-relative'
    // specify noscript version
    return (<div className={c}>
      <splendid-img img-fluid placeholder-auto alt={alt} src={src} />
    </div>)
  }
  static get 'allowedProps'() {
    return ['path', 'width', 'height', 'align', 'debug']
  }
  render({ json, width, height, align }) {
    // this.el.removeChild(this.el.querySelector('noscript'))
    const img = this.el.querySelector('img')

    /** @type {!_snapsvgAnimator.SVGAnim} */
    const comp = new window['SVGAnim'](json, width, height)
    const svg = /** @type {!SVGElement} */ (comp.s.node)
    svg.style.position = 'absolute'
    svg.style.top = 0
    if (align == 'right') svg.style.right = 0
    else if (align == 'center') {
      svg.style.right = 0
      svg.style.left = 0
      svg.style.margin = '0 auto'
    }
    else svg.style.left = 0
    svg.style.maxWidth = '100%'
    svg.removeAttribute('height')
    this.el.appendChild(svg)

    setTimeout(() => {
      img.style.opacity = 0
    }, 100)
  }
}

/**
 * @param {Object} props
 * @param {Splendid} props.splendid
 * @param {string} props.path The path to the JSON.
 * @param {string} props.src The placeholder image.
 */
Animation['animation-server'] = async (props) => {
  let { splendid, path, src, ...Props } = props
  if (!path.endsWith('.json')) throw splendid.newError('Expected path to end with .json')
  const Path = splendid.resolveRelative(path)
  await splendid.addFile(Path)

  if (!props.dev) {
    // svg-anim
    splendid.preload('/js/svg-anim.js', 'script')
    await splendid.addFile('/js/svg-anim.js.map')
    // snap min
    splendid.preload('node_modules://snapsvg/dist/snap.svg-min.js', 'script')
    splendid.addExtern('node_modules://@artdeco/snapsvg-animator/types/externs.js')
  } else {
    // svg-anim
    splendid.addScript('js/svg-anim-src.js', true, {}, true)
    // snap
    splendid.preload('node_modules://snapsvg/dist/snap.svg.js', 'script')
  }

  delete props.path
  return <animation path={`/${Path}`} src={src} {...Props} />
}

// export default function menu({ splendid }) {
//   splendid.export()
//   return (<div id="menu">Menu</div>)
// }
/**
 * @typedef {import('splendid/src/Splendid').default} Splendid
 */