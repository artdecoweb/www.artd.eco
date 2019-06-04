/* eslint-env browser */
const map = {}

const io = new IntersectionObserver((entries) => {
  entries.forEach(({ target, isIntersecting }) => {
    // console.log(target, isIntersecting)
    if (isIntersecting) {
      const src = target.getAttribute('data-src')
      if (src) {
        // first time showing
        target.style['background-image'] = src
        target.removeAttribute('data-src')
      }
      if (map[target.pid]) {
        return
      }

      let y = target.getAttribute('y')
      if (y === null) y = 2
      y = parseFloat(y)

      let x = target.getAttribute('x')
      if (x === null) x = 0
      x = parseFloat(x)
      // let X = x ? d * parseFloat(x) : 0

      const listener = () => {
        const d = target.getBoundingClientRect().top - window.innerHeight
        let Y = 0
        let X = 0

        if (y) {
          const offset = d/y
          const minY = target.getAttribute('min-y')
          let mo = offset
          if (minY) {
            mo = Math.max(minY, offset)
          }
          Y = mo
        }
        // const minYMd = target.getAttribute('min-y-md')
        // if (windowWidth > 768 && minYMd && windowWidth < 940) {
        //   mo = Math.max(minYMd, offset)
        // } else

        // target.style['background-position-y'] = o

        // target.style['background-position-x'] = Math.floor(offsetX) + 'px'
        if (x) {
          X = d * x
          const w = target.parentNode.clientWidth
          // offsetX
          // t += `translateX(-${w}px)`
          // console.log('shifting X by w * 2', X)
          X = X - w * 2
          // console.log(X)
          // console.log('setting width')
          target.style['width'] = target.parentNode.clientWidth * 4 + 'px'
        }

        const ch = `${target.parentNode.clientHeight * 3}px`
        target.style['min-height'] = ch

        const t = `translate3d(${floatToPx(X)}, ${floatToPx(Y)}, 0)`
        target.style['transform'] = t
      }
      window.addEventListener('scroll', listener)
      map[target.pid] = listener
    } else {
      if (!(target.pid in map)) return
      window.removeEventListener('scroll', map[target.pid])
      delete map[target.pid]
    }
  })
})

const floatToPx = (f) => {
  return `${f.toFixed(0)}px`
}

let windowWidth = window.innerWidth
window.addEventListener('resize', () => {
  windowWidth = window.innerWidth
})

let id = 0

const start = () => {
  const els = [...document.querySelectorAll('.Parallax')]
  els.forEach((img) => {
    if (!img.style['background-image']) return

    img.pid = id++
    img.setAttribute('data-src', img.style['background-image'])
    img.style['background-image'] = null
    io.observe(img)
  })
}
window['IO'] = () => {
  start()
}

start()
// window.addEventListener('scroll', () => {
//   els.forEach((el) => {
//     const d = el.getBoundingClientRect().top - window.innerHeight
//     const showing = d < 0
//     if (!showing) return
//     const offset = d/2
//     const translate = el.getAttribute('translate')
//     const o = Math.floor(offset) + 'px'
//     if (translate !== null) {
//       el.style['transform'] = `translateY(${o})`
//       el.style['-webkit-transform'] = `translateY(${o})`
//     } else {
//       el.style['background-position-y'] = Math.floor(offset) + 'px'
//     }
//     const x = el.getAttribute('x')
//     if (x) {
//       const offsetX = d * parseFloat(x)
//       el.style['background-position-x'] = Math.floor(offsetX) + 'px'
//     }
//   })
// })