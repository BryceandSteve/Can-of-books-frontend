import { Component } from "react";
import { Container } from "react-bootstrap/Container";
import Card from "react";

class Profile extends Component {

  render() {
    <Container>
        {this.props.Profile((email, idx) => {
            return(
            <Card key={idx}>
            <Card.Title>Profile</Card.Title>  
              <Card.Body>
                <Card.Text>
                  Name: {email.data.name},
                  Books Selected: {email.data.books}</Card.Text>
              </Card.Body>
            </Card>
            )
        })};
      </Container>
      if(email === null){
        
      }
    return <p>Profile page coming soon</p>
  }
};

export default Profile;
