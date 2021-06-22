
const KeynoteSummary = ({ keynote }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">{ keynote.title }</h2>
        <p className="card-text">by { keynote.speaker }</p> 
        <p className="card-text">{ keynote.date_time }</p>
        <a href="/" className="btn btn-primary">Learn More</a>
      </div>
    </div>
  )
}

export default KeynoteSummary