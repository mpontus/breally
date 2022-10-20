import Image from "next/future/image";
import { Col, Ratio, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";

export interface HeroProps {
  text: React.ReactNode;
  image: string;
}

export const Hero: React.FC<HeroProps> = ({ text, image }) => (
  <Container>
    <Row className="justify-content-md-center py-6 py-lg-8">
      <Col lg="5" className="d-flex align-items-center px-2 px-lg-4">
        <h1 className="display-5 ">{text}</h1>
      </Col>
      <Col lg="5" className="p-2">
        <Ratio aspectRatio={384 / 516}>
          <Image
            fill
            style={{ objectFit: "cover" }}
            src={image}
            alt="Hero image"
          />
        </Ratio>
      </Col>
    </Row>
  </Container>
);
