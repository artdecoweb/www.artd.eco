/**
 * @param {Object} p
 * @param {Splendid} p.splendid
 */
export default function TM({ splendid, children, class: c }) {
  let [child] = children
  child = child.trim()
  splendid.pretty(false)
  splendid.css('../articles/styles/TM.css', null, {
    whitelist: ['TM1'],
    inline: true,
  })
  const words = child.split(' ')
  const cc = ['TM1', c].filter(Boolean).join(' ')
  const w = words.map((ww, i, a) => {
    if (i < a.length - 1) ww += ' '
    return (<span className={cc} dangerouslySetInnerHTML={{ __html: ww }}/>)
  })
  return w
}

/**
 * @typedef {import('splendid/src/Splendid').default} Splendid
 */