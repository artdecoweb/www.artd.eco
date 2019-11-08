/**
 *
 * @param {Object} param0
 * @param {Splendid} param0.splendid
 */
export default async function Revision({ children, splendid, style }) {
  await splendid.addFile('img/sketch.svg')
  splendid.css('../articles/styles/revision.css', '.Revision', {
    exported: false,
    inline: true,
  })
  return (<div style={style} className="mb-3 Revision">
    <ol background-image="/img/sketch.svg" dangerouslySetInnerHTML={{ __html: children[0] }}/>
    <bootstrap-div position-absolute width="1rem" bottom="0" top="0" right="1rem"
      border-left="1px solid #ec6a9d">
      <img src="img/arrows.svg" />
    </bootstrap-div>
  </div>)
}

/**
 * @typedef {import('splendid/build/Splendid')} Splendid
 */