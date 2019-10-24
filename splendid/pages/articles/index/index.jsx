export default function Index({ splendid }) {
  return (<div>
    {splendid.pages.filter(({ article }) => article).map((page) => {
      return <a href={page.key}>{page.title}</a>
    })}
  </div>)
}