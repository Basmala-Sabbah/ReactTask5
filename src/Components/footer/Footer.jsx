import React from 'react'

export default function Footer() {
  return (
    <footer className="app-footer">

      <div className="footer-content">

        <h3> CRUD Users System</h3>

        <p>
          A simple React project for managing users with Create, Read, Update & Delete features.
        </p>

        <div className="footer-links">
          <span> React</span>
          <span> Axios</span>
          <span> React Hook Form</span>
        </div>

        <p className="copyright">
          © {new Date().getFullYear()} All rights reserved | Built with 💙
        </p>

      </div>

    </footer>
  )
}