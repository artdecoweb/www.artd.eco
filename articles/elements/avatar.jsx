export default function Avatar({ date, splendid }) {
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
        <span>{date}</span> <social-buttons meta size="24" />
      </p>
    </column>
    <column sm-3 lg-4>
      Topics:
      {topics.map((topic) => {
        // eslint-disable-next-line react/jsx-key
        return (<a d-block href={`articles/topics#${topic.toLowerCase().replace(/ /g, '-')}`}>{topic}</a>)
      })}
    </column>
  </row>)
}