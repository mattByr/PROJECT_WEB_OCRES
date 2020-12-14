import React from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import API from "../../utils/API";

export class Signup extends React.Component {
  state = {
    email: "",
    password: "",
    cpassword: "",
    lastname: "",
    firstname: ""
  };
  send = async () => {
    const { email, password, cpassword, lastname, firstname } = this.state;
    if (!email || email.length === 0) return;
    if (!lastname || lastname.length === 0) return;
    if (!firstname || firstname.length === 0) return;
    if (!password || password.length === 0 || password !== cpassword) return;
    try {
      const { data } = await API.signup({ email, password, lastname, firstname  });
      localStorage.setItem("token", data.token);
      window.location = "/dashboard";
    } catch (error) {
      console.error(error);
    }
  };
  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };
  render() {
    const { email, password, cpassword, lastname, firstname } = this.state;
    return (
      <div class='widget'>
        <div class="text font-weight-bold text-success text-uppercase mb-1" >
                    Sign up
                </div>
        <FormGroup controlId="email" bsSize="large">
          <ControlLabel>Email</ControlLabel>
          <FormControl
            autoFocus
            type="email"
            value={email}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <ControlLabel>Password</ControlLabel>
          <FormControl
            value={password}
            onChange={this.handleChange}
            type="password"
          />
        </FormGroup>
        <FormGroup controlId="cpassword" bsSize="large">
          <ControlLabel>Confirm Password</ControlLabel>
          <FormControl
            value={cpassword}
            onChange={this.handleChange}
            type="password"
          />
          <FormGroup controlId="lastname" bsSize="large">
          <ControlLabel>Last Name</ControlLabel>
          <FormControl 
          value={lastname}
          onChange={this.handleChange}
          type="lastname"
          />
          </FormGroup>
        <FormGroup controlId="firstname" bsSize="large">
          <ControlLabel>First Name</ControlLabel>
          <FormControl
            value={firstname}
            onChange={this.handleChange}
            type="firstname"
          />
        </FormGroup>
        </FormGroup>
        <div class=" btn btn-success  ">
          <Button onClick={this.send} block bsSize="large" type="submit">
          Inscription
        </Button>
        </div>
      </div>
    );
  }
}