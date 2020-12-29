import React, { Component } from "react"
import PropTypes from "prop-types"
import ApplicationForm from '../Components/ApplicationForm'

class NewApplication extends Component {
  render () {
    return (
      <>
        <h1>New Application</h1>
        <ApplicationForm />
      </>
    );
  }
}

export default NewApplication
