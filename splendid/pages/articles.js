/**
 * @type {Object<string, Page>}
 */
const T = {
  'best-google-font': {
    title: 'The Best Way To Load Google Fonts Asynchronously.',
    seo: 'This method will load Google Fonts in the most efficient manner asynchronously without blocking the main thread and minimising the number of reflows.',
    file: 'articles/best-google-font',
    url: 'articles/the-best-way-to-load-google-fonts-asynchronously.html',
    // focus: true,
    topics: [
      'page speed optimisation',
      'performance measurement',
      'web fonts',
    ],
  },
}

Object.entries(T).forEach(([, page]) => {
  page.article = true
  page.layout = 'layout/article.html'
})

/**
 * @suppress {nonStandardJsDocs}
 * @typedef {import('splendid').Page} Page
 */

export default T