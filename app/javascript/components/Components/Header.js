import React from "react"
import PropTypes from "prop-types"
import { Nav, NavItem } from 'reactstrap'
import { NavLink } from 'react-router-dom'

const Header = ({logged_in, sign_in_route, sign_out_route}) => {
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

        { !logged_in &&
          <NavItem>
            <a href={sign_in_route}>Sign In</a>
          </NavItem>
        }

        { logged_in &&
          <div>
            <NavItem>
              <NavLink
                to="/newapplication"
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
            <NavItem>
              <a href={sign_out_route}>Sign Out</a>
            </NavItem>
        </div>
        }
      </Nav>
    </div>
  );
}

export default Header
