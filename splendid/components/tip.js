export default class Tip {
  /**
   * @param {!HTMLParagraphElement} el
   */
  constructor(el) {
    this.el = el
  }
  static get 'plain'() {
    return true
  }
  render() {
    const div = this.el.querySelector('div')
    const p = this.el.querySelector('p')
    p.addEventListener('mousemove', (ev) => {
      const { left, top, height } = div.getBoundingClientRect() // resize account?
      var x = ev.pageX - left
      var y = height - (ev.pageY - window.scrollY - top)
      const tanθ = y / x
      const θ = Math.atan(tanθ)
      const deg = θ * 180 / Math.PI
      p.style.background = `linear-gradient(${deg}deg, transparent, #e3d6ce)`
      // console.log(ev.pageX, ev.pageY, x, y, deg)
    })
  }
}

export const plain = true