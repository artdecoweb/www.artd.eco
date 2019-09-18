import { Component } from 'preact'
import { loadStyle } from '@lemuria/load-scripts'

const makeDataSvg = (width, height) => {
  const svg = `%3Csvg xmlns='http://www.w3.org/2000/svg' width='${width}' height='${height}'/%3E`
  return `data:image/svg+xml,${svg}`
}

class Adonais extends Component {
  get alt() {
    return 'Adonais: Art Deco, Documentation, Optimisation, NPM Packages, Automated Testing And Implementation'
  }
  // serverRender({ splendid, class: className }) {
  //   splendid.export()
  //   const cl = splendid.addCSS('styles/Adonais.css', 'Adonais', {
  //     combined: false,
  //   })
  //   splendid.hideNoJs('data-loading')
  //   splendid.addFile('img/adonais/back.jpg')

  //   const src = makeDataSvg(271, 274)
  //   return [
  //     (<div data-loading className={`Adonais ${className}`}>
  //       <img alt={this.alt} className={cl`Image`} src={src} style="position:relative;" />
  //     </div>),
  //     <noscript>
  //       <img alt={this.alt} className={cl`Image`} src="img/adonais/back.jpg" style="position:relative;" />
  //     </noscript>,
  //   ]
  //   // webp="drawing" no-potrace responsive sizes="271px"
  // }
  // /**
  //  * @suppress {checkTypes}
  //  */
  // static 'load'(callback) {
  //   loadStyle('css/Adonais.css', () => {
  //     callback()
  //   })
  // }
  render({ splendid, class: className }) {
    const cl = splendid.addCSS('styles/Adonais.css')

    // <img className={cl`Image`} src="img/adonais/back.jpg" />
    return (<div className={`Adonais ${className}`}>
      <splendid-img alt={this.alt} className={cl`Image`} src="img/adonais/back.jpg" style="position:relative" />

      <Letter letter="A" file="img/adonais/a2.png" top={112} left={219} class={cl`A Image`} href="#art-deco" cl={cl}>
        <strong className={cl`Letter`}>A</strong>rt Deco creates products for the modern web using back-end Node.JS and front-end JavaScript, taking advantage of the best available methods.
      </Letter>
      <Letter letter="I" file="img/adonais/I.png" top={208} left={175} class={cl`I Image`} href="#implementation" cl={cl}>
        We <strong className={cl`Letter`}>I</strong>mplement software products using the latest language features and spend time on writing code rather than setting up tools and installing 3rd party dependencies.
      </Letter>
      <Letter letter="A" file="img/adonais/A3.png" top={207} left={73} class={cl`A2 Image`} href="#automated-testing" cl={cl}>
        Employed <strong className={cl`Letter`}>A</strong>utomated Testing on unit and integration levels ensures that software is bug-free and that any future changes to the codebase won't break the existing version.
      </Letter>
      <Letter letter="D" file="img/adonais/D.png" top={123} left={15} class={cl`D Image`} href="#documentation" cl={cl}>
        Full-coverage <strong className={cl`Letter`}>D</strong>ocumentation allows for long-term maintenance by us and other teams and is full of examples and their outputs that also act as a quality assurance mechanism.
      </Letter>
      <Letter letter="O" file="img/adonais/O.png" top={28} left={67} class={cl`O Image`} href="#optimisation" cl={cl}>
        The <strong className={cl`Letter`}>O</strong>ptimisation of CSS stylesheets and JavaScript code, both for the server and client-side, means that transmitted bundles will load faster and improve user experience.
      </Letter>
      <Letter letter="N" file="img/adonais/N.png" top={25} left={169} class={cl`N Image`} href="#npm-packages" cl={cl}>
        Having contributed over 150 <strong className={cl`Letter`}>N</strong>PM packages, we have derived the methodology for managing dependencies that facilitate code reuse and organises workload into logical chunks.
      </Letter>
      <Letter letter="S" file="img/adonais/S.png" top={120} left={125} class={cl`S Image`} href="#software" cl={cl}>
        <strong className={cl`Letter`}>S</strong>oftware Engineering is a craft that involves implementation, testing, documentation, building and maintenance. With our holistic approach, we are able to deliver best quality software.
      </Letter>
    </div>
    )
  }
}

const Hint = ({ cl, children, top, left }) => {
  return (<span className={cl`Copy`} style={{ 'z-index': 2, position: 'absolute', top: top + 15 , left: left + 15 }}>
    <span className={cl`Noise`}>{ children }</span>
  </span>)
}

const Letter = ({ file, letter, cl, top, left, children, class: className, href }) => {
  const style = { top, left }
  // const style = { 'top': `${top}px`, 'left': `${left}px` }
  return (<a className={cl`LetterA`} href={href} style={style}>
    <Hint cl={cl} top={top} left={left}>{children}</Hint>
    <splendid-img alt={`letter ${letter}`} className={className} src={file} style={style} />
  </a>)
}


// onMouseOver={() => {
//   setHint(children)
// }} onMouseOut={() => {
//   setHint(null)
// }} onMouseMove={(e) => {
//   if (!hint) return
//   const img = /** @type {HTMLImageElement} */ (e.currentTarget)
//   const state = {
//     x: parseInt(img.style.left, 10) + e.offsetX,
//     y: parseInt(img.style.top, 10) + e.offsetY,
//   }
//   setCoordinates(state)
// }}

export default Adonais