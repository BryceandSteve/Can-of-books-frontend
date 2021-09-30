import { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default class createBook extends Component {

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.handleBookCreate({
            title: event.target.formTitle.value,
            description: event.target.formDescription.value,
            status: event.target.formStatus.value,
            email: event.target.formEmail.value,
        })
    }


    render(){
        return(
            <Form onSubmit={this.handleSubmit}>
                <Form.Group className="mb-3" controlId="formTitle">
                    <Form.Label>Title</Form.Label>
                <Form.Control type="name" placeholder="Enter book title" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formDescription">
                    <Form.Label>Description</Form.Label>
                <Form.Control type="name" placeholder="Enter book description" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                <Form.Control type="name" placeholder="Enter your email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formStatus">
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