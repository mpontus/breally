import Head from "next/head";
import { HTMLAttributes } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export interface LayoutProps extends HTMLAttributes<unknown> {
  title?: string;
  logo: React.ReactElement;
  nav: React.ReactElement[];
}

export const Layout: React.FC<LayoutProps> = (props) => {
  const { title, logo, nav, children } = props;
  return (
    <>
      {title && (
        <Head>
          <title>{title}</title>
        </Head>
      )}
      <Navbar bg="light" expand="lg" className="py-4 py-lg-5">
        <Container>
          <Navbar.Brand>{logo}</Navbar.Brand>
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
};
