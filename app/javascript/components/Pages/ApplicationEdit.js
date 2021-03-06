import React from "react"
import PropTypes from "prop-types"
import ApplicationEditForm from "../Components/ApplicationEditForm"

const ApplicationEdit = ({updateApplication, application}) => {
  return (
    <div className="page">
      <h1>Edit an Application</h1>
      <ApplicationEditForm
        updateApplication={ updateApplication }
        application={ application }
      />
    </div>
  );
}

export default ApplicationEdit
