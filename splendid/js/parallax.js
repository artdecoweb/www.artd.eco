/* eslint-env browser */
const els = [...document.querySelectorAll('.Parallax')]

const map = {}

const io = new IntersectionObserver((entries) => {
  entries.forEach(({ target, isIntersecting }) => {
    console.log(target, isIntersecting)
    if (isIntersecting) {
      const src = target.getAttribute('data-src')
      if (src) {
        // first time showing
        target.style['background-image'] = src
        target.removeAttribute('data-src')
      }
      if (map[target.pid]) {
        console.log('already in the map')
        return
      }
      const listener = () => {
        const d = target.getBoundingClientRect().top - window.innerHeight
        const offset = d/2
        const o = Math.floor(offset) + 'px'
        target.style['background-position-y'] = o
        const x = target.getAttribute('x')
        if (x) {
          const offsetX = d * parseFloat(x)
          target.style['background-position-x'] = Math.floor(offsetX) + 'px'
        }
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