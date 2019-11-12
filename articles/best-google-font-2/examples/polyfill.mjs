function DOMTokenListSupports(tokenList, token) {
  if (!tokenList || !tokenList.supports) {
    return false
  } try { return tokenList.supports(token) } catch (e) {
    return false }
}
const link = document.createElement('link')
const linkSupportsPreload = DOMTokenListSupports(link.relList, 'preload')