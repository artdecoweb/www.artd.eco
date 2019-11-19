import { join } from 'path'

/**
 * @param {Object} param0
 * @param {Splendid} param0.splendid
 */
export default function Index({ splendid }) {
  return (<div>
    {splendid.pages.filter(({ article }) => article).map((page) => {
      const { og = {}, key, title, seo } = page
      return (<div key={key}>
        <h2><a href={key}>{title}</a></h2>
        {og.image && (<splendid-img img-fluid placeholder-auto d-block
          src={join('~/articles',og.image)} alt={title}/>) }
        {seo}
      </div>)
    })}
  </div>)
}

/**
 * @typedef {import('splendid')} Splendid
 */