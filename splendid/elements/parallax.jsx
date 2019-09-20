export default class Parallax {
  async render({
    splendid, style, 'background-image': backgroundImage, class: className,
    ...props
  }) {
    splendid.export()
    const prefix = 'Parallax'
    splendid.addCSS('styles/Parallax.css', null, {
      whitelist: prefix,
      exported: false,
      combined: false,
      preload: true,
    })
    splendid.polyfill('intersection-observer')

    if (backgroundImage) await splendid.addFile(backgroundImage)

    const st = splendid.controlStyle(style, { ...props })

    const style2 = splendid.controlStyle(style, {
      ...(backgroundImage ? { 'background-image': `url(${backgroundImage})` } : {}),
      ...props,
    })
    const cn = [className, prefix].join(' ')
    splendid.hideNoJs('[data-loading]')
    // min-y={minY} min-y-md={minYMd} x={x} y={y} oy={oy}
    return [
      <div data-loading className={cn} style={st} />,
      <div className={prefix}/>,
      <noscript><div className={cn} style={style2} /></noscript>,
    ]
  }
  /**
   * @suppress {checkTypes}
   */
  static get 'browserProps'() {
    return ['background-image']
  }
}