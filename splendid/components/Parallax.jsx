const Parallax = ({
  splendid, style, 'background-image': backgroundImage, class: className, x,
  top = 0, left = 0, 'position-absolute': positionAbsolute = true,
}) => {
  const prefix = 'Parallax'
  const cl = splendid.addCSS('styles/Parallax.css')
  splendid.addScript('js/io.js', false, { nocompile: true })
  splendid.addScript('js/parallax.js')
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
  const cn = [className, prefix, cl`Parallax`].join(' ')
  return <div className={cn} style={style} x={x} />
}

export default Parallax