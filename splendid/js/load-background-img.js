const el = document.querySelectorAll('[data-background-img]')
if (el.length) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(({ target, isIntersecting }) => {
      if (isIntersecting) {
        io.unobserve(target)
        const backgroundImg = target.getAttribute('data-background-img')
        target.removeAttribute('data-background-img')
        target.style.background = `url(${backgroundImg})`
      }
    })
  }, { rootMargin: '75px' })
  ;[...el].forEach(e => io.observe(e))
}