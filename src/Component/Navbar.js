import React from "react";
import PropTypes from "prop-types";
//import { Link } from 'react-router-dom';


export default function Navbar(props) {
  return (
    <nav
      className={` navbar navbar-expand-lg navbar- ${props.mode} bg-${props.mode}`} 
    >
      <div className="container-fluid" style={{ backgroundColor: props.mode === '#339933' ? 'black' : 'white', color: props.mode === "#339933" ? "white" : "black",
      color: props.mode === "dark" ? "white" : "black"}} >
        <a
          className="navbar-brand"
          href="/"
          style={{ color: props.mode === "dark" ? "white" : "black" }}    
          style ={{color: props.mode === "#339933" ? "white" : "black"}}    
        >
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="#"
                style={{ color: props.mode === "dark" ? "white" : "black" }}
               style={{ color: props.mode === "#339933" ? "white" : "black"}}
              >
                Home
              </a>
            </li>
           { /* <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                style={{ color: props.mode === "dark" ? "white" : "black" }}
                style={{ color: props.mode === "#339933" ? "white" : "black"}}
              >
                {props.aboutText}
              </a>
            </li>*/}
          </ul>

          <div
            className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineCheckbox1"
              value="option1"
              style={{backgroundColor: '#339933'}}
              onClick={props.pallete}
            />
          </div>

          <div
            className={`form-check form-switch text=${
              props.mode === "dark" ? "white" : "black"
            }`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
              style ={{color: props.mode === "#339933" ? "white" : "black"}}
               >
              Switch to different Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};

/*Navbar.defaultProps ={
    title: 'Set title here',
    aboutText: 'About Text here'
};*/

Navbar.defaultProps = {
  aboutText: "About US",
};
