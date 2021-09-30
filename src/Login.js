import React from 'react';
import Card from 'react-bootstrap/Card';
import LoginButton from './LoginButton'

export default class Login extends React.Component {
  render() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Please Continue to log In</Card.Title>
          <LoginButton loginHandler={this.props.loginHandler}/>
        </Card.Body>
      </Card>
    )
  }
}
