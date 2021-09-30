import { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

export default class updatebook extends Component {

    handleSubmit = async (event) => {
        event.preventDefault();
        const bookData = {
            title: event.target.formTitle.value,
            description: event.target.formDescription.value,
            status: event.target.formStatus.value,
            email: event.target.formEmail.value,
        }
    
      this.props.hideForm();
      const email = this.props.user.email;
      const id = this.props.id
  
      const bookAPI = `http://localhost:3001/books/${id}?email=${email}`;
      const newBookData = await axios.put(bookAPI, bookData);
      
      this.props.getBooks(newBookData);
    }
    render() {
        return (
    
          <Form onSubmit={this.handleSubmit}>
            <Form.Group className="mb-3" controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control type="title" placeholder="Title of the book"  />
            </Form.Group>
            <Form.Group className="mb-3" controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control type="description" placeholder="description" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formStatus">
                <Form.Label>Status</Form.Label> 
                <Form.Check type="checkbox" label="Checking book in"/>
            </Form.Group>
            <Button variant="primary" type="submit" >
              Save Book Update
            </Button>
          </Form>
        )
    }
    
}