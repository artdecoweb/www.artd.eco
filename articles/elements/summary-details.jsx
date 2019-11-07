export default function SummaryDetails({ summary, children, style }) {
  const s = `*${summary}*`
  const su = `<summary style="border-bottom: 1px solid; margin-bottom:1rem">${s}</summary>`
  const c = children[0].trim().split('\n\n').map(p => `<p>${p}</p>`).join('\n')
  return (<details className="SummaryDetails" style={style} open dangerouslySetInnerHTML={{ __html: `${su}\n${c}` }}></details>)
}