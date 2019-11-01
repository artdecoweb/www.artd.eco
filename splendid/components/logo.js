import { loadStyle } from '@lemuria/load-scripts'

export default class Logo {
  static 'load'(cb) {
    cb(null)
    loadStyle('/css/Logo.css', () => {})
  }
  static get 'plain'() {
    return true
  }
  render() {}
}

