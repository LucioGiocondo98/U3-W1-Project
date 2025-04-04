import React, { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

class SeriesList extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    this.getList();
  }

  getList = () => {
    fetch("https://www.omdbapi.com/?i=tt3896198&apikey=9322ca3e&s=Family%20Guy")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nella chiamata API");
        }
      })
      .then((data) => {
        this.setState({
          movies: data.Search.slice(0, 6),
        });
      })
      .catch((error) => {
        console.error("Errore durante la fetch:", error);
      });
  };

  render() {
    return (
      <Container fluid className="mt-3">
        <Row>
          <Col className="bg-dark">
            <h2 className="text-light">Series</h2>
            <Row className="g-3">
              {this.state.movies.map((movie) => (
                <Col xs={6} md={4} lg={2} key={movie.imdbID} className="mb-4">
                  <Card style={{ height: "270px" }}>
                    <Card.Img
                      src={movie.Poster}
                      alt={movie.Title}
                      style={{
                        height: "100%",
                        width: "100%",
                      }}
                    />
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default SeriesList;
