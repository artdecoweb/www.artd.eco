/* eslint-env browser */
import { loadStyle } from '@lemuria/load-scripts'

class Adonais {
  /**
   * @param {Element} el
   * @param {Element} parent
   */
  constructor(el, parent) {
    this.el = el
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
    let style = false, div = true
    const cb = () => {
      if (div && style) callback(null)
    }
    loadStyle('css/Adonais.css', () => {
      style = true
      cb()
    })
    // loadJSON('/parts/adonais.html', (err, h) => {
    //   // html = h
    //   const iframe = document.createElement('iframe')
    //   iframe.style.opacity = 0
    //   document.body.appendChild(iframe)
    //   iframe.contentWindow.document.open()
    //   iframe.contentWindow.document.write(h)
    //   iframe.contentWindow.document.close()
    //   iframe.onload = () => {
    //     div = iframe.contentWindow.document.body.firstElementChild
    //     cb()
    //     document.body.removeChild(iframe)
    //   }
    // })
  }
  render() {
    const div = document.createElement('div')

    div.innerHTML = this.parent.querySelector('noscript').innerText

    const [img, ...children] = div.firstElementChild.children
    const existingImg = this.el.firstElementChild
    existingImg.src = img.src
    this.el.className += ' RunFadeIn'
    children.forEach((c) => {
      this.el.appendChild(c)
    })
  }
}

export default Adonais