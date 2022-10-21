import { useCallback, useContext, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { AppContext } from "../context";

export interface NewsletterState {
  loading: boolean;
  message?: string;
  error?: string;
}

export const useNewsletter = (): [NewsletterState, (email: string) => void] => {
  const [state, setState] = useState<NewsletterState>({ loading: false });
  const { api } = useContext(AppContext);
  const handleSignup = useCallback(
    (email: string) => {
      if (api === undefined || state.loading) {
        return;
      }

      setState({ loading: true });
      api.postNewsletter(email).then(
        ({ message }) =>
          setState({
            loading: false,
            message,
          }),
        (err) =>
          setState({
            loading: false,
            error:
              err instanceof Error
                ? err.message
                : "Unknown application error occurred",
          })
      );
    },
    [api, state]
  );

  return [state, handleSignup];
};

export const Newsletter: React.FC = () => {
  const [state, submitEmail] = useNewsletter();
  const handleSubmit = useCallback(
    (e: React.SyntheticEvent) => {
      e.preventDefault();
      const { email } = e.target as EventTarget & {
        email: EventTarget & HTMLInputElement;
      };
      submitEmail(email.value);
    },
    [submitEmail]
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
            <Form.Control
              name="email"
              placeholder="Type your email"
              disabled={state.loading}
            />
            <Button
              variant="primary"
              type="submit"
              className="d-block"
              disabled={state.loading}
            >
              Submit
            </Button>
          </Form>
          {state.message && <p className="text-success">{state.message}</p>}
          {state.error && <p className="text-danger">{state.error}</p>}
        </Col>
      </Row>
    </Container>
  );
};
