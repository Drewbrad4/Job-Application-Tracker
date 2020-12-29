import React from "react"
import PropTypes from "prop-types"
import { Nav, NavItem } from 'reactstrap'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div id="header">
      <h1 className="title">Job Application Tracker</h1>

      <Nav>
        <NavItem>
          <NavLink
            to="/"
            activeClassName="selected"
          >
            Home
          </NavLink>
        </NavItem>
        <NavItem>
        <NavLink
            to="/new"
            activeClassName="selected"
          >
            New Application
          </NavLink>
        </NavItem>
        <NavItem>
        <NavLink
            to="/index"
            activeClassName="selected"
          >
            Applications
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}

export default Header
