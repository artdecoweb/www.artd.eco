import { controlStyle } from 'splendid'

const Parallax = ({
  splendid, style, 'background-image': backgroundImage, class: className, x,
  'min-y': minY, 'min-y-md': minYMd, y = 2, oy = 0, ...props
}) => {
  // if (splendid.debug) splendid.debug()
  const prefix = 'Parallax'
  splendid.addCSS('styles/Parallax.css', null, { whitelist: prefix })
  splendid.polyfill('intersection-observer')
  splendid.addScript('splendid/js/parallax.js')
  if (backgroundImage) splendid.addFile(backgroundImage)

  const st = controlStyle(style, {
    ...(backgroundImage ? { 'background-image': `url(${backgroundImage})` } : {}),
    ...props,
  })
  const cn = [className, prefix].join(' ')
  return <div className={cn} style={st} x={x}
    min-y={minY} min-y-md={minYMd}
    y={y} oy={oy} />
}

export default Parallax