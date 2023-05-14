import "./AdminPanel.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AdminPanel() {
    const [users, setUsers] = useState([]);

    useEffect(async () => {
        await fetchAllUsers()
    }, []);


    async function handleAdmin(id) {
        try {
            const response = await axios.post("http://localhost:4000/api/users/toggle-admin", {
                userId: id,
            });
            console.log("handleAdmin: ", response.data.message);
        } catch (error) {
            console.log("handleAdmin: ", error);
        }
        await fetchAllUsers();
    }
    async function handleVolunteer(id) {
        try {
            const response = await axios.post("http://localhost:4000/api/users/toggle-volunteer", {
                userId: id,
            });
            console.log("handleVolunteer: ", response.data.message);
        } catch (error) {
            console.log("handleVolunteer: ", error);
        }
        await fetchAllUsers();
    }

    async function fetchAllUsers() {
        try {
            const response = await axios.get("http://localhost:4000/api/users/all");
            setUsers(response.data)
        } catch (error) {
            console.log("fetchAllUsers: ", error);
        }
    }

    return (
        <div>
            <h1>Admin Panel</h1>
            <table className="users-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Actions</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(data => (
                        <tr key={data._id}>
                            <td>{data.firstName}</td>
                            <td>{data.email}</td>
                            <td>{data.isAdmin ? 'admin' : data.isVolunteer ? 'volunteer' : 'user'}</td>
                            <td>
                                {!data.isAdmin && (<button onClick={() => handleAdmin(data._id)}>
                                    Make Admin</button>)}
                                {data.isAdmin && (<button onClick={() => handleAdmin(data._id)}>
                                    Remove Admin</button>)}
                            </td>
                            <td>
                                {!data.isVolunteer && (<button onClick={() => handleVolunteer(data._id)}>
                                    Make Volunteer</button>)}
                                {data.isVolunteer&& (<button onClick={() => handleVolunteer(data._id)}>
                                    Remove Volunteer</button>)}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default AdminPanel;
