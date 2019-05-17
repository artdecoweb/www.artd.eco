import { Component } from 'preact'

class Parallax extends Component {
  constructor() {
    super()
    this.listener = null
    /** @type {HTMLDivElement} */
    this.el = null
    this.state = { offset: 0 }
  }
  componentDidMount() {
    this.listener = () => {
      if (!this.el) return
      const d = this.el.getBoundingClientRect().y - window.innerHeight
      const showing = d < 0
      if (!showing) return
      this.setState({
        offset: d/2,
      })
      console.log(d)
    }
    window.addEventListener('scroll', this.listener)
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.listener)
    this.listener = null
  }
  render({
    splendid, style: s = {}, 'background-image': backgroundImage, class: className,
    children,
  }) {
    splendid.export()
    let style
    const st = {
      'background-image': `url(${backgroundImage})`,
      'background-position': `0 ${this.state.offset}px`,
    }
    if (typeof s == 'string') {
      style = [
        ...Object.keys(st).map((k) => `${k}: ${st[k]}`),
        s,
      ].join(';')
    } else {
      style = {
        ...s,
        ...st,
      }
    }
    return (<div
      className={className}
      style={style}
      ref={(el) => {
        this.el = el
      }}
    dangerouslySetInnerHTML={{ __html: children }} />)
  }
}

export default Parallax