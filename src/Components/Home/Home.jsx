import React from 'react'

export default function Home() {
  return (
    <div className="home-container">

      <div className="home-card">
        <h1>CRUD Users System 💙</h1>

        <p>
          Welcome to your simple React CRUD application  <br />
          You can easily create, read and manage users in a clean and modern interface.
        </p>

        <div className="home-features">
          <div>➕ Create Users</div>
          <div>📄 View Users</div>
          <div>🗑️ Delete Users (if added)</div>
          <div>⚡ Update Users</div>
        </div>

        <p className="home-footer">
          Built with React + React Hook Form + Axios 💙
        </p>
      </div>

    </div>
  )
}