import Adonais from './Adonais'
import Parallax from './Parallax'
import Feature from './Feature'
import Sky from './Sky'
export { default as Pages } from './Menu'

export const Figure = ({ img, alt, children }) => {
  return <p className="Figure">
    <img src={img} alt={alt}/><br/>
    {children}
  </p>
}

/**
 * The link to the GitHub written as a Badge (`SimpleBadge` class).
 * @param {GitHubBadgeProps} props The properties.
 * @param {string} props.org The GitHub organisation.
 * @param {string} props.name The name of the repository.
 */
const GitHubBadge = (props) => {
  const { org, name } = props
  return (<a href={'https://github.com/' + `${org}/${name}`} className="SimpleBadge">GitHub</a>)
}

export default {
  'adonais': Adonais,
  'parallax': Parallax,
  'github-badge': GitHubBadge,
  'feature': Feature,
  'sky': Sky,
}

/**
 * @typedef {Object} GitHubBadgeProps
 * @prop {string} props.org The GitHub organisation.
 * @prop {string} props.name The name of the repository.
 */