import type { NextPage } from "next";
import Image from "next/image";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import heroImage from "../lib/hero.png";
import quotationMark from "../public/quotation-mark.svg";

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
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
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
            <Image src={heroImage} alt="Hero image" width={516} height={384} />
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
    </>
  );
};

export default Home;
