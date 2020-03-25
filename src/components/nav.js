import React from 'react'
import { Link } from 'gatsby'

export default () => (
  <nav className="navbar navbar-expand-md navbar-light fixed-top bg-light border-0">
    <div className="container">
      <div className="col d-flex justify-content-center align-items-center px-0">
        <i className="material-icons">bug_report</i>
        <Link className="navbar-brand mr-0" to="/"><span className="font-weight-light h6">/ Tracker</span></Link>
      </div>
    </div>
  </nav>
)