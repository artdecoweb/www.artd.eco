import { Component } from 'preact'

// class Parallax extends Component {
//   constructor() {
//     super()
//     this.listener = null
//     /** @type {HTMLDivElement} */
//     this.el = null
//     this.state = { offset: 0, offsetX: 0 }
//     this.refFn = (el) => {
//       this.el = el
//     }
//   }
//   componentDidMount() {
//     this.listener = () => {
//       if (!this.el) return
//       const d = this.el.getBoundingClientRect().top - window.innerHeight
//       const showing = d < 0
//       if (!showing) return
//       this.setState({
//         offset: d/2,
//         offsetX: d * (parseFloat(this.props.x) || 0),
//       })
//       // console.log(d)
//     }
//     window.addEventListener('scroll', this.listener)
//   }
//   componentWillUnmount() {
//     window.removeEventListener('scroll', this.listener)
//     this.listener = null
//   }
//   render({
//     splendid, style: s = {}, 'background-image': backgroundImage, class: className,
//   }) {
//     splendid.export()
//     let style
//     const st = {
//       'background-image': `url(${backgroundImage})`,
//       'background-position-y': Math.floor(this.state.offset) + 'px',
//       'background-position-x': Math.floor(this.state.offsetX) + 'px',
//     }
//     if (typeof s == 'string') {
//       style = [
//         ...Object.keys(st).map((k) => `${k}: ${st[k]}`),
//         s,
//       ].join(';')
//     } else {
//       style = {
//         ...s,
//         ...st,
//       }
//     }
//     return (<div
//       className={className}
//       style={style}
//       ref={this.refFn} />)
//   }
// }

const parallax = ({ splendid, style: s = {}, 'background-image': backgroundImage, class: className, x }) => {
  splendid.addScript('js/parallax.js')
  splendid.addFile(backgroundImage)
  let style
  const st = {
    'background-image': `url(${backgroundImage})`,
  }
  if (typeof s == 'string') {
    style = [
      ...Object.keys(st).map((k) => `${k}: ${st[k]}`),
      s,
    ].join(';')
  } else {
    style = { ...s, ...st }
  }
  return <div parallax className={className} style={style} x={x}/>
}

// export default Parallax

export default parallax