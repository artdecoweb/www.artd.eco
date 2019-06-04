const Parallax = ({
  splendid, style, 'background-image': backgroundImage, class: className, x,
  'min-y': minY, 'min-y-md': minYMd, y = 3,
  // top = 0, left = 0, 'position-absolute': positionAbsolute = true,
}) => {
  if (splendid.debug) splendid.debug()
  const prefix = 'Parallax'
  splendid.addCSS('styles/Parallax.css', null, { whitelist: 'Parallax' })
  splendid.addScript('js/io.js', false, { nocompile: true })
  splendid.addScript('splendid/js/parallax.js')
  if (backgroundImage) splendid.addFile(backgroundImage)

  const st = {
    ...(backgroundImage ? {
      'background-image': `url(${backgroundImage})`,
    } : {}),
  }
  style = [
    ...Object.keys(st).map((k) => `${k}: ${st[k]}`),
    style,
  ].join(';')
  const cn = [className, prefix].join(' ')
  return <div className={cn} style={style} x={x}
    min-y={minY} min-y-md={minYMd}
    y={y} />
}

export default Parallax