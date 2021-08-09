import React, { Component } from "react";
import MovieList from "./MovieList";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";

class MovieReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://api.nytimes.com/svc/movies/v2/reviews/picks.json?offset=8&order=by-publication-date&api-key=uUvB8l3O1cGQeTlC5yxi2AT2cj72Ay6o"
        
      )
      .then((res) => {
        this.setState({ movies: res.data.results });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <Container>
          <Row>
            <Col sm="12" md="12" lg="12">
              <h1>Awesome Movies to Watch</h1>{" "}
            </Col>
            <Col>
              <MovieList movies={this.state.movies} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default MovieReview;