import React from "react";
import PropTypes from "prop-types";
export default function Navbar(props) {
  const handleColor=(event)=>{
    let x=event.target.style.backgroundColor;
    props.color(x)
  }
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg nav bar-${props.mode} bg-${props.mode}`}
      >
        <a className="navbar-brand" href="/">
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
              <a className="nav-link" href="/">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                {props.aboutText}
              </a>
            </li>
          </ul>
          {props.mode==="dark" && (
          <div style={{display:"flex",marginRight:"30px"}}>
            <div onClick={handleColor} style={{height:"20px",
              width:"20px",margin:"5px",
              backgroundColor:"#495057"
            }}></div>
            <div onClick={handleColor} style={{height:"20px",
              width:"20px",margin:"5px",
              backgroundColor:"#0f4c5c"
            }}></div>
            <div onClick={handleColor} style={{height:"20px",
              width:"20px",margin:"5px",
              backgroundColor:"#212529"
            }}></div>
            <div onClick={handleColor} style={{height:"20px",
              width:"20px",margin:"5px",
              backgroundColor:"#1e6091"
            }}></div>
            <div onClick={handleColor} style={{height:"20px",
              width:"20px",margin:"5px",
              backgroundColor:"#184e77"
            }}></div>
            <div onClick={handleColor} style={{height:"20px",
              width:"20px",margin:"5px",
              backgroundColor:"#023e8a"
            }}></div>
          </div>
          )}
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
