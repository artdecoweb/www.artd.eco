export default function Topics({ splendid, topic }) {
  const pages = splendid.pages.filter(({ topics = [], article }) => {
    if (!article) return false
    return topics.includes(topic)
  })
  return <ul>
    {pages.map(({ seo, title, key }) => {
      // eslint-disable-next-line react/jsx-key
      return <li><strong><a href={key}>{title}</a></strong>: {seo}</li>
    })}
  </ul>
}