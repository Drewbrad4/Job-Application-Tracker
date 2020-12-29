import React from "react"
import PropTypes from "prop-types"
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch
} from 'react-router-dom'
import { Nav, NavItem } from 'reactstrap'
import ApplicationIndex from './Pages/ApplicationIndex'
import NewApplication from './Pages/NewApplication'
import Home from './Pages/Home'

class App extends React.Component {
  render () {
    return (
      <Router>

        <Nav>
          <NavItem>
            <NavLink to="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/new">New Application</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/index">Applications</NavLink>
          </NavItem>
        </Nav>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/new" component={ NewApplication } />
          <Route path="/index" component={ ApplicationIndex } />
        </Switch>
      </Router>
    );
  }
}

export default App
