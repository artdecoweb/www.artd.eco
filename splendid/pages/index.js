import Articles from './articles'

/**
 * @type {import('splendid').Page}
 */
export const main = {
  title: 'Art Deco: Node.JS Development Company',
  url: 'index.html',
  file: 'index',
  menuUrl: '/',
  seo: 'Art Deco is specialised Node.JS company: back-end servers, cloud & serverless apps and front-end websites and optimised PWAs of outstanding quality.',
  // focus: 1,
}

/**
 * @type {import('splendid').Page}
 */
export const articles = {
  layout: 'layout/blog.html',
  title: 'Articles: Art Deco',
  url: 'articles/index.html',
  file: 'articles/index',
  seo: 'Node.JS backend and JavaScript frontend development articles and knowledge sharing. Web software development tips and research on performance and productivity.',
  menuUrl: '/articles/',
}

export default {
  ...Articles,
}

// Art Deco is a specialised Node.JS development company that creates back-end servers, cloud and serverless applications and front-end websites and PWAs of outstanding quality, optimised with JavaScript compiler and with complete testing and documentation coverage.