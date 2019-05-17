import { Component } from 'preact'

class Adonais extends Component {
  constructor() {
    super()
    this.state = { hint: null }
    // this.state = { hint: 'test', x: 10, y:10 }
  }
  render({ splendid }) {
    splendid.export()
    return (<span className="Adonais" style="display:inline-block;float:left;position:relative;padding-right:1rem;">
      <img src="img/adonais/back.jpg" style="position:relative; opacity:0;" />
      <img src="img/adonais/back.jpg" />
      {this.state.hint && <span className="AdonaisCopy" style={{ position: 'absolute', top: this.state.y, left: this.state.x }}>
        <span className="AdonaisNoise">
          {this.state.hint}
        </span>
      </span>}
      <img className="A" src="img/adonais/a2.png" style="top:112px;left:219px;" onMouseOver={() => {
        this.setState({
          hint: 'Art Deco specialises on the full spectrum of Node.JS development.',
        })
        // const img = /** @type {HTMLImageElement} */ (e.currentTarget)
        // const prop = img.width / img.naturalWidth
        // console.log('mouse over %s', prop)
      }} onMouseOut={() => {
        this.setState({ hint: null })
      }} onMouseMove={(e) => {
        if (!this.state.hint) return
        const img = /** @type {HTMLImageElement} */ (e.currentTarget)
        const state = { x: parseInt(img.style.left, 10) + e.offsetX, y: parseInt(img.style.top, 10) + e.offsetY }
        console.log(state)
        this.setState(state)
      }}/>
    </span>
    )
  }
}

export default Adonais