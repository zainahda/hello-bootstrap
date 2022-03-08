import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Figure,
  Alert,
  Badge,
  Button,
  Breadcrumb,
  BreadcrumbItem,
  ButtonGroup,
  Card,
} from "react-bootstrap";
import CarouselComponent from "./Components/CarouselComponent";
import ColapseComponent from "./Components/ColapseComponent";
import DropdownComponent from "./Components/DropdownComponent";
import FormComponent from "./Components/FormComponent";
import JumbotronComponent from "./Components/JumbotronComponent";
import NavbarComponent from "./Components/NavbarComponent";
import NavComponent from "./Components/NavComponent";
import OverlayComponent from "./Components/OverlayComponent";
import PaginationComponent from "./Components/PaginationComponent";
import bg1 from "./images/bg1.jpg";
import bg2 from "./images/bg2.jpg";

class App extends Component {
  render() {
    return (
      <Container className="mt-5 mb-5">
        <NavbarComponent />
        <DropdownComponent />
        <Breadcrumb>
          <BreadcrumbItem href="#">Home</BreadcrumbItem>
          <BreadcrumbItem href="/">Menu Makanan</BreadcrumbItem>
        </Breadcrumb>
        <NavComponent />
        <JumbotronComponent />
        <CarouselComponent />
        <Row>
          <Col>
            <Figure>
              <img
                width={64}
                height={64}
                className="mr-3"
                src={bg1}
                alt="Generic placeholder"
              />
              <Figure.Caption>
                <h5>Media Heading</h5>
                <p>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                  scelerisque ante sollicitudin commodo. Cras purus odio,
                  vestibulum in vulputate at, tempus viverra turpis. Fusce
                  condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                  congue felis in faucibus.
                </p>
              </Figure.Caption>
            </Figure>
          </Col>
          <Col>
            <Figure>
              <img
                width={64}
                height={64}
                className="mr-3"
                src={bg2}
                alt="Generic placeholder"
              />
              <Figure.Caption>
                <h5>Media Heading</h5>
                <p>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                  scelerisque ante sollicitudin commodo. Cras purus odio,
                  vestibulum in vulputate at, tempus viverra turpis. Fusce
                  condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                  congue felis in faucibus.
                </p>
              </Figure.Caption>
            </Figure>
          </Col>
        </Row>
        <Row>
          <Col md={2}>
            <ButtonGroup className="me-2" aria-label="First group">
              <Button>1</Button> <Button>2</Button> <Button>3</Button>{" "}
              <Button>4</Button>
            </ButtonGroup>
          </Col>
          <Col md={8}>
            <Button variant="primary">
              Profile <Badge bg="secondary">9</Badge>
              <span className="visually-hidden">unread messages</span>
            </Button>
          </Col>
          <Col md={2}>
            <Alert variant="success">
              User yang kamu masukan salah{" "}
              <Alert.Link href="www.google.com">How To Create User</Alert.Link>
            </Alert>
          </Col>
        </Row>
        <Container className="ms-5">
          <Row>
            <Col md={4}>
              <Card style={{ width: "300px" }}>
                <center>
                <Card.Img
                  variant="top"
                  src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png "
                />
                <Card.Title>Sate</Card.Title>
                <Card.Text>Sate adalah makanan khas Indonesia</Card.Text>
                <Button Variant="dark">Pesan Sekarang</Button>
                </center>
              </Card>
            </Col>
            <Col md={4}>
              <Card style={{ width: "300px" }}>
                <center>
                <Card.Img
                  variant="top"
                  src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png "
                />
                <Card.Title>Sate</Card.Title>
                <Card.Text>Sate adalah makanan khas Indonesia</Card.Text>
                <Button Variant="dark">Pesan Sekarang</Button>
                </center>
              </Card>
            </Col>
            <Col md={4}>
              <Card style={{ width: "300px" }}>
                <center>
                <Card.Img
                  variant="top"
                  src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png "
                />
                <Card.Title>Sate</Card.Title>
                <Card.Text>Sate adalah makanan khas Indonesia</Card.Text>
                <Button Variant="dark">Pesan Sekarang</Button>
                </center>
              </Card>
            </Col>
            
          </Row>
        </Container>
        <ColapseComponent />

        <FormComponent />

        <OverlayComponent />

        <PaginationComponent />
      </Container>
    );
  }
}

export default App;
