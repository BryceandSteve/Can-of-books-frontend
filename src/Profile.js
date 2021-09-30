import { Component } from "react";
// import Card from "react";
import Button from "react-bootstrap/Button";

export default class Profile extends Component {
  render() {
    return (
      <>
        <h4>Name: {this.props.user.UserName}</h4>, 
        <h4>Email Address: {this.props.user.Email}</h4>
        <Button type="click" onClick={this.props.logoutHandler}>Logout</Button>
      </>
    );
  }
}
