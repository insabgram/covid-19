import React from 'react'
import { Link } from 'gatsby'

export default () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light fixed-top bg-light border-0">
      <div className="container">
        <div className="col d-flex justify-content-start align-items-center px-0">
          <i className="material-icons">bug_report</i>
          <Link className="navbar-brand mr-0" to="/"><span className="font-weight-light h6">/ Tracker</span></Link>
        </div>
        <div className="col px-0 d-flex justify-content-end">
          <a className="font-weight-light" href="https://staythefuckhome.com/" target="_blank" rel="noopener noreferrer">Stay home, please!</a>
        </div>
      </div>
    </nav>
  )
}