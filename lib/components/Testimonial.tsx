import Image from "next/future/image";
import { ReactNode } from "react";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import quotationMark from "../../public/quotation-mark.svg";

export interface TestimonialProps {
  text: ReactNode;
  author: string;
}
export const Testimonial: React.FC<TestimonialProps> = ({ text, author }) => (
  <Container fluid className="bg-dark text-white fs-4 py-6 py-lg-8">
    <Container>
      <Row className="justify-content-md-center">
        <Col lg="9" className="px-2 px-lg-4">
          <div className="mb-4 mb-lg-6">
            <Image src={quotationMark} alt="Quotation mark" />
          </div>
          <p className="mb-4 mb-lg-7">{text}</p>
          <p className="mb-0 text-secondary">{author}</p>
        </Col>
        <Col lg="1" />
      </Row>
    </Container>
  </Container>
);
