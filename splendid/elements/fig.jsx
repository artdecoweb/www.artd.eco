/* eslint-disable react/jsx-key */
export default function Fig({ id, reverse, src, alt, splendid, webp, border, children, 'no-fluid': noFluid, size = '6' }) {
  const b = border ? { [`border-${border}`]: true } : {}
  if (webp) b['responsive'] = true
  let annotation
  const c = children[0].trim()
  if (!alt) {
    alt = children[0].trim()
  } else if (c) {
    const aCl = reverse ? { 'order-1': true, 'order-lg-2': true } : { }
    const sz = { [`lg-${12-size}`]: true }
    annotation = <column {...aCl} d-flex align-items-center justify-content-center flex-column {...sz}
      dangerouslySetInnerHTML={{ __html: c }}/>
  }
  // console.log('figure', id, alt)
  if (id) id = `fig-${id}`
  else id = `fig-${splendid.random()}`

  splendid.figures = splendid.figures || []
  splendid.figures.push({ alt, id })
  const i = splendid.figures.length

  const colCl = reverse ? { 'order-2': true, 'order-lg-1': true } : { }
  if (annotation) colCl[`lg-${size}`] = true

  const col = (<column {...colCl} d-flex align-items-center justify-content-center flex-column id={id} mb-3 p-3 rounded position-relative overflow-hidden>
    <parallax speedy="-0.5" z-index="-1" background-image="/img/letters/background.png" />
    <p text-center>
      <splendid-img webp={webp} border {...b} rounded img-fluid src={src} alt={alt} placeholder-auto />
    </p>
    <h5 m-0 background="white" d-inline-block>Figure {i}: {alt}</h5>
  </column>)

  const ch = [annotation, col]
  const row = (<row className={noFluid ? 'position-relative' : undefined}>
    {ch}{noFluid && <back-to name={id} />}
  </row>)

  if (noFluid) return row

  return [
    '</div></div></div>',
    <container-fluid position-relative>
      {row} <back-to name={id} />
    </container-fluid >,
    '<div class="container"><div class="row"><div class="col">',
  ]
}