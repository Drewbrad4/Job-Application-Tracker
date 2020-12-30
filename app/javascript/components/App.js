import React from "react"
import PropTypes from "prop-types"
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import Header from './Components/Header'
import ApplicationIndex from './Pages/ApplicationIndex'
import ApplicationShow from './Pages/ApplicationShow'
import ApplicationEdit from './Pages/ApplicationEdit'
import NewApplication from './Pages/NewApplication'
import Home from './Pages/Home'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      applications: []
    }
  }

  componentDidMount() {
    this.applicationIndex()
  }

  applicationIndex = () => {
    fetch("/applications")
      .then(response => {
        return response.json()
      })
      .then(payload => {
        this.setState({
          applications: payload
        })
      })
      .catch(errors => {
        console.log("index errors: ", errors)
      })
  }

  createNewApplication = (application) => {
    return fetch("/applications", {
      body: JSON.stringify(application),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
    .then(response => {
      if(response.status === 200){
        this.applicationIndex()
      } else if(response.status === 422){
        alert("Invalid Submission")
      }
      return response
    })
    .catch(errors => {
      console.log("create errors:", errors);
    })
  }

  updateApplication = (application, id) => {
    return fetch(`/applications/${id}`, {
      body: JSON.stringify(application),
      headers: {
        "Content-Type": "application/json"
      },
      method: "PATCH"
    })
    .then(response => {
      if(response.status === 200){
        this.applicationIndex()
      }
      return response
    })
    .catch(errors => {
      console.log("edit errors", errors)
    })
  }

  deleteApplication = (id) => {
    return fetch(`/applications/${id}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE"
    })
    .then(response => {
      alert("Application deleted.")
      this.applicationIndex()
      return response
    })
    .catch(errors => {
      console.log("delete errors:", errors)
    })
  }

  render () {
    const {
      logged_in,
      sign_in_route,
      sign_out_route,
      current_user
    } = this.props
    console.log(current_user);
    return (
      <Router>

        <Header
          logged_in={ logged_in }
          sign_in_route={ sign_in_route }
          sign_out_route={ sign_out_route }
        />

        <Switch>
          <Route exact path="/" component={ Home } />
          <Route
            path="/newapplication" render={(props) => {
              return (
                <NewApplication
                  createNewApplication={ this.createNewApplication }
                  current_user={ current_user }
                />
              )
            }}
          />
          <Route
            path="/applications" render={(props) => {
              return (
                <ApplicationIndex
                  applications={ this.state.applications }
                />
              )
            }}
          />
          <Route
            path="/application/:id"
            render={ (props) => {
              let id = props.match.params.id
              let application = this.state.applications.find(application => application.id === parseInt(id))
              return(
                <ApplicationShow
                  application={ application }
                  deleteApplication={this.deleteApplication}
                />
              )
            }}
          />
          <Route
            path="/editapplication/:id"
            render={ (props) => {
              let id = props.match.params.id
              let application = this.state.applications.find(application => application.id === parseInt(id))
              return(
                <ApplicationEdit
                  application={ application }
                  updateApplication={ this.updateApplication }
                  current_user={ current_user }
                />
              )
            }}
          />
        </Switch>
      </Router>
    );
  }
}

export default App
