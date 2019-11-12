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
    <column>
      <h2 ignore-section text-center background={background} color={color} text-shadow= {shadow}>
        <splendid-img placeholder-auto alt="art deco fan" style={st} className={sf} src="pages/index/img/sun.png" />
        {title}
      </h2>
      <splendid-img placeholder-auto alt={title} className={cn} src={src} />
      <div dangerouslySetInnerHTML={{ __html: children }}/>
    </column>
  </row>)
}