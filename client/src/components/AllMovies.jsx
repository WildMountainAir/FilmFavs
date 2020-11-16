import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Film from './Movie.jsx';

const AllMovies = (allFilms) => {

  return (
      <Table striped bordered hover>
        <thead>
          <tr className="film-list-header">
            <th>Movie Name</th>
          </tr>
        </thead>
        <tbody>
          {
            allFilms.map((film) => (
              <Film film={film} />
            ))
            }
        </tbody>
      </Table>
  );
};

AllMovies.propTypes = {
  allFilms: PropTypes.array.isRequired,
}

export default AllMovies;
