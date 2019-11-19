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
  'life-sucks': {
    title: 'When Life Sucks Get A Dot SUCKS',
    seo: 'For some people today, internet is the only way to defend our rights. Read about my year-long journey to fight corruption in the UK with .sucks domain.',
    links: {
      'ref-forbes': 'https://www.forbes.com/profile/eileen-burbidge/',
      'wired': 'https://www.youtube.com/watch?v=swIoyaBUpEg',
      'ch-tn': 'https://beta.companieshouse.gov.uk/company/08843778/officers',
      'ch-public': 'https://beta.companieshouse.gov.uk/company/10608507/filing-history',
      'wiki-propaganda': 'https://en.wikipedia.org/wiki/Propaganda:_The_Formation_of_Men%27s_Attitudes',
      'wework': 'https://www.youtube.com/watch?v=X2LwIiKhczo',
      'bcs': 'https://www.bcs.org/get-qualified/become-chartered/chartered-it-professional/',
      'korski-photo': 'https://www.pressreader.com/uk/scottish-daily-mail/20170328/281715499449399',
      'crunch-echo': 'https://www.crunchbase.com/funding_round/echo-8-seed--730e481c#section-overview',
      'tis': 'https://www.timesofisrael.com/britain-appoints-special-technology-ambassador-to-israel/',
      'nhs': 'https://healthtech.blog.gov.uk/2019/06/24/nhsx-giving-patients-and-staff-the-technology-they-need/',
    },
    topics: ['personal development', 'domains', 'PR'],
    // focus: true,
  },
  'ditch-cheap': {
    title: 'How I Rebel.com\'ed Against Cheap NameCheap Service',
    seo: 'Companies like NameCheap are proud of their customer service without knowing what service is. Why choose premium registrars like Rebel.com instead.',
    links: {
      // 'ref-forbes': 'https://www.forbes.com/profile/eileen-burbidge/',
      // 'ch-tn': 'https://beta.companieshouse.gov.uk/company/08843778/officers',
    },
    topics: ['customer service', 'domains', 'PR'],
    // focus: true,
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