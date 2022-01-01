import React from "react";
import "../Styles/Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="nav-outer">
      <div className="nav-inner">
        <Link to="/" className="nav-">
          <div className="navbrand">
            <h2>Resume Builder</h2>
          </div>
        </Link>
        <div className="nav-items">
          <ul className="list-items">
            <Link to="/" className="nav-">
              <li className="list-item">Home</li>
            </Link>
            <li className="list-item">Templates</li>
            <li className="list-item">Blog</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Nav;
