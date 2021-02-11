import React from 'react'
import { Table } from 'reactstrap'

const ApplicationTable = ({application}) => {
    return(
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
    )
}

export default ApplicationTable