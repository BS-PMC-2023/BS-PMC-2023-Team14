import { Link } from "react-router-dom";
import "../css/Navbar.css";

const Navbar = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <nav className="navbar">
      <Link to="/" >
        <h1 className="title">HealthFuel</h1>
      </Link>
      <ul className="nav_links">
        <li>
          <Link to="/contact" className="nav_link">
            Contact
          </Link>
        </li>
        <li>
          <button className="white_btn" onClick={handleLogout}>
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
