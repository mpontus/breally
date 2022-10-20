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
      <Navbar expand="lg" className="py-4">
        <Container>
          <Navbar.Brand>{logo}</Navbar.Brand>
          <Button
            variant="primary"
            href="#newsletter"
            className="ms-auto order-lg-last"
          >
            Contact us
          </Button>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="mx-4" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto ms-lg-5">{nav}</Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {children}
    </>
  );
};
