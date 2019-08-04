import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import './NavBar.css'
class NavBar extends Component {
  render() {
    return (
      <nav className="nav-wrapper">
        <li><NavLink to="/courses">Courses</NavLink></li>
        <li><NavLink to="/users">Users</NavLink></li>
      </nav>
    );
  }
}

export default NavBar;
