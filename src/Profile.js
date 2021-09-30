import { Component } from "react";
import Card from "react";
import Button from "react-bootstrap/Button";

class Profile extends Component {

  render() {
    return(
    <>
      return(
        <Card>
          <Card.Title>Profile</Card.Title>  
            <Card.Body>
              <Card.Text>
                Name: {this.props.user.userName},
                Email Address: {this.props.user.email}
                <Button type='click' onClick={this.props.logoutHandler}>Logout</Button>
              </Card.Text>
            </Card.Body>
        </Card>
      )
    </>
  )};
}


export default Profile;
