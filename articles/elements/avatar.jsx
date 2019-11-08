export default function Avatar({ date, splendid }) {
  return (<row mb-3>
    <column className="col-2" sm-2 lg-1>
      <splendid-img placeholder-auto
        rounded img-fluid src="~/articles/avatar/anton.JPG" alt="anton photo"/>
    </column>
    <column className="col-10" sm-7 border-bottom="1px solid grey">
      <p text-right color="grey">
        <span>Anton Dmukhovskiy, Senior Software Developer</span><br/>
        <span>{date}</span> <social-buttons meta size="24" />
      </p>
    </column>
    <column sm-3 lg-4>
      Topics:
      {splendid.page.topics.map((topic) => {
        return (<a className="d-block" href={`/topics/${topic.toLowerCase()}`}>{topic}</a>)
      })}
    </column>
  </row>)
}