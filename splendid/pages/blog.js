/**
 * @type {Object<string, Page>}
 */
const T = {
  'fonts-preloading': {
    title: 'Font Preload Experiments',
    seo: '',
    file: 'blog/font-preload',
    url: 'blog/font-preload-experiments.html',
  },
}

Object.entries(T).forEach(([, page]) => {
  page.blogEntry = true
  page.layout = 'layout/blog-entry.html'
})

/**
 * @suppress {nonStandardJsDocs}
 * @typedef {import('splendid').Page} Page
 */

export default T