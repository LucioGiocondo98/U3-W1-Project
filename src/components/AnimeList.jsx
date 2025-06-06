import React, { Component } from "react";
import { Container, Row, Col, Card, Spinner } from "react-bootstrap";
import "./style.css";
import { Link } from "react-router-dom";

class AnimeList extends Component {
  state = {
    movies: [],
    loading: true,
  };

  componentDidMount() {
    this.getList();
  }

  getList = () => {
    fetch("https://www.omdbapi.com/?i=tt3896198&apikey=9322ca3e&s=Naruto")
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
          loading: false,
        });
      })
      .catch((error) => {
        console.error("Errore durante la fetch:", error);
        this.setState({ loading: false });
      });
  };

  render() {
    return (
      <Container
        fluid
        className="mt-3 mb-3 border-bottom border-1 border-light"
      >
        <Row>
          <Col>
            <h2 className="text-light">Anime</h2>

            {this.state.loading ? (
              <div className="d-flex justify-content-center">
                <Spinner animation="border" variant="light" />
              </div>
            ) : (
              <Row className="g-3 mt-3">
                {this.state.movies.map((movie) => (
                  <Col xs={6} md={4} lg={2} key={movie.imdbID} className="mb-4">
                    <Link
                      to={`/movie-details/${movie.imdbID}`}
                      className="text-decoration-none"
                    >
                      <Card
                        style={{ height: "270px" }}
                        className="border-0 card-hover"
                      >
                        <Card.Img
                          src={movie.Poster}
                          alt={movie.Title}
                          style={{
                            height: "100%",
                            width: "100%",
                          }}
                        />
                      </Card>
                    </Link>
                  </Col>
                ))}
              </Row>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}
export default AnimeList;
