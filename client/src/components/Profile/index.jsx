import validator from 'validator';
import "./index.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Profile() {
    const [user, setUser] = useState(null);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [userId, setUserId] = useState(null);
    const [volunteer, setVolunteer] = useState(false);

    useEffect(() => {
        const userEmail = localStorage.getItem('email');
        fetchUser(userEmail);
    }, []);

    async function fetchUser(userEmail) {
        const urlEncodedEmail = encodeURIComponent(userEmail);
        try {
            const response = await axios.get(`http://localhost:4000/api/user/email/${urlEncodedEmail}`);
            setUser(response.data);
            setFirstName(response.data.firstName);
            setLastName(response.data.lastName);
            setUserId(response.data._id);
        } catch (error) {
            console.log("fetchUser: ", error);
        }
    }


    async function updateUser() {
        if (!userId) {
            console.error("Cannot update user: User ID is not available.");
            return;
        }

        const userToUpdate = {
            firstName,
            lastName,
            isVolunteer: volunteer,
        };

        try {
            const response = await axios.put(`http://localhost:4000/api/user/id/${userId}`, userToUpdate);
            console.log(response.data.message);
            alert(response.data.message);
            setUser(response.data);
        } catch (error) {
            console.log("updateUser: ", error);
        }
    }

    return (
        <div className="profile">
            <div className="card-container">
                <div className="card">
                    <h2>Edit Profile</h2>
                    <div className="form-group">
                        <label htmlFor="firstName">First Name:</label>
                        <input id="firstName" name="firstName" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name:</label>
                        <input id="lastName" name="lastName" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    </div>
                  
                    <button data-testid="edit-button" id="edit-button" onClick={updateUser}>OK</button>
                </div>
            </div>
        </div>
    );
}

export default Profile;
