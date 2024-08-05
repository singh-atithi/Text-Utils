import React from "react";
import PropTypes from "prop-types";
// import{Link} from 'react-router-dom';
export default function Navbar(props) {
 
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg nav bar-${props.mode} bg-${props.mode}`}
      >
        <a className={`navbar-brand ml-3 font-weight-bold text-${props.mode==="dark"?"light":"dark"}`} href="#">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className={`nav-link ml-3 font-weight-bold text-${props.mode==="dark"?"light":"dark"}`} href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            {/* <li className="nav-item">
              <a className={`nav-link font-weight-bold text-${props.mode==="dark"?"light":"dark"}`} href="/">
                {props.aboutText}
              </a>
            </li> */}
          </ul>
          <div className="form-check form-switch">
            <input
              className="form-check-input "
              onClick={props.toggleMode}
              type="checkbox"
              id="flexSwitchCheckChecked"
            />
            <label
              className={`form-check-label text-${props.mode==='light'?'dark':'light'}`}
              htmlFor="flexSwitchCheckChecked"
            >
              Enable DarkMode
            </label>
          </div>
        </div>
      </nav>
    </div>
  );
}
Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string,
};
