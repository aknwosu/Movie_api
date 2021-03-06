import React from "react";
import PropTypes from "prop-types";
import { Card, Button } from "react-bootstrap";

import { Link } from "react-router-dom";

//import styling
import "./movie-card.scss";

export class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;

    return (
      <Card className="movieCard">
        <Card.Img className="imageCard" variant="top" src={movie.ImagePath} />
        <Card.Body>
          <Card.Title className="cardTitle">{movie.Title}</Card.Title>
        </Card.Body>

        <Card.Body>
          <Card.Text className="cardText">{movie.Description}</Card.Text>
          <Link to={`/movies/${movie._id}`}>
            <Button className="button" variant="link">
              Open
            </Button>
          </Link>
        </Card.Body>
      </Card>
    );
  }
}

/* export class MovieCard extends React.Component {
    render() {
        const { movie, onClick } = this.props;

        return (
            <div className="flexbox">
                <Card className="movieCard">
                    <Card.Img className="imageCard" variant="top" src={movie.ImagePath} />
                    <Card.Body>
                        <Card.Title className="cardTitle">{movie.Title}</Card.Title>
                        <Card.Text className="cardText">{movie.Description}</Card.Text>
                        <Button className="button col-8" onClick={() => onClick(movie)} variant="link">Open</Button>
                    </Card.Body>
                </Card>
            </div>
        );
    }
} */

MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string,
    Description: PropTypes.string,
    ImagePath: PropTypes.string,
  }).isRequired,
  onClick: PropTypes.func,
};
