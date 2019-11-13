export default function Bottom({ img, height = '50px' }) {
  const top = `calc(${height} - 1px)`
  return (<div style="position:relative;">
    <container-fluid p-0 position-absolute top="0" left="0" height={height} overflow-hidden>
      <parallax background-image={img} />
    </container-fluid>
    <bootstrap-div id="bottom" position-absolute top={top} left="0" />
  </div>)
}

export const init = () => {
  /* eslint-env browser */
  const bottom = document.getElementById('bottom')
  /** @type {Element} */
  const parent = bottom.previousElementSibling
  const initialHeight = parent.style.height
  const ih = parseInt(initialHeight, 10)

  let shouldScroll = false
  let timer = null
  let interval = null
  let listener = (ev) => {
    if (!shouldScroll) return
    totalDelta += ev.wheelDelta
    const d = -totalDelta/50
    parent.style.height = Math.min(ih + d, ih + 50) + 'px'
    parent.style.transition = ''
    window.clearInterval(timer)
    window.clearInterval(interval)
    timer = window.setTimeout(() => {
      totalDelta = 0
      parent.style.height = initialHeight
      parent.style.transition = 'height .5s'
    }, 150)
  }
  let totalDelta = 0
  document.onmousewheel = listener
  const io = new IntersectionObserver((entries) => {
    entries.forEach(({ isIntersecting }) => {
      // console.log(isIntersecting)
      shouldScroll = isIntersecting
      if (!isIntersecting) {
        parent.style.height = initialHeight
        totalDelta = 0
        return
      }
    })
  })
  io.observe(bottom)
}