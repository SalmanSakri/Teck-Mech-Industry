import React from 'react'
import { Link } from 'react-router-dom'
import "../style/PageNotFound.css"
const PageNotFound = () => {
  return (
    <div className="not-found-container">
    <div className="not-found-content">
      <h1>Oops!</h1>
      <p>The page you're looking for Is Under Maintenance.</p>
      <Link to="/" className="back-home-link">
        Go back to home
      </Link>
    </div>
  </div>
  )
}

export default PageNotFound