import React from "react"
import PropTypes from "prop-types"
import ApplicationForm from '../Components/ApplicationForm'

const NewApplication = ({createNewApplication, current_user}) => {
  return (
    <div className="page">
      <h1 className="heading">New Application</h1>
      <ApplicationForm
        createNewApplication={ createNewApplication }
        current_user={ current_user }
      />
    </div>
  );
}

export default NewApplication
