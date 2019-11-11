export default function JS({ children, alt, id, reverse, src, img, p = true }) {
  const c = children[0].trim()
  let annotation

  if (alt) {
    alt = alt.split('\n').reduce((acc, current, i, a) => {
      acc.push(current)
      if (i < a.length - 1) acc.push(<br/>,<br/>)
      return acc
    }, [])
    const aCl = reverse ? { 'order-2': true, 'order-md-1': true } : { 'order-1': true, 'order-md-2': true }
    // const aCl = { 'order-1': true, 'order-md-2': true }
    annotation = <column {...aCl} md-4  d-flex align-items-center justify-content-between flex-column dangerouslySetInnerHTML={!p ? { __html: alt } : undefined}>
      {p && <p>{alt}</p>}
      {src && <splendid-img img-fluid placeholder-auto src={src} alt={img}/>}
    </column>
  }

  const colCl = reverse ? { 'order-1': true, 'order-md-2': true } : { 'order-2': true, 'order-md-1': true }
  // const colCl = { 'order-2': true, 'order-md-1': true }
  // if (!alt) Object.assign(colCl, { 'd-flex': true, 'justify-content-center': true })
  const col = <column {...colCl} d-flex justify-content-center align-items-center dangerouslySetInnerHTML={{ __html: c }}/>

  const ch = reverse ? [annotation, col] : [col, annotation]

  return (<row id={id}>
    {ch}
  </row>)
}