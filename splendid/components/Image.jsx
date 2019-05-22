/* eslint-env browser */
import { Component } from 'preact'

let io
try {
  io = new IntersectionObserver((entries) => {
    entries.forEach(({ target, isIntersecting }) => {
      const instance = images.find((i) => {
        return i.el === target
      })
      if (!instance) {
        return
      }
      instance.setState({ visible: isIntersecting })
    })
  })
} catch (err) {
  io = {
    observe() {},
    unobserve() {},
  }
}

let images = []

class Image extends Component {
  constructor() {
    super()
    this.state = { loaded: false, visible: false }
    this.loaded = () => {
      this.setState({ loaded: true })
    }
  }
  componentDidMount() {
    images.push(this)
  }
  componentWillUnmount() {
    images = images.filter(i => i !== this)
  }
  get shouldShow() {
    return this.state.loaded || this.state.visible
  }
  render({ src, splendid, ...props }) {
    splendid.export()
    return (<img io onLoad={this.loaded} src={this.shouldShow ? src : undefined} {...props} ref={(el) => {
      if (el) {
        this.el = el
        io.observe(el)
      } else {
        io.unobserve(this.el)
        this.el = null
      }
    }} />)
  }
}
export default Image