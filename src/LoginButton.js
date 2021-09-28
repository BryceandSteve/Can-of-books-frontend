import { Component } from 'react'
import Button from "react-bootstrap/Button"

export default class LoginButton extends Component {

  render() {
    return (
      <Button onClick={this.props.login}>
        Log In
      </Button>
    )
  }
}
