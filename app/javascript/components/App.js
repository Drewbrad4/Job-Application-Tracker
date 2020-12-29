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
    fetch("/applications")
  }

  render () {
    return (
      <Router>

        <Header />

        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/new" component={ NewApplication } />
          <Route
            path="/index" render={(props) => {
              return (
                <ApplicationIndex
                  applications={this.state.applications}
                />
              )
            }}
          />
          <Route
            path="/applications/:id"
            render={ (props) => {
              let id = props.match.params.id
              let application = this.state.applications.find(application => application.id === parseInt(id))
              return(
                <ApplicationShow application={application}/>
              )
            }}
          />
        </Switch>
      </Router>
    );
  }
}

export default App
