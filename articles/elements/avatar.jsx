/**
 *
 * @param {Object} param0
 * @param {Splendid} param0.splendid
 */
export default function Avatar({ date, splendid }) {
  /** @type {string[]} */
  let topics = splendid.page.topics
  if (!topics) {
    splendid.log('Topics are missing. Please specify some topics.')
    topics = []
  }
  return (<row mb-3>
    <column col-2 sm-2 lg-1>
      <splendid-img placeholder-auto
        rounded img-fluid src="~/articles/avatar/anton3.jpg" alt="anton photo"/>
    </column>
    <column col-10 sm-7 border-bottom="1px solid grey">
      <p text-right color="grey">
        <span>Anton Dmukhovskiy, Senior Software Developer</span><br/>
        <span>{date}</span> <span className="SplendidSharingButtons"><social-buttons meta size="24" /></span>
      </p>
    </column>
    <column sm-3 lg-4>
      <img alt="views counter" d-block src="https://api.artd.eco/counter.svg" />
      Topics:
      {topics.reduce((acc, topic, i, ar) => {
        // eslint-disable-next-line react/jsx-key
        const a = (<a href={`articles/topics#${topic.toLowerCase().replace(/ /g, '-')}`}>{topic}</a>)
        acc.push(a)
        if (i < ar.length - 1) acc.push(', ')
        return acc
      }, [' '])}
    </column>
  </row>)
}

/**
 * @typedef {import('splendid')} Splendid
 */