import Image from "next/future/image";
import { HTMLAttributes } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../public/logo.svg";

export interface LayoutProps extends HTMLAttributes<unknown> {
  nav: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ nav, children }) => (
  <>
    <Navbar bg="light" expand="lg" className="py-4 py-lg-5">
      <Container>
        <Navbar.Brand>
          <Image src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">{nav}</Nav>
          <Button variant="primary" href="#newsletter">
            Contact us
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    {children}
  </>
);
