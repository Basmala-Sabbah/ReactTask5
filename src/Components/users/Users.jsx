import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Users() {

  const [users, setusers] = useState([]);

  const getUsers = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_BURL}/users`);
    setusers(data);
  }

  useEffect(() => {
    getUsers();
  }, [])

  const deleteUser = async (id) => {
    await axios.delete(`${import.meta.env.VITE_BURL}/users/${id}`);
    getUsers(); 
  }

  return (
    <div className="users-container">

      <div className="users-header">
        <h2>👥 Users Dashboard</h2>
        <Link className='btn btn-primary' to={'/create'}>
          + Create User
        </Link>
      </div>

      <div className="users-grid">

        {users.map(user => (
          <div key={user.id} className="user-card">

            <div className="user-avatar">
              {user.userName?.charAt(0).toUpperCase()}
            </div>

            <h5>{user.userName}</h5>
            <p>{user.email}</p>

            <div className="user-actions">
              <button
                onClick={() => deleteUser(user.id)}
                className="btn btn-danger btn-sm"
              >
                Delete
              </button>

              <Link to={`/users/${user.id}`} className='btn btn-warning btn-sm'>
                Details
              </Link>
            </div>

          </div>
        ))}

      </div>

    </div>
  )
}