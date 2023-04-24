//import styles from "./styles.module.css";
//import { Link, useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
const Main = ({ user }) => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  return (
	<>
      {user && <Navbar handleLogout={handleLogout} />}
    </>
	/*
    <div className={styles.main_container}>
      <nav className={styles.navbar}>
        <h1>HealthFuel</h1>
        <Link to="/contact">Contact</Link>
        {user && location.pathname == "/login" && location.pathname == "/signup" && (
          <button className={styles.white_btn} onClick={handleLogout}>
            Logout
          </button>
        )}
      </nav>
    </div>*/
  );
};
export default Main;