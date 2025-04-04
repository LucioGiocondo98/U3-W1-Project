import React from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

const TvShowBar = () => {
  return (
    <div className="d-flex justify-content-between align-items-center text-light border-bottom border-1 border-light d-none d-sm-flex">
      <div className="d-flex m-3">
        <h2>TV Shows</h2>
        <DropdownButton
          variant="secondary"
          size="sm"
          id="dropdown-genre"
          title="Genres"
          className="rounded-0 ms-4 mt-1"
          style={{ backgroundColor: "#221f1f" }}
        >
          <Dropdown.Item href="#">Comedy</Dropdown.Item>
          <Dropdown.Item href="#">Drama</Dropdown.Item>
          <Dropdown.Item href="#">Thriller</Dropdown.Item>
        </DropdownButton>
      </div>
      <div className="me-3">
        <i className="bi bi-grid me-2" />
        <i className="bi bi-grid-3x3-gap" />
      </div>
    </div>
  );
};

export default TvShowBar;
