import Link from "next/Link";
import { Container, Navbar, Row, Col } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <Container>
      <Navbar>
        <Row>
          <Col>
            <Link href="/">
              <a>Om mig </a>
            </Link>
            <Link href="/experience">
              <a>Erfarenhet </a>
            </Link>
            <Link href="/education">
              <a>Utbildning </a>
            </Link>
          </Col>
        </Row>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;
