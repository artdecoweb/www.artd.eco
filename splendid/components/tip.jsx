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
  serverRender({ children, splendid }) {
    splendid.export()
    return (<bootstrap-div position-relative><p p-2 rounded border="1px dashed #decdb9" margin-left="2rem" margin-right="2rem" background="linear-gradient(45deg, transparent, #e3d6ce)">
      <splendid-img placeholder-width="120" placeholder-height="42" alt="finger pointer" src="~/articles/avatar/pointer.svg"
        float="left" style="width:120px" mt-3 mr-3 />
      {children}
    </p><div className="position-absolute" style="z-index:-1;top:0;left:0;bottom:0;right:0"/></bootstrap-div>)
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
  static get 'allowedProps'() { return [] }
}