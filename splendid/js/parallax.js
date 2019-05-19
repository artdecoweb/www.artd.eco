/* eslint-env browser */
const els = [...document.querySelectorAll('[parallax]')]
window.addEventListener('scroll', () => {
  els.forEach((el) => {
    const d = el.getBoundingClientRect().top - window.innerHeight
    const showing = d < 0
    if (!showing) return
    const offset = d/2
    el.style['background-position-y'] = Math.floor(offset) + 'px'
    const x = el.getAttribute('x')
    if (x) {
      const offsetX = d * parseFloat(x)
      el.style['background-position-x'] = Math.floor(offsetX) + 'px'
    }
  })
})