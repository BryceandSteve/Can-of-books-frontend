import { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default class createBook extends Component {

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.handleBookCreate({
            title: event.target.title.value,
            description: event.target.description.value,
            status: event.target.status.value,
            email: event.target.email.value,
        })
    }


    render(){
        return(
            <Form onSubmit={this.handleSubmit}>
                <Form.Group className="mb-3" controlId="title">
                    <Form.Label>Title</Form.Label>
                <Form.Control type="name" placeholder="Enter book title" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="description">
                    <Form.Label>Description</Form.Label>
                <Form.Control type="name" placeholder="Enter book description" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                <Form.Control type="name" placeholder="Enter your email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="status">
                    <Form.Label>Status</Form.Label> 
                    <Form.Check type="checkbox" label="Checking book in"/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    submit
                </Button>
            </Form>
        )
    }
}