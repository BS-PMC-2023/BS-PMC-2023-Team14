import { Link } from "react-router-dom";
import "../css/Navbar.css";

const Navbar = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <nav className="navbar">
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
          <div className="buttonDiv">
            <button className="white_btn" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
