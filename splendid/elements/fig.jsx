export default function Fig({ id, src, alt, splendid, border, children }) {
  splendid.figures = splendid.figures || []
  splendid.figures.push(alt)
  const i = splendid.figures.length
  const b = border ? { [`border-${border}`]: true } : {}
  if (!alt) {
    alt = children[0].trim()
  }
  if (id) id = `fig-${id}`
  return [
    '</div></div></div>',
    (<container-fluid id={id} position-relative mb-3 overflow="hidden" p-3 rounded>
      <parallax speedy="-0.5" z-index="-1" background-image="/img/letters/background.png" />
      <p text-center>
        <splendid-img border {...b} rounded img-fluid src={src} alt={alt} placeholder-auto />
      </p>
      <h5 m-0 background="white" d-inline-block>Figure {i}: {alt}</h5>
    </container-fluid>),
    '<div class="container"><div class="row"><div class="col">',
  ]
}