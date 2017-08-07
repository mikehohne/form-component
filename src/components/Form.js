import React, { Component } from 'react'
import { Form, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap'


class Forms extends Component {

  state = {
    name:"",
    age: "",
    team: "",
    disabled: true,
    buttonClass: "warning",
    buttonText: "Send",
    query: ""
  }

  componentDidMount(){
    if(this.state.query)
      this.setState({
        disabled:false,
        name: this.state.name,
        team: this.state.team,
        age: this.state.age,
        value: ''
      })
  }


  render() {

    const { disabled, buttonClass, buttonText, query, name, age, team } = this.state

    return (
      <div>
        <br/>
        <h2>Form 1: Inline</h2>
        <Form inline>
          <FormGroup controlId="formInlineName" validationState="warning">
            <ControlLabel className="form-label">Name</ControlLabel>
            <FormControl type="text" placeholder="Name" value={name} onChange={(event) => this.previewCard(event.target.value)} required/>
          </FormGroup>
          <FormGroup controlId="formInlineName" validationState="warning">
            <ControlLabel className="form-label">Username</ControlLabel>
            <FormControl type="text" placeholder="Username" value={age} required/>
          </FormGroup>
          <FormGroup controlId="formInlineEmail" validationState="warning">
            <ControlLabel className="form-label">Email</ControlLabel>
            <FormControl type="email" placeholder="jane.doe@example.com" value={team} required/>
          </FormGroup>
          <Button className={"btn btn-" + buttonClass } type="submit" disabled={disabled} onSubmit={this.sendingInformation}>
            {buttonText}
          </Button>
        </Form>
        <br />
        <div className="container">
          <div className="card-container">
            <h3 className="first-name">{name}</h3>
            <h6>{age}</h6>
            <h6>{team}</h6>
          </div>
        </div>
        <hr />
      </div>

    )
  }
}

export default Forms
