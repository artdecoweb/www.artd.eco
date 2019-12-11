import { readFileSync } from 'fs'

export default function PyramidBlock() {
  const f = readFileSync('articles/blocks/articles-pyramid.html', 'utf8')
  return f
}