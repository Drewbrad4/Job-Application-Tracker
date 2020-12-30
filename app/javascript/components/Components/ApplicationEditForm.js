import React, { Component } from "react"
import PropTypes from "prop-types"
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { Redirect } from 'react-router-dom'

class ApplicationEditForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      form:{
        company: this.props.application.company,
        position: this.props.application.position,
        listing: this.props.application.listing,
        salary: this.props.application.salary,
        contact: this.props.application.contact,
        contact_email: this.props.application.contact_email,
        date_applied: this.props.application.date_applied,
        summary: this.props.application.summary,
        interview: this.props.application.interview,
        follow_up: this.props.application.follow_up,
        status: this.props.application.status,
        notes: this.props.application.notes
      },
      success: false
    }
  }

handleChange = (e) => {
    let { form } = this.state
    form[e.target.name] = e.target.value
    this.setState({ form: form })
}

handleSubmit = (e) => {
    e.preventDefault()
    this.props.updateApplication(this.state.form, this.props.application.id)
    this.setState({ success: true })
}

render(){
    let { form, success } = this.state
    return(
        <div className="form-page">
            <div className="form">
                <Form>
                  <FormGroup>
                      <Label>Company</Label>
                      <Input
                        type="text"
                        name="company"
                        onChange={ this.handleChange }
                        value={ form.company }
                      />
                  </FormGroup>

                  <FormGroup>
                      <Label>Position</Label>
                      <Input
                        type="text"
                        name="position"
                        onChange={ this.handleChange }
                        value={ form.position }
                      />
                  </FormGroup>

                  <FormGroup>
                      <Label>Listing</Label>
                      <Input
                        type="text"
                        name="listing"
                        onChange={ this.handleChange }
                        value={ form.listing }
                      />
                  </FormGroup>

                  <FormGroup>
                      <Label>Salary</Label>
                      <Input
                        type="text"
                        name="salary"
                        onChange={ this.handleChange }
                        value={ form.salary }
                      />
                  </FormGroup>

                  <FormGroup>
                      <Label>Contact</Label>
                      <Input
                        type="text"
                        name="contact"
                        onChange={ this.handleChange }
                        value={ form.contact }
                      />
                  </FormGroup>

                  <FormGroup>
                      <Label>Contact Email</Label>
                      <Input
                        type="text"
                        name="contact_email"
                        onChange={ this.handleChange }
                        value={ form.contact_email }
                      />
                  </FormGroup>

                  <FormGroup>
                      <Label>Date Applied</Label>
                      <Input
                        type="datetime-local"
                        name="date_applied"
                        onChange={ this.handleChange }
                        value={ form.date_applied }
                      />
                  </FormGroup>

                  <FormGroup>
                      <Label>Summary</Label>
                      <Input
                        type="textarea"
                        name="summary"
                        onChange={ this.handleChange }
                        value={ form.summary }
                      />
                  </FormGroup>

                  <FormGroup>
                      <Label>Interview</Label>
                      <Input
                        type="datetime-local"
                        name="interview"
                        onChange={ this.handleChange }
                        value={ form.interview }
                      />
                  </FormGroup>

                  <FormGroup>
                          <Label>Follow Up</Label>
                          <FormGroup check>
                            <Label check>
                                <Input
                                  type="radio"
                                  name="follow_up"
                                  value="Yes"
                                  checked={ form.follow_up === "Yes" }
                                  onChange={ this.handleChange }
                                />
                                Yes
                            </Label>
                          </FormGroup>

                          <FormGroup check>
                            <Label check>
                                <Input
                                  type="radio"
                                  name="follow_up"
                                  value="No"
                                  checked={ form.follow_up === "No" }
                                  onChange={ this.handleChange }
                                />
                                No
                            </Label>
                          </FormGroup>
                      </FormGroup>

                  <FormGroup>
                      <Label>Status</Label>
                      <FormGroup check>
                        <Label check>
                            <Input
                              type="radio"
                              name="status"
                              value="In Process"
                              checked={ form.status === "In Process" }
                              onChange={ this.handleChange }
                            />
                            In-Process
                        </Label>
                      </FormGroup>

                      <FormGroup check>
                        <Label check>
                            <Input
                              type="radio"
                              name="status"
                              value="Submitted"
                              checked={ form.status === "Submitted" }
                              onChange={ this.handleChange }
                            />
                            Submitted
                        </Label>
                      </FormGroup>

                      <FormGroup check>
                        <Label check>
                            <Input
                              type="radio"
                              name="status"
                              value="Rejected"
                              checked={ form.status === "Rejected" }
                              onChange={ this.handleChange }
                            />
                            Rejected
                        </Label>
                      </FormGroup>
                  </FormGroup>

                  <FormGroup>
                      <Label>Notes</Label>
                      <Input
                        type="textarea"
                        name="notes"
                        onChange={ this.handleChange }
                        value={ form.notes }
                      />
                  </FormGroup>


                  <Button
                    name="submit"
                    className="form-submit-btn"
                    onClick={ this.handleSubmit }
                  >
                    Edit Application
                  </Button>
                </Form>
            </div>

            { success && <Redirect to="/applications" /> }
        </div>
    )
}
}

export default ApplicationEditForm
