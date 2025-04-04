import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const NetflixFooter = () => {
  return (
    <Container className="mt-5 border-top border-1 border-light">
      <Row className="justify-content-center">
        <Col xs={12} sm={10} md={8} lg={6}>
          <Row className="justify-content-center mb-3">
            <Col>
              <FaFacebook className="footer-icon me-2 text-light" />
              <FaInstagram className="footer-icon me-2 text-light" />
              <FaTwitter className="footer-icon me-2 text-light" />
              <FaYoutube className="footer-icon text-light" />
            </Col>
          </Row>
          <Row className="row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-4 g-3">
            <Col>
              <div className="footer-links">
                <p>
                  <a href="#" className="text-light text-decoration-none">
                    Audio and Subtitles
                  </a>
                </p>
                <p>
                  <a href="#" className="text-light text-decoration-none">
                    Media Center
                  </a>
                </p>
                <p>
                  <a href="#" className="text-light text-decoration-none">
                    Privacy
                  </a>
                </p>
                <p>
                  <a href="#" className="text-light text-decoration-none">
                    Contact us
                  </a>
                </p>
              </div>
            </Col>
            <Col>
              <div className="footer-links">
                <p>
                  <a href="#" className="text-light text-decoration-none">
                    Audio Description
                  </a>
                </p>
                <p>
                  <a href="#" className="text-light text-decoration-none">
                    Investor Relations
                  </a>
                </p>
                <p>
                  <a href="#" className="text-light text-decoration-none">
                    Legal Notices
                  </a>
                </p>
              </div>
            </Col>
            <Col>
              <div className="footer-links">
                <p>
                  <a href="#" className="text-light text-decoration-none">
                    Help Center
                  </a>
                </p>
                <p>
                  <a href="#" className="text-light text-decoration-none">
                    Jobs
                  </a>
                </p>
                <p>
                  <a href="#" className="text-light text-decoration-none">
                    Cookie Preferences
                  </a>
                </p>
              </div>
            </Col>
            <Col>
              <div className="footer-links">
                <p>
                  <a href="#" className="text-light text-decoration-none">
                    Gift Cards
                  </a>
                </p>
                <p>
                  <a href="#" className="text-light text-decoration-none">
                    Terms of Use
                  </a>
                </p>
                <p>
                  <a href="#" className="text-light text-decoration-none">
                    Corporate Information
                  </a>
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="mb-2">
              <Button
                type="button"
                className="btn btn-sm footer-button border border-light rounded-0 mt-3"
                style={{ backgroundColor: "rgb(34, 31, 31)" }}
              >
                Service Code
              </Button>
            </Col>
          </Row>
          <Row>
            <Col className="mb-2 mt-2 copyright text-light text-center">
              © 1997-2023 Netflix, Inc.
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default NetflixFooter;
