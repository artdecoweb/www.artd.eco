/* eslint-env browser */
const io = new IntersectionObserver((entries) => {
  entries.forEach(({ target, isIntersecting }) => {
    if (isIntersecting) {
      const src = target.getAttribute('data-src')
      if (!src) return
      target.src = src
      io.unobserve(target)
    }
  })
}, { rootMargin: '0px 0px 76px 0px' })

const images = [...document.querySelectorAll('img[io]')]
images.forEach((img) => {
  io.observe(img)
})