import { Link } from 'react-router-dom'

const Keynotes = ({ keynotes }) => {

  const renderKeynotes = keynotes.map((keynote) => (
    <div key={ keynote.id }>
        <div className="card">      
          <div className="card-body">
            <h2 className="card-title">{ keynote.title }</h2>
            <p className="card-text">Presenter: { keynote.speaker }</p> 
              <p className="card-text">Time: { keynote.date_time }</p>
              <Link to={`/keynotes/${keynote.id}`} className="btn btn-primary">More Details</Link>
          </div>
        </div>
    </div>
  ))
  return (
    <div className="container">
      { renderKeynotes }
    </div>
  )

}

export default Keynotes