import React from 'react';
import { Col, Container, Form } from 'react-bootstrap';

const FormComponent = () => {
  return (
    <Container >
      <Col md={4}> 
      <Form>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name"></Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>Email Adress</Form.Label>
          <Form.Control type="email" placeholder="Enter Email"></Form.Control>
          <Form.Text className="text-muted">
      Kami tidak akan menyalahgunakan email anda
    </Form.Text>
        </Form.Group>

        <Form.Group>
          <Form.Label>Upload File</Form.Label>
          <Form.Control type="file" placeholder="Enter Name"></Form.Control>
        </Form.Group>
      </Form>
      </Col>
    </Container>
  )
}

export default FormComponent;
