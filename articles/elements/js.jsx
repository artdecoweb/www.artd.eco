/**
 * A code block with annotation.
 * @param {Object} param0
 * @param {boolean} [param0.reverse=false] Show annotation on the left. Default `false`. On `sm` annotation will always go first.
 */
export default function JS({ children, alt, id, reverse, src, img, p = true }) {
  const c = children[0].trim()
  let annotation

  if (alt) {
    alt = alt.split('\n').map((current) => {
      // eslint-disable-next-line react/jsx-key
      return (<p>{current}</p>)
    })
    const aCl = reverse ? {} : { 'order-1': true, 'order-md-2': true }
    annotation = <column {...aCl} md-4  d-flex align-items-center justify-content-between flex-column dangerouslySetInnerHTML={!p ? { __html: alt } : undefined}>
      {p && <div>{alt}</div>}
      {src && <splendid-img img-fluid placeholder-auto src={src} alt={img}/>}
    </column>
  }

  const colCl = (reverse || !annotation) ? {} : { 'order-2': true, 'order-md-1': true }

  const col = <column {...colCl} d-flex justify-content-center align-items-center
    dangerouslySetInnerHTML={{ __html: c }}/>

  const ch = [annotation, col]

  return (<row id={id}>
    {ch}
  </row>)
}