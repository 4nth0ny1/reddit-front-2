import React from "react";
import { Link, withRouter } from "react-router-dom";
import Search from './Search'

function Navigation(props) {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img alt="logo" src="https://www.pngall.com/wp-content/uploads/2016/07/Reddit-Free-PNG-Image.png" />
          </Link>
          { props.location.pathname === '/' && <Search /> }
          <div>
            <ul className="navbar-nav ml-auto">
              <li
                className={`nav-item  ${
                  props.location.pathname === "/" && "active" }`}
              >
                <Link className="nav-link" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li
                className={`nav-item  ${
                  props.location.pathname === "/posts/new" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/posts/new">
                  Create Post
                </Link>
              </li>
              <li
                className={`nav-item  ${
                  props.location.pathname === "/about" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li
                className={`nav-item  ${
                  props.location.pathname === "/terms" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/terms">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);