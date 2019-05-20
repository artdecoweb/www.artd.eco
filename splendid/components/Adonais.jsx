import { Component } from 'preact'

class Adonais extends Component {
  constructor() {
    super()
    this.state = { hint: null }
    this.setHint = (hint) => {
      this.setState({ hint })
    }
    this.setCoordinates = ({ x, y }) => {
      this.setState({ x, y })
    }
    // this.state = { hint: 'test', x: 10, y:10 }
  }
  render({ splendid }) {
    splendid.export()
    const cl = splendid.addCSS('styles/Adonais.css', 'Adonais')

    return (<span className="Adonais float-left position-relative d-inline-block pr-3">
      <img className={cl`Image`} src="img/adonais/back.jpg" style="position:relative; opacity:0;" />
      <img className={cl`Image`} src="img/adonais/back.jpg" />
      {this.state.hint && <span className={cl`Copy`} style={{ position: 'absolute', top: this.state.y, left: this.state.x }}>
        <span className={cl`Noise`}>{this.state.hint}</span>
      </span>}
      <Letter file="img/adonais/a2.png" top={112} left={219} class={cl`A Image`}
        hint={this.state.hint} setHint={this.setHint} setCoordinates={this.setCoordinates}>
        <strong className={cl`Letter`}>A</strong>rt Deco creates products for the modern web using back-end Node.JS And front-end JavaScript, taking advantage of the best available methods.
      </Letter>
    </span>
    )
  }
}

const Letter = ({ file, top, left, setHint, children, setCoordinates, class: className, hint }) => {
  return (<img className={className} src={file} style={{ 'top': `${top}px`, 'left': `${left}px` }} onMouseOver={() => {
    setHint(children)
  }} onMouseOut={() => {
    setHint(null)
    // this.setState({ hint: null })
  }} onMouseMove={(e) => {
    if (!hint) return
    const img = /** @type {HTMLImageElement} */ (e.currentTarget)
    const state = {
      x: parseInt(img.style.left, 10) + e.offsetX,
      y: parseInt(img.style.top, 10) + e.offsetY,
    }
    setCoordinates(state)
    // this.setState(state)
  }}/>)
}

export default Adonais