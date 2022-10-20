import type { NextPage } from "next";
import Image from "next/future/image";
import { Button, Col, Form, Ratio, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import quotationMark from "../public/quotation-mark.svg";
import logo from "../public/logo.svg";

const Home: NextPage = () => {
  return (
    <>
      <Navbar
        bg="light"
        expand="md"
        className="p-0 my-4"
        style={{ height: 48 }}
      >
        <Container>
          <Navbar.Brand>
            <Image src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#">Products</Nav.Link>
              <Nav.Link href="#">Solutions</Nav.Link>
              <Nav.Link href="#">Resources</Nav.Link>
              <Nav.Link href="#">About</Nav.Link>
            </Nav>
            <Button variant="primary">Contact us</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <Row className="justify-content-md-center py-4 my-8">
          <Col xs lg="5" className="d-flex align-items-center px-3">
            <h1 className="display-5">
              In oculis quidem rerum facilis est et aperta.
            </h1>
          </Col>
          <Col xs lg="5">
            <Ratio aspectRatio={384 / 516}>
              <Image
                fill
                style={{ objectFit: "cover" }}
                src="https://i.ibb.co/G9bfTPH/breally-img.png"
                alt="Hero image"
              />
            </Ratio>
          </Col>
        </Row>
      </Container>
      <Container fluid className="bg-dark text-white fs-4 py-8">
        <Row className="justify-content-md-center">
          <Col xs lg="8">
            <div className="mb-6">
              <Image src={quotationMark} alt="Quotation mark" />
            </div>
            <p className="mb-7">
              Torquatos nostros? quos dolores eos, qui studiose antiqua
              persequeris, claris et quasi naturalem. In quo enim inter
              mediocrem animadversionem atque insitam in malis dolor, non
              numquam. At vero eos et dolore suo sanciret.
            </p>
            <p className="text-secondary">John Doe, Street Artist</p>
          </Col>
          <Col xs lg="1" />
        </Row>
      </Container>
      <Container fluid className="fs-7 py-8">
        <Row className="justify-content-md-center">
          <Col xs lg="6" className="text-center">
            <h1 className="display-6 mb-6">Sign up for Newsletter</h1>
            <Form className="d-grid gap-2 d-md-flex mb-5">
              <Form.Control type="email" placeholder="Type your email" />
              <Button variant="primary" type="submit" className="d-block">
                Submit
              </Button>
            </Form>
            <p className="text-success">
              Thank you for signing up for the Breally newsletter.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
