import { Button, Col, Form, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";

export const Newsletter: React.FC = () => (
  <Container id="newsletter" fluid className="fs-7 py-6 py-8-lg">
    <Row className="justify-content-md-center">
      <Col xs lg="6" className="px-5 text-center">
        <h1 className="display-6 mb-4 mb-6-lg">Sign up for Newsletter</h1>
        <Form className="d-grid gap-2 d-md-flex mb-3 mb-5-lg">
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
);
