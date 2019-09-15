import { Component } from 'preact'

class Adonais extends Component {
  constructor() {
    super()
    this.state = { hint: null }
    // this.state = { hint: 'test', x: 10, y:10 }
  }
  getChildContext() {
    return {
      hint: this.state.hint,
      setHint: (hint) => {
        this.setState({ hint })
      },
      setCoordinates: ({ x, y }) => {
        this.setState({ x, y })
      },
    }
  }
  serverRender({ splendid, class: className }) {
    splendid.export()
    const cl = splendid.addCSS('styles/Adonais.css', 'Adonais')
    return (<div className={`Adonais ${className}`}>
      <img alt="Adonais: Art Deco, Documentation, Optimisation, NPM Packages, Automated Testing And Implementation" className={cl`Image`} src="img/adonais/back.jpg" style="position:relative;" />
    </div>)
  }
  render({ splendid, class: className }) {
    const cl = splendid.addCSS('styles/Adonais.css', 'Adonais')
    return (<div className={`Adonais ${className}`}>
      <img className={cl`Image`} src="img/adonais/back.jpg" style="position:relative; opacity:0;" />
      <img className={cl`Image`} src="img/adonais/back.jpg" />
      {this.state.hint && <span className={cl`Copy`} style={{ 'z-index': 2, position: 'absolute', top: this.state.y + 15 , left: this.state.x + 15 }}>
        <span className={cl`Noise`}>{this.state.hint}</span>
      </span>}
      <Letter file="img/adonais/a2.png" top={112} left={219} class={cl`A Image`} href="#art-deco">
        <strong className={cl`Letter`}>A</strong>rt Deco creates products for the modern web using back-end Node.JS and front-end JavaScript, taking advantage of the best available methods.
      </Letter>
      <Letter file="img/adonais/I.png" top={208} left={175} class={cl`I Image`} href="#implementation">
        We <strong className={cl`Letter`}>I</strong>mplement software products using the latest language features and spend time on writing code rather than setting up tools and installing 3rd party dependencies.
      </Letter>
      <Letter file="img/adonais/A3.png" top={207} left={73} class={cl`A2 Image`} href="#automated-testing">
        Employed <strong className={cl`Letter`}>A</strong>utomated Testing on unit and integration levels ensures that software is bug-free and that any future changes to the codebase won't break the existing version.
      </Letter>
      <Letter file="img/adonais/D.png" top={123} left={15} class={cl`D Image`} href="#documentation">
        Full-coverage <strong className={cl`Letter`}>D</strong>ocumentation allows for long-term maintenance by us and other teams and is full of examples and their outputs that also act as a quality assurance mechanism.
      </Letter>
      <Letter file="img/adonais/O.png" top={28} left={67} class={cl`O Image`} href="#optimisation">
        The <strong className={cl`Letter`}>O</strong>ptimisation of CSS stylesheets and JavaScript code, both for the server and client-side, means that transmitted bundles will load faster and improve user experience.
      </Letter>
      <Letter file="img/adonais/N.png" top={25} left={169} class={cl`N Image`} href="#npm-packages">
        Having contributed over 150 <strong className={cl`Letter`}>N</strong>PM packages, we have derived the methodology for managing dependencies that facilitate code reuse and organises workload into logical chunks.
      </Letter>
      <Letter file="img/adonais/S.png" top={120} left={125} class={cl`S Image`} href="#software">
        <strong className={cl`Letter`}>S</strong>oftware Engineering is a craft that involves implementation, testing, documentation, building and maintenance. With our holistic approach, we are able to deliver best quality software.
      </Letter>
    </div>
    )
  }
}

const Letter = ({ file, top, left, children, class: className, href }, { setHint, setCoordinates, hint }) => {
  const style = { 'top': `${top}px`, 'left': `${left}px` }
  return (<a href={href}><img className={className} src={file} style={style} onMouseOver={() => {
    setHint(children)
  }} onMouseOut={() => {
    setHint(null)
  }} onMouseMove={(e) => {
    if (!hint) return
    const img = /** @type {HTMLImageElement} */ (e.currentTarget)
    const state = {
      x: parseInt(img.style.left, 10) + e.offsetX,
      y: parseInt(img.style.top, 10) + e.offsetY,
    }
    setCoordinates(state)
  }}/></a>)
}

export default Adonais