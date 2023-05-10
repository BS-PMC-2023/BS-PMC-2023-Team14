import "./Volunteers.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Volunteers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/api/users")
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Volunteers</h1>
      <table className="users-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map(data => (
            <tr key={data._id}>
              <td>{data.name}</td>
              <td>{data.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Volunteers;
