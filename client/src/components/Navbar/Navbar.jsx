import { Link } from "react-router-dom";
import "../css/Navbar.css";

const Navbar = ({ handleLogout, isAdmin }) => {
  return (

    <header className="navbar">
      <h1 className="title">HealthFuel</h1>
      <ul className="nav_links">
        <li>
          <div className="navbarworld">
            <Link className="nav_link" to="/">
              <p>Home</p>
            </Link>
          </div>
        </li>
        <li>
          <div className="navbarworld">
            <Link to="/contact" className="nav_link">
              <p>Contact</p>
            </Link>
          </div>
        </li>
        <li>
          <div className="navbarworld">
            <Link to="/AboutPage" className="nav_link">
              <p>About Page</p>
            </Link>
          </div>
        </li>
        <li>
          <div className="navbarworld">
            <Link to="/volunteers" className="nav_link">
              <p>volunteers</p>
            </Link>
          </div>
        </li>
        <li>
          <div className="navbarworld">
            <Link to="/HowToUse" className="nav_link">
              <p>HowToUse</p>
            </Link>
          </div>
        </li>
        {isAdmin === 'true' && <li>
          <div className="navbarworld">
            <Link to="/adminPanel" className="nav_link">
              <p>Admin Panel</p>
            </Link>
          </div>
        </li>}
        <li>
          <div className="buttonDiv">
            <button className="white_btn" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </li>
      </ul>
    </header>/*
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <h1 className="title">HealthFuel</h1>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>

            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </header>*/
  );
};

export default Navbar;
