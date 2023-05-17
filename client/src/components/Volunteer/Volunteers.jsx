import "./Volunteers.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

function Volunteers() {
    const [users, setUsers] = useState([]);
    
    useEffect(async () => {
        await fetchAllVolunteer()
    }, []);

    async function fetchAllVolunteer() {
        try {
            const response = await axios.get("http://localhost:4000/api/users/allVolunteer");
            setUsers(response.data)
        } catch (error) {
            console.log("fetchAllVolunteer: ", error);
        }
    }

    async function AddRating(id) {
     try {
            const response = await axios.post("http://localhost:4000/api/users/AddRating", {
                userId: id,
            });
            console.log("AddRating: ", response.data.message);
        } catch (error) {
            console.log("AddRating: ", error);
        }
        await fetchAllVolunteer();
      }
    return (
         <div className="volunteers">
         <div className="card-container">
           {users.map(data => (
             <div className="card" key={data._id}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/d/d8/Person_icon_BLACK-01.svg"/>  
               <h2>Name: {data.firstName}</h2>
               <p>Email: {data.email}</p>
               <p>Rate: {data.Rating}</p>
               <Link to={'/Rate/${data._id}'}>
               <p>Rating</p>
               </Link>
               <button onClick={() => AddRating(data._id)}>
                                   Add</button>
             </div>
           ))}
         </div>
       </div>
    );
}

export default Volunteers;
