const Feature = ({ children, title, direction = 'right', src, splendid, background, color, shadow }) => {
  splendid.renderAgain()
  const f = `float-${direction}`
  const p = `m${direction == 'right' ? 'l' : 'r'}-3`
  const cn = ['img-fluid img-fluid rounded', f, p].join(' ')
  return (<row className="Feature">
    <div className="col">
      <img alt={title} className={cn} src={src}/>
      <h2 style={{ background, color, 'text-shadow': shadow }}><img src="img/sun.png"/> {title}</h2>
      <p>
        {children}
      </p>
    </div>
  </row>)
}

export default Feature