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
    return (<p rounded style="border:1px dashed #decdb9" margin-left="2rem" margin-right="2rem" background="linear-gradient(45deg, transparent, #e3d6ce)" padding=".5rem">
      <splendid-img placeholder-width="120" placeholder-height="42" alt="finger pointer" src="pages/articles/avatar/pointer.svg"
        float="left" style="width:120px" mt-3 mr-3 />
      {children}
    </p>)
  }
  render() {
    const { left, top, width, height } = this.el.getBoundingClientRect() // resize account?
    this.el.addEventListener('mousemove', (ev) => {
      var x = ev.pageX - left
      var y = height - (ev.pageY - window.scrollY - top)
      const tanθ = y / x
      const θ = Math.atan(tanθ)
      const deg = θ * 180 / Math.PI
      this.el.style.background = `linear-gradient(${deg}deg, transparent, #e3d6ce)`
      // console.log(ev.pageX, ev.pageY, x, y, deg)
    })
  }
}