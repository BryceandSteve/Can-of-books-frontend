import { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default class LoginForm extends Component {

  userInfo = (event) => {
    event.preventDefault();
      var user = { 
        UserName: event.target.userName.value,
        Email: event.target.email.value,
      };
      this.props.loginHandler(user);
  }
  render() {
    /* TODO: create a simple login form that collects username and and email, and lets parent component know when form has been submitted */
    return (
      <Form onSubmit={this.userInfo}>
        <Form.Group className="mb-3" controlId="userName">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Please enter a valid Username"/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="text" placeholder="Please enter a valid Email Address"/>
        </Form.Group>
        <Button type="submit" variant="primary">Submit</Button>
      </Form>
    );
  }
};


