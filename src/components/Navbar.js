import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import { Router } from 'react-router-dom';


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg bg-body-tertiary navbar-${props.mode}`} data-bs-theme={`${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.aboutText}</Link>
        </li>
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-primary" type="submit">Search</button>
      </form> */}
    <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
      <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{`${props.mode==='light'?'Dark':'Light'}`} Mode</label>
    </div>
    </div>
  </div>
</nav>
  )
}

// Prop types: defines the type of the variable that is being sent! Useful for debugging
Navbar.propTypes = {
    title: PropTypes.string.isRequired, //.isRequired: incase you dont pass a title, and there is no default prop set then it'll throw an error
    about: PropTypes.string
}

// Incase developer forgets to pass the properties, insert the below values
Navbar.defaultProps = {
    title: "Set title here",
    aboutText: "About"
}