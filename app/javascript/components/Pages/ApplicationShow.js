import React, { Component } from "react"
import PropTypes from "prop-types"
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'

class ApplicationShow extends Component {
  render () {
    const {application} = this.props
    return (
      <div className="show">
              <div className="apartmentCard">
                  <h3 className="heading">{application.position} - {application.company}</h3>
                  <p className="app-info">Listing: <a href={`http://${application.listing}`}>{application.listing}</a></p>
                  <p className="app-info">Salary: {application.salary}</p>
                  <p className="app-info">Contact: {application.contact} - {application.contact_email}</p>
                  <p className="app-info">Date Applied: {application.date_applied}</p>
                  <p className="app-info">Summary: {application.summary}</p>
                  { application.interview &&
                  <p className="app-info">Interview: {application.interview}</p>}
                  <p className="app-info">Follow Up: {application.follow_up}</p>
                  <p className="app-info">Status: {application.status}</p>
                  { application.notes &&
                  <p className="app-info">Notes: {application.notes}</p>}
                  <Link to={`/editapplication/${application.id}`} className="button">
                      <Button className="info">Edit Application</Button>
                  </Link>
                  <Link to="/applications" className="button">
                      <Button className="info">Back to All Applications</Button>
                  </Link>
              </div>
          </div>
    );
  }
}

export default ApplicationShow
