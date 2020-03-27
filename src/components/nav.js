import React from 'react'
import { Link } from 'gatsby'

export default () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light fixed-top bg-light border-0">
      <div className="container">
        <div className="col d-flex justify-content-start px-0">
          <Link className="d-flex align-items-center navbar-brand mr-0 py-1" to="/">
            <i className="material-icons">bug_report</i>
            <span className="font-weight-light h6 mb-0">/ Tracker</span>
          </Link>
        </div>
        <div className="col px-0 d-flex justify-content-end">
          <a className="font-weight-light" href="https://staythefuckhome.com/sfw/" target="_blank" rel="noopener noreferrer">#StayTheF—Home</a>
        </div>
      </div>
    </nav>
  )
}