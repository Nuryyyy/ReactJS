import './TopBar.css';
import { NavLink } from 'react-router-dom'

function TopBar() {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
         <div className="container">
              <NavLink className="navbar-brand nav-tabs" to="/" end>TheTutorial</NavLink>
              <button className="navbar-toggler" data-bs-toggle="collapse"
            data-bs-target="#nav" aria-controls="nav" aria-label="Expand Navigation">
            <div class="navbar-toggler-icon"></div>
        </button>
            <div className="collapse navbar-collapse" id="nav">
                <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/home">Home</NavLink>
            </li>
            <li className="nav-item ">
              <NavLink className="nav-link" to="/movies">Movies</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/books">Books</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    )
}


export default TopBar