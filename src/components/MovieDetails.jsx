import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container, Card } from "react-bootstrap";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  const apiKey = "9322ca3e";

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=${apiKey}&i=${movieId}`)
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Errore nel fetch dei dettagli del film:", error);
      });
  }, [movieId]);

  return (
    <Container className="d-flex flex-column align-items-center mt-5 text-white">
      {movie && movie.Poster && (
        <Card
          style={{ width: "22rem" }}
          className="bg-dark text-white shadow mb-4"
        >
          <Card.Img variant="top" src={movie.Poster} />
          <Card.Body>
            <Card.Title>{movie.Title}</Card.Title>
            <Card.Text>
              <strong>Anno:</strong> {movie.Year} <br />
              <strong>Genere:</strong> {movie.Genre} <br />
            </Card.Text>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
};

export default MovieDetails;
