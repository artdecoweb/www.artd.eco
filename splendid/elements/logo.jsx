/**
   * @param {Object} params
   * @param {Splendid} params.splendid
   */
export default function Logo({ splendid, sizes = '300px' }) {
  splendid.export()
  splendid.css('styles/Logo.css', null, {
    dynamic: true,
    preload: true,
  })
  return (<splendid-img id="Logo" above-fold responsive sizes={sizes} webp="text" no-potrace src="img/logo.png" alt="Art Deco Logo" className="img-fluid" />)
}

/**
 * @typedef {import('splendid/src/Splendid').default} Splendid
 */