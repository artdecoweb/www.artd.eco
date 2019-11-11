export default function ListOfFigures({ splendid }) {
  return splendid.figures.map(({ alt, id }) => {
    const href = `#${id}`
    // eslint-disable-next-line react/jsx-key
    return <li><a smooth-scroll href={href}>{alt}</a></li>
  })
}