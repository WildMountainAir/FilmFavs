import React from 'react';
import Row from 'react-bootstrap/Row';

import Film from './Film.jsx';

var AllFilms = (props) => (
  <div>
    <Row className="film-list">
      <button
        className="button-root unwatched-button"
        onClick={
          (e) => {e.preventDefault();
          props.displayUnwatched()}
        }
      >
        Unwatched
      </button>
      <button
        className="button-root watched-button"
        onClick={(e) => {
          e.preventDefault();
          props.displayWatched()}
        }
      >
        Watched
      </button>
      <button
        className="button-root all-button"
        onClick={(e) => {
          e.preventDefault();
          props.displayAll()}
        }
      >
        All Films
      </button>
    </Row>
    {
      props.movies.map((movie, i) => (
        <Film
        watchHandler={props.watchHandler}
        movie={movie} key={i}
        />
      ))
    }
  </div>
)

export default AllFilms;