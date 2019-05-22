const Sky = ({ count = 5 }) => {
  const arr = Array.from({ length: count })
  let i = 1
  return (<div className="Sky h-100 w-100 position-absolute" style="top:-50px;">
    {arr.map((j, n) => {
      const even = !!(n%2)
      const img = `/img/sky${even ? 1 : 2}.png`
      // const img = '/img/layers.gif'
      const style = {
        top: n * 45,
        'background-image': `url(${img})`,
        ...(i > 2 ? { 'background-position-x': '-50%' } : {}),
      }
      i++
      if (i == 5) i = 0
      return <div key={n} className="position-absolute" style={style}/>
    })}
  </div>)
}
export default Sky