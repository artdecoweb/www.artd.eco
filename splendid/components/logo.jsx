import { loadStyle } from '@lemuria/load-scripts'

export default class Logo {
  static 'load'(cb) {
    cb(null)
    loadStyle('/styles/Logo.css')
  }
  serverRender({ splendid }) {
    splendid.addCSS('styles/Logo.css', null, {
      whitelist: 'Logo',
    })
    return (<splendid-img above-fold responsive sizes="300px" webp="text" no-potrace src="img/logo.png" alt="Art Deco Logo" className="img-fluid Logo" />)
  }
}