// import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
    <div className="container">
      <a className="navbar-brand" href="/">DevCon</a>
      
      <ul className="navbar-nav">
        <li className="nav-item active">
          <a className="nav-link" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/schedule">Schedule</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/create">New Keynote</a>
        </li>
      </ul>
    </div>

  </nav>
  )
}

export default Navbar