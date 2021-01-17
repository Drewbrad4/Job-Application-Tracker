import React, { Component } from "react"
import PropTypes from "prop-types"
import { Link } from 'react-router-dom'
import { Button, Table } from 'reactstrap'

const ApplicationShow = ({application}) => {
  return (
    <div className="page">
      <div className="applicationCard">
      {/* className="app-info" className="show-heading" */}
        <Table>
          <thead>
            <tr>
              <th>Position:</th>
              <th>{application.position} - {application.company}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Listing:</th>
              <td><a href={`http://${application.listing}`}>{application.listing}</a></td>
            </tr>
            <tr>
              <th scope="row">Salary:</th>
              <td>{application.salary}</td>
            </tr>
            <tr>
              <th scope="row">Contact:</th>
              <td>{application.contact} - {application.contact_email}</td>
            </tr>
            <tr>
              <th scope="row">Date Applied:</th>
              <td>{application.date_applied}</td>
            </tr>
            <tr>
              <th scope="row">Summary:</th>
              <td>{application.summary}</td>
            </tr>
            {application.interview &&
              <tr>
                <th scope="row">Interview:</th>
                <td>{application.interview}</td>
              </tr>}
            <tr>
              <th scope="row">Follow Up:</th>
              <td>{application.follow_up}</td>
            </tr>
            <tr>
              <th scope="row">Status:</th>
              <td>{application.status}</td>
            </tr>
            {application.notes &&
              <tr>
                <th scope="row">Notes:</th>
                <td>{application.notes}</td>
              </tr>}
          </tbody>
        </Table>
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
