/* eslint-env browser */
const els = [...document.querySelectorAll('.Parallax')]

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
      const listener = () => {
        const d = target.getBoundingClientRect().top - window.innerHeight
        const offset = d/2
        const minY = target.getAttribute('min-y')
        const minYMd = target.getAttribute('min-y-md')
        let mo = offset
        // if (windowWidth > 768 && minYMd && windowWidth < 940) {
        //   mo = Math.max(minYMd, offset)
        // } else
        if (minY) {
          mo = Math.max(minY, offset)
        }
        const o = Math.floor(mo) + 'px'
        // target.style['background-position-y'] = o
        const x = target.getAttribute('x')
        const offsetX = x ? d * parseFloat(x) + 'px' : '0'
        // target.style['background-position-x'] = Math.floor(offsetX) + 'px'
        let t = `translate3d(${offsetX}, ${o}, 0)`
        if (x) {
          target.style['width'] = '200%'
          t += ' translateX(-50%)'
        }
        target.style['min-height'] = target.parentNode.clientHeight * 3 + 'px'
        // window.innerHeight * 2.5 + 'px'
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

let windowWidth = window.innerWidth
window.addEventListener('resize', () => {
  windowWidth = window.innerWidth
})

let id = 0
els.forEach((img) => {
  img.pid = id++
  img.setAttribute('data-src', img.style['background-image'])
  img.style['background-image'] = null
  io.observe(img)
})

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