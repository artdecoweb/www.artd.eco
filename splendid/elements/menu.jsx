/**
   * @param {Object} props
   * @param {Splendid} props.splendid
   */
export default async function serverRender({ splendid }) {
  splendid.export()
  await splendid.addFile('js/menu.json')

  // svg-anim
  splendid.preload('node_modules://@artdeco/snapsvg-animator/svg-anim.min.js')
  await splendid.addFile('node_modules://@artdeco/snapsvg-animator/svg-anim.min.js.map')
  // snap min
  splendid.preload('node_modules://snapsvg/dist/snap.svg-min.js')
  splendid.extern('node_modules://@artdeco/snapsvg-animator/types/externs.js')

  splendid.css('styles/Menu.css', '.Menu', {
    inline: true,
  })

  return (<div className="Menu position-relative">
    <splendid-img
      placeholder-width="1226"
      placeholder-height="818" alt="menu" src="img/menu.svg" />
  </div>)
}


/**
 * @typedef {import('splendid/src/Splendid').default} Splendid
 */