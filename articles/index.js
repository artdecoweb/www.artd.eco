/**
 * @type {Object<string, Page>}
 */
const T = {
  index: {
    title: 'Web Computing Articles',
    seo: 'Node.JS backend and JavaScript frontend development articles and knowledge sharing. Web software development tips and research on performance and productivity.',
  },
  topics: {
    title: 'Articles By Topics',
    url: 'articles/topics.html',
  },
  'best-google-font': {
    title: 'How To Load Google Fonts Asynchronously',
    seo: 'Using performance measurements, we examine page loading process in detail to find out how to embed web font stylesheet asynchronously to avoid blocks.',
    og: {
      image: './best-google-font-2/graphics/async-google-font.png',
      type: 'article',
    },
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
    title: 'The Best Way To Load Google Fonts Asynchronously',
    seo: 'An advanced method of loading Google Fonts in the most efficient manner asynchronously to avoid render blocking and minimise the number of reflows.',
    og: {
      image: './best-google-font-2/graphics/advanced-google-font.png',
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
  'embed-web-fonts': {
    title: 'Embedding Critical Path Fonts',
    seo: 'Including google fonts on a page and referencing them in CSS could still result in a FOUT. By preloading fonts, we can show branded text immediately.',
    og: {
      // image: './best-google-font-2/graphics/async-google-font.png',
      type: 'article',
    },
    // focus: true,
    topics: [
      'page speed optimisation',
      'web fonts',
    ],
  },
}

Object.entries(T).forEach(([key, page]) => {
  if (!['index', 'topics'].includes(key)) page.article = true
  if (!page.layout) page.layout = './layout/index.html'
})

/**
 * @suppress {nonStandardJsDocs}
 * @typedef {import('splendid').Page} Page
 */

export default T