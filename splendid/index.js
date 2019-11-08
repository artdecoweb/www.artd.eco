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
  ],
  // components: ['components', '../articles/components'],
  elements: ['elements', '../articles/elements'],
  url: 'https://www.artd.eco',
  blocks: ['blocks', '../articles/blocks'],
}

export default config