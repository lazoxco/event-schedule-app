// import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
    <div class="container">
      <a className="navbar-brand" href="/">PR 2021</a>
      
      <ul className="navbar-nav">
        <li className="nav-item active">
          <a className="nav-link" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Schedule</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">New Keynote</a>
        </li>
      </ul>
    </div>

  </nav>
  )
}

export default Navbar