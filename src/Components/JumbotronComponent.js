import React from 'react';
import { Container, Button } from 'react-bootstrap';

const JumbotronComponent = () => {
  return (
    <Container style={{ height: "100vh", width: "100%"}}>
      <div className="d-flex flex-column justify-content-center" >
        <h1>Hello</h1>
        <p>Selamat Datang</p>
        <Button variant="success">Explore Now</Button>
      </div>
    </Container>
  )
}

export default JumbotronComponent;
