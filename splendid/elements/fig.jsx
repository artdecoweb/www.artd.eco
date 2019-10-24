export default function Fig({ src, alt, splendid, border }) {
  splendid.figures = splendid.figures || []
  splendid.figures.push(alt)
  const i = splendid.figures.length
  const b = border ? { [`border-${border}`]: true } : {}
  return [
    '</div></div></div>',
    (<container-fluid position-relative mb-3 overflow="hidden" p-3 rounded>
      <parallax speedy="-0.5" z-index="-1" background-image="/img/letters/background.png" />
      <p text-center>
        <splendid-img border {...b} rounded img-fluid src={src} alt={alt} placeholder-auto />
      </p>
      <h5 m-0 background="white" d-inline-block>Figure {i}: {alt}</h5>
    </container-fluid>),
    '<div class="container"><div class="row"><div class="col">',
  ]
}