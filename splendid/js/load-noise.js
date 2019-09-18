const el = document.getElementsByClassName('Noises')
if (el.length) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(({ target, isIntersecting }) => {
      if (isIntersecting) {
        io.unobserve(target)
        target.style.background = 'url(img/noise/giphy-2.gif)'
      }
    })
  }, { rootMargin: '75px' })
  ;[...el].forEach(e => io.observe(e))
}