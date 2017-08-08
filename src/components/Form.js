import React, { Component } from 'react'
import { Form, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap'


class Forms extends Component {

  state = {
    fullName:"",
    teamName: "",
    postion: "",
    disabled: true,
    buttonClass: "warning",
    buttonText: "Send"
  }

  previewCard = (event) => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
      disabled: false
    })
  }


  render() {

    const { disabled, buttonClass, buttonText, fullName, teamName, position } = this.state

    return (
      <div>
        <br/>
        <h2>Form 1: Inline</h2>
        <Form inline>
          <FormGroup controlId="formInlineName" validationState="warning">
            <ControlLabel className="form-label">Full Name</ControlLabel>
            <FormControl type="text" name="fullName" placeholder="Name" value={fullName} onChange={this.previewCard} required/>
          </FormGroup>
          <FormGroup controlId="formInlineName" validationState="warning">
            <ControlLabel className="form-label">Team Name</ControlLabel>
            <FormControl type="text" name="teamName" placeholder="Team" value={teamName} onChange={this.previewCard} required/>
          </FormGroup>
          <FormGroup controlId="formInlineEmail" validationState="warning">
            <ControlLabel className="form-label">Position</ControlLabel>
            <FormControl type="text" name="position" placeholder="Shortstop" value={position} onChange={this.previewCard} required/>
          </FormGroup>
          <Button className={"btn btn-" + buttonClass } type="submit" disabled={disabled}>
            {buttonText}
          </Button>
        </Form>
        <br />
        <div className="container">
          <div className="card-container">
            <h3 className="first-name">{fullName}</h3>
            <h6>{teamName}</h6>
            <h6>{position}</h6>
          </div>
        </div>
        <hr />
      </div>

    )
  }
}

export default Forms
