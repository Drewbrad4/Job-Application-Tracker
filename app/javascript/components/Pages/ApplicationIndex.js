import React, { Component } from "react"
import PropTypes from "prop-types"
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'

class ApplicationIndex extends Component {
  render () {
    return (
      <>
        <h1>Applications</h1>

        { this.props.applications.map((application, index) => {
          return(
            <div key={index} className="applicationCard">
              <h3>{application.position} AT {application.company}</h3>
              <h5>{application.listing}</h5>
              <p>Status: {application.status}</p>
              <Link to={`/applications/${application.id}`} className="button">
                  <Button className="info">More Info</Button>
              </Link>
            </div>
          )
        })}
      </>
    );
  }
}

export default ApplicationIndex
