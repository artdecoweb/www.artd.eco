export default function Bottom({ splendid, img, height = '50px' }) {
  splendid.addScript('js/bottom', false, {}, true)
  return (<div style="position:relative;">
    <container-fluid p-0 position-absolute top="0" left="0" height={height} overflow="hidden">
      <parallax background-image={img} />
    </container-fluid>
    <bootstrap-div id="bottom" position-absolute top={height} left="0" />
  </div>)
}