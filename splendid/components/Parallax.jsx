const Parallax = ({ splendid, style, 'background-image': backgroundImage, class: className, x }) => {
  splendid.addScript('js/parallax.js')
  if (backgroundImage) splendid.addFile(backgroundImage)

  const st = {
    'background-image': `url(${backgroundImage})`,
  }
  style = [
    ...Object.keys(st).map((k) => `${k}: ${st[k]}`),
    style,
  ].join(';')
  return <div parallax className={className} style={style} x={x}/>
}

export default Parallax