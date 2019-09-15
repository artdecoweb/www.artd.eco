export default function Feature({ children, title, direction = 'right', src, splendid, background, color, shadow, id }) {
  const f = `float-${direction}`
  const sf = `float-${direction == 'right' ? 'left' : 'right'}`
  const st = direction == 'right' ? {} : {
    'transform': 'scaleX(-1)',
    '-webkit-transform': 'scaleX(-1)',
  }
  const p = `m${direction == 'right' ? 'l' : 'r'}-3`
  const cn = ['img-fluid img-fluid rounded', f, p].join(' ')
  return (<row className="Feature" id={id}>
    <div className="col">
      <h2 className="text-center" style={{ background, color, 'text-shadow': shadow }}><img alt="art deco fan" style={st} className={sf} src="img/sun.png" /> {title}</h2>
      <splendid-img alt={title} className={cn} src={src} />
      <p>
        {children}
      </p>
    </div>
  </row>)
}