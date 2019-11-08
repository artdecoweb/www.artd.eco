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
    title: 'How To Load Google Fonts Asynchronously.',
    seo: 'Using performance measurement, we analyse how a web page is loaded and show how to embed web font stylesheet asynchronously to avoid blocks and reflows.',
    og: {
      image: '/articles/best-google-font-2/graphics/async-google-font.png',
      type: 'article',
    },
    file: './best-google-font',
    // focus: true,
    topics: [
      'page speed optimisation',
      // 'performance measurement',
      'web fonts',
    ],
    links: {
      'alligator/preload-prefetch': 'https://alligator.io/html/preload-prefetch/',
    },
  },
  'best-google-font-2': {
    title: 'The Best Way To Load Google Fonts Asynchronously.',
    seo: 'An advanced method of loading Google Fonts in the most efficient manner asynchronously to avoid render blocking and minimise the number of reflows.',
    file: './best-google-font-2',
    og: {
      image: '/articles/best-google-font-2/graphics/advanced-google-font.png',
      type: 'article',
    },
    // focus: true,
    topics: [
      'page speed optimisation',
      // 'performance measurement',
      'web fonts',
    ],
    links: {
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