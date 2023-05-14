import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from "../Navbar/Navbar";
import Map from "../map";
import "../Main/styles.module.css"
import Goals from "../setgoals.jsx"
import Goalsdisplay from "../goalsDisplay"


const Main = ({ user }) => {
  const [users, setUsers] = useState([]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isAdmin");
    window.location.reload();
  };

  // useEffect(() => {
  //   axios.get('/api/users')
  //     .then(response => {
  //       setUsers(response.data);
  //       console.log(response.data);
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // }, []);

  return (
    <>
      {user && <Navbar handleLogout={handleLogout} />}

      <div className="mainDiv">
      <Goalsdisplay/>
        <Goals/>
      </div>
    </>
  );
};

export default Main;
