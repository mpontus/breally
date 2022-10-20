import { useCallback, useContext, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { AppContext } from "../context";

interface State {
  message?: string;
  error?: string;
}

export const Newsletter: React.FC = () => {
  const { api } = useContext(AppContext);
  const [{ message, error }, setState] = useState<State>({});
  const handleSubmit = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async (e: React.SyntheticEvent) => {
      e.preventDefault();

      if (api === undefined) {
        return;
      }

      try {
        setState({});
        const { email } = e.target as EventTarget & {
          email: EventTarget & HTMLInputElement;
        };
        const { message } = await api.postNewsletter(email.value);
        setState({ message });
      } catch (err) {
        if (err instanceof Error) {
          setState({ error: err.message });
        } else {
          setState({ error: "Unknown application error occurred" });
        }
      }
    },
    [api]
  );

  return (
    <Container id="newsletter" className="fs-7 py-6 py-lg-8">
      <Row className="justify-content-md-center">
        <Col lg="6" className="text-center">
          <h1 className="display-6 mb-4 mb-lg-6">Sign up for Newsletter</h1>
          <Form
            className="d-grid gap-2 d-md-flex mb-3 mb-lg-5"
            onSubmit={handleSubmit}
          >
            <Form.Control name="email" placeholder="Type your email" />
            <Button variant="primary" type="submit" className="d-block">
              Submit
            </Button>
          </Form>
          {message && <p className="text-success">{message}</p>}
          {error && <p className="text-danger">{error}</p>}
        </Col>
      </Row>
    </Container>
  );
};
