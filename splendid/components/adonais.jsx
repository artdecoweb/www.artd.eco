import { loadStyle, loadJSON } from '@lemuria/load-scripts'

const makeDataSvg = (width, height) => {
  const svg = `%3Csvg xmlns='http://www.w3.org/2000/svg' width='${width}' height='${height}'/%3E`
  return `data:image/svg+xml,${svg}`
}

class Adonais {
  constructor(el, parent) {
    /**
     * @type {Element}
     */
    this.el = el
    /**
     * @type {Element}
     */
    this.parent = parent
  }
  /**
   * @suppress {checkTypes}
   */
  static get 'plain'() {
    return true
  }
  /**
   * @suppress {checkTypes}
   */
  static 'load'(callback) {
    let style = false, div
    const cb = () => {
      if (div && style) callback(null, { div })
    }
    loadStyle('css/Adonais.css', () => {
      style = true
      cb()
    })
    loadJSON('/parts/adonais.html', (err, h) => {
      // html = h
      const iframe = document.createElement('iframe')
      iframe.style.opacity = 0
      document.body.appendChild(iframe)
      iframe.contentWindow.document.open()
      iframe.contentWindow.document.write(h)
      iframe.contentWindow.document.close()
      iframe.onload = () => {
        div = iframe.contentWindow.document.body.firstElementChild
        cb()
        document.body.removeChild(iframe)
      }
    })
  }
  render({ div }) {
    const [img, ...children] = div.children
    const existingImg = this.el.firstElementChild
    existingImg.src = img.src
    this.el.className += ' RunFadeIn'
    children.forEach((c) => {
      this.el.appendChild(c)
    })
  }
}

export default Adonais