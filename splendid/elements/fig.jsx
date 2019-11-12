/* eslint-disable react/jsx-key */
export default function Fig({ id, reverse, src, alt, splendid, border, children, 'no-fluid': noFluid }) {
  const b = border ? { [`border-${border}`]: true } : {}
  let annotation
  const c = children[0].trim()
  if (!alt) {
    alt = children[0].trim()
  } else if (c) {
    const aCl = reverse ? { 'order-1': true, 'order-lg-2': true } : { }
    annotation = <column {...aCl} d-flex align-items-center justify-content-center flex-column lg-6 dangerouslySetInnerHTML={{ __html: c }}/>
  }
  // console.log('figure', id, alt)
  if (id) id = `fig-${id}`
  else id = `fig-${splendid.random()}`

  splendid.figures = splendid.figures || []
  splendid.figures.push({ alt, id })
  const i = splendid.figures.length

  const colCl = reverse ? { 'order-2': true, 'order-lg-1': true } : { }

  const col = (<column {...colCl} d-flex align-items-center justify-content-center flex-column id={id} mb-3 p-3 rounded className={c ? 'lg-6': undefined} position-relative overflow="hidden">
    <parallax speedy="-0.5" z-index="-1" background-image="/img/letters/background.png" />
    <p text-center>
      <splendid-img border {...b} rounded img-fluid src={src} alt={alt} placeholder-auto />
    </p>
    <h5 m-0 background="white" d-inline-block>Figure {i}: {alt}</h5>
  </column>)

  const ch = [annotation, col]
  const row = (<row>{ch}</row>)
  return [
    '</div></div></div>',
    noFluid ? (<container position-relative>
      {row}
      <back-to name={id} />
    </container>) : <container-fluid position-relative>
      {row} <back-to name={id} />
    </container-fluid >,
    '<div class="container"><div class="row"><div class="col">',
  ]
}