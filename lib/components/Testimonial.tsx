import Image from "next/future/image";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import quotationMark from "../public/quotation-mark.svg";

export interface TestimonialProps {
  text: React.ReactNode;
  author: string;
}

export const Testimonial: React.FC<TestimonialProps> = ({ text, author }) => (
  <Container fluid className="bg-dark text-white fs-4 py-6 py-8-lg">
    <Row className="justify-content-md-center">
      <Col xs lg="8">
        <div className="mb-5 mb-6-lg">
          <Image src={quotationMark} alt="Quotation mark" />
        </div>
        <p className="mb-4 mb-7-lg">{text}</p>
        <p className="text-secondary">{author}</p>
      </Col>
      <Col lg="1" />
    </Row>
  </Container>
);
