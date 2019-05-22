/* eslint-env browser */
const io = new IntersectionObserver((entries) => {
  entries.forEach(({ target, isIntersecting }) => {
    if (isIntersecting) {
      const src = target.getAttribute('data-src')
      if (!src) return
      // target.src = src
      // io.unobserve(target)
    }
  })
})

const images = [...document.querySelectorAll('img')]
images.forEach((img) => {
  img.setAttribute('data-src', img.src)
  delete img.src
  io.observe(img)
})