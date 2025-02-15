import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
  let mystyle = {
    color: `${props.mode === '#f8f9fa' ? 'black' : 'white'}`,
    background: `${props.mode}`
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg " style={mystyle}>
        <div className="container-fluid">
          <Link className="navbar-brand" style={mystyle} to="/">{props.Title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" style={{ color: props.mode === '#f8f9fa' ? 'black' : 'white' }} to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" style={{ color: props.mode === '#f8f9fa' ? 'black' : 'white' }} to="/about">{props.About}</Link>
              </li>
            </ul>


            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" role="switch" onClick={props.newToggle} id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode === '#d63384' ? 'Enable orange' : 'Enable Pink'}</label>
            </div>

            <div className={`form-check form-switch text-${props.mode === '#f8f9fa' ? 'black' : 'white'}`}>
              <input className="form-check-input mx-1" type="checkbox" role="switch" onClick={props.toggleMode} id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode === '#f8f9fa' ? 'Enable Dark' : 'Enable Light'}</label>
            </div>
          </div>
        </div>
      </nav >
    </div >
  )
}

Navbar.propTypes = {
  Title: PropTypes.string,
  About: PropTypes.string
}