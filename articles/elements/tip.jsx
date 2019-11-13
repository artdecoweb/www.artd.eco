export default function Tip({ splendid, children }) {
  splendid.export({})
  return (<bootstrap-div position-relative><p p-2 rounded border="1px dashed #decdb9" margin-left="2rem" margin-right="2rem" background="linear-gradient(45deg, white, #e3d6ce)">
    <splendid-img placeholder-width="120" placeholder-height="42" alt="finger pointer" src="~/articles/avatar/pointer.svg"
      float="left" style="width:120px" mt-3 mr-3 />
    {children}
  </p><div className="position-absolute" style="z-index:-1;top:0;left:0;bottom:0;right:0"/></bootstrap-div>)
}

export const allowedProps = []