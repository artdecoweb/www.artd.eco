/**
 * @type {Object<string, Page>}
 */
const T = {
  articles: {
    title: 'Articles: Art Deco',
    index: true,
    layout: 'layout/blog.html',
    file: './index',
    seo: 'Node.JS backend and JavaScript frontend development articles and knowledge sharing. Web software development tips and research on performance and productivity.',
  },

  'best-google-font': {
    title: 'The Best Way To Load Google Fonts Asynchronously.',
    seo: 'This method will load Google Fonts in the most efficient manner asynchronously without blocking the main thread and minimising the number of reflows.',
    file: './best-google-font',
    // focus: true,
    topics: [
      'page speed optimisation',
      'performance measurement',
      'web fonts',
    ],
    links: {
      'alligator/preload-prefetch': 'https://alligator.io/html/preload-prefetch/',
      'smashing/preload': 'https://www.smashingmagazine.com/2016/02/preload-what-is-it-good-for/',
    },
  },
}

Object.entries(T).forEach(([, page]) => {
  if (!page.index) page.article = true
  if (!page.layout) page.layout = 'layout/article.html'
})

/**
 * @suppress {nonStandardJsDocs}
 * @typedef {import('splendid').Page} Page
 */

export default T