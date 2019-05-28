/* eslint-env browser */
import { Component } from 'preact'

// let io
// try {
//   io = new IntersectionObserver((entries) => {
//     entries.forEach(({ target, isIntersecting }) => {
//       const instance = images.find((i) => {
//         return i.el === target
//       })
//       if (!instance) {
//         return
//       }
//       instance.setState({ visible: isIntersecting })
//     })
//   })
// } catch (err) {
//   io = {
//     observe() {},
//     unobserve() {},
//   }
// }

// let images = []
/* eslint-disable react/jsx-key */

class Image extends Component {
  render({ src, splendid, ...props }) {
    // if (src == 'img/logo.png') debugger
    splendid.addScript('js/io.js', false, { nocompile: true })
    splendid.addScript('js/images.js')
    return [
      <img io data-src={src} {...props} />,
      <noscript>
        <img src={src} {...props}/>
      </noscript>,
    ]
  }
}
export default Image