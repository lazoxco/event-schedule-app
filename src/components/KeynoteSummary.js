import { Link } from 'react-router-dom'

const KeynoteSummary = ({ keynote }) => {
  return (
    <div className="card">      
      <div className="card-body">
        <h2 className="card-title">Topic: { keynote.title }</h2>
        <p className="card-text">Presenter: { keynote.speaker }</p> 
        <p className="card-text">Time: { keynote.date_time }</p>
        <Link to={`/keynotes/${keynote.id}`} className="btn btn-primary">More Details</Link>
      </div>
    </div>
  )
}

export default KeynoteSummary