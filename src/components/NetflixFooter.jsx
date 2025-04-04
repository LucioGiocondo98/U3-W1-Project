import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

const NetflixFooter = () => {
  return (
    <Container className=" bg-dark text-white pt-4 pb-2 mt-5 w-100 container-fluid">
      <Row>
        <Col xs={12} className="mb-3">
          <a href="#" className="me-3">
            <i className="bi bi-facebook fs-4 text-light"></i>
          </a>
          <a href="#" className="me-3">
            <i className="bi bi-instagram fs-4 text-light"></i>
          </a>
          <a href="#" className="me-3">
            <i className="bi bi-twitter fs-4 text-light"></i>
          </a>
          <a href="#">
            <i className="bi bi-youtube fs-4 text-light"></i>
          </a>
        </Col>
      </Row>

      <Row>
        <Col md={3} className="mb-2 text-center text-md-start">
          <a href="#" className="text-white text-decoration-none">
            Audio and Subtitles
          </a>
        </Col>
        <Col md={3} className="mb-2 text-center text-md-start">
          <a href="#" className="text-white text-decoration-none">
            Audio Description
          </a>
        </Col>
        <Col md={3} className="mb-2 text-center text-md-start">
          <a href="#" className="text-white text-decoration-none">
            Help Center
          </a>
        </Col>
        <Col md={3} className="mb-2 text-center text-md-start">
          <a href="#" className="text-white text-decoration-none">
            Gift Cards
          </a>
        </Col>
      </Row>

      <Row>
        <Col md={3} className="mb-2 text-center text-md-start">
          <a href="#" className="text-white text-decoration-none">
            Media Center
          </a>
        </Col>
        <Col md={3} className="mb-2 text-center text-md-start">
          <a href="#" className="text-white text-decoration-none">
            Investor Relations
          </a>
        </Col>
        <Col md={3} className="mb-2 text-center text-md-start">
          <a href="#" className="text-white text-decoration-none">
            Jobs
          </a>
        </Col>
        <Col md={3} className="mb-2 text-center text-md-start">
          <a href="#" className="text-white text-decoration-none">
            Terms of Use
          </a>
        </Col>
      </Row>

      <Row>
        <Col md={3} className="mb-2 text-center text-md-start">
          <a href="#" className="text-white text-decoration-none">
            Privacy
          </a>
        </Col>
        <Col md={3} className="mb-2 text-center text-md-start">
          <a href="#" className="text-white text-decoration-none">
            Legal Notices
          </a>
        </Col>
        <Col md={3} className="mb-2 text-center text-md-start">
          <a href="#" className="text-white text-decoration-none">
            Cookie Preferences
          </a>
        </Col>
        <Col md={3} className="mb-2 text-center text-md-start">
          <a href="#" className="text-white text-decoration-none">
            Corporate Information
          </a>
        </Col>
      </Row>

      <Row>
        <Col md={3} className="mb-2 text-center text-md-start">
          <a href="#" className="text-white text-decoration-none">
            Contact Us
          </a>
        </Col>
      </Row>

      <Row>
        <Col xs={12} className="text-center mt-3">
          <button className="btn btn-outline-secondary btn-sm">
            Service Code
          </button>
        </Col>
      </Row>
    </Container>
  );
};

export default NetflixFooter;
