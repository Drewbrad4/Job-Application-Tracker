import React from "react"
import PropTypes from "prop-types"
import ApplicationForm from '../Components/ApplicationForm'

const NewApplication = ({createNewApplication, current_user}) => {
  return (
    <>
      <h1>New Application</h1>
      <ApplicationForm
        createNewApplication={ createNewApplication }
        current_user={ current_user }
      />
    </>
  );
}

export default NewApplication
