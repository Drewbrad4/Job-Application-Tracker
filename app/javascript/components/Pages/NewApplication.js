import React from "react"
import PropTypes from "prop-types"
import ApplicationForm from '../Components/ApplicationForm'

const NewApplication = ({createNewApplication}) => {
  return (
    <>
      <h1>New Application</h1>
      <ApplicationForm createNewApplication={ createNewApplication }/>
    </>
  );
}

export default NewApplication
