export default function Avatar({ date, splendid }) {
  return (<row mb-3>
    <column className="col-2" sm-2 lg-1>
      <splendid-img placeholder-auto
        rounded img-fluid src="pages/articles/avatar/anton.JPG" alt="anton photo"/>
    </column>
    <column className="col-10" sm-6 border-bottom="1px solid grey">
      <p text-right color="grey">
        <span>Anton Dmukhovskiy, Senior Software Developer</span><br/>
        <span>{date}</span>
      </p>
    </column>
    <column sm-4 lg-5>
      Topics:
      {splendid.page.topics.map((topic) => {
        return (<a className="d-block" href={`/topics/${topic.toLowerCase()}`}>{topic}</a>)
      })}
    </column>
  </row>)
}