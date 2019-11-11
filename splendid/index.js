import { join } from 'path'

const APP_DIR = 'splendid'

/** @type {import('splendid').Config} */
const config = {
  layout: join(APP_DIR, 'layout/main.html'),
  replacements: [
    {
      re: /{{ company }}/g,
      replacement: '[Art Deco&trade;](https://www.artd.eco)',
    },
    {
      re: /{{ page.seo }}/g,
      replacement() {
        return this.splendid.page.seo
      },
    },
  ],
  // components: ['components', '../articles/components'],
  elements: ['elements', '../articles/elements'],
  components: ['components', '../articles/components'],
  url: 'https://www.artd.eco',
  blocks: ['blocks', '../articles/blocks'],
}

export default config