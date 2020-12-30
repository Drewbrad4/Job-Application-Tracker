import React, { Component } from "react"
import PropTypes from "prop-types"
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { Redirect } from 'react-router-dom'

class ApplicationForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      form:{
        company: "",
        position: "",
        listing: "",
        salary: "",
        contact: "",
        contact_email: "",
        date_applied: "",
        summary: "",
        interview: "",
        follow_up: "No",
        status: "In Process",
        notes: "",
        user_id: this.props.current_user.id
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
    this.props.createNewApplication(this.state.form)
    console.log(this.state.form)
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

                  {/* <FormGroup>
                          <Label>Follow Up</Label>
                          <FormGroup check>
                            <Label check>
                                <Input
                                  type="radio"
                                  name="follow_up"
                                  value="yes"
                                  checked={ form.follow_up === "yes" }
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
                                  value="no"
                                  checked={ form.follow_up === "no" }
                                  onChange={ this.handleChange }
                                />
                                No
                            </Label>
                          </FormGroup>
                      </FormGroup> */}

                  {/* <FormGroup>
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
                  </FormGroup> */}

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
                    Add a new Job Application
                  </Button>
                </Form>
            </div>

            { success && <Redirect to="/applications" /> }
        </div>
    )
}
}

export default ApplicationForm
