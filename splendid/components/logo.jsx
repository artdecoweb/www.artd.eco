import { loadStyle } from '@lemuria/load-scripts'

export default class Logo {
  static 'load'(cb) {
    cb(null)
    loadStyle('/css/Logo.css', () => {})
  }
  static get 'plain'() {
    return true
  }
  /**
   * @param {Object} params
   * @param {Splendid} params.splendid
   */
  serverRender({ splendid }) {
    splendid.export()
    splendid.addCSS('styles/Logo.css', null, {
      whitelist: 'Logo',
      dynamic: true,
      preload: true,
    })

    return (<splendid-img above-fold responsive sizes="300px" webp="text" no-potrace src="img/logo.png" alt="Art Deco Logo" className="img-fluid Logo" />)
  }
  render() {}
}


/**
 * @typedef {import('splendid/src/Splendid').default} Splendid
 */