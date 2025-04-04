import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import React from "react";
import {
  Navbar as BootstrapNavbar,
  Nav,
  Container,
  Image,
} from "react-bootstrap";

const NetflixNavbar = () => {
  return (
    <BootstrapNavbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container fluid className="w-100">
        <BootstrapNavbar.Brand href="#">
          <Image
            src="/logo.png"
            alt="Netflix"
            width="100"
            height="50"
            className="d-inline-block align-top me-2"
          />
        </BootstrapNavbar.Brand>

        <BootstrapNavbar.Toggle aria-controls="navbar-toggle" />

        <BootstrapNavbar.Collapse id="navbar-toggle">
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">TV Shows</Nav.Link>
            <Nav.Link href="#">Movies</Nav.Link>
            <Nav.Link href="#">Recently Added</Nav.Link>
            <Nav.Link href="#">My List</Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>

        <div className="d-none d-lg-flex gap-3 align-items-center text-white">
          <i className="bi bi-search"></i>
          <div className="fs-6">KIDS</div>
          <i className="bi bi-bell"></i>
          <i className="bi bi-person-circle"></i>
        </div>
      </Container>
    </BootstrapNavbar>
  );
};

export default NetflixNavbar;
