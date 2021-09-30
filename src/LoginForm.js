import { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default class LoginForm extends Component {

  render() {
    /* TODO: create a simple login form that collects username and and email, and lets parent component know when form has been submitted */
    return (
      <Form>
        <Form.Group className="mb-3" controlId="formUserName">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Please enter a valid Username"/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="text" placeholder="Please enter a valid Email Address"/>
        </Form.Group>
        <Button onClick={event => this.props.loginHandler(event)} type="submit" variant="primary">Submit</Button>
      </Form>
    );
  }
};


