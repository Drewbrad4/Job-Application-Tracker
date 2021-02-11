import React, { Component } from "react"
import PropTypes from "prop-types"
import { Link } from 'react-router-dom'
import { Button, Table } from 'reactstrap'
import ApplicationTable from '../Components/ApplicationTable'

const ApplicationShow = ({application}) => {
  return (
    <div className="page">
      <div className="applicationCard">
      {/* className="app-info" className="show-heading" */}
        <ApplicationTable application={application} />
        <Button>
              <Link to={`/editapplication/${application.id}`} className="button">
                  Edit Application
              </Link>
            </Button>
            <Button className="delete-btn" onClick={() => {this.props.deleteApplication(application.id)}}>
              <Link to={`/index`} className="button">
                  Delete Application
              </Link>
            </Button>
            <Button>
              <Link to="/index" className="button">
                  Back to All Applications
              </Link>
            </Button>
      </div>
    </div>
  );
}

export default ApplicationShow
