import React from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Film from './Movie.jsx';

const AllMovies = () => {
  const movies = [
    { title: 'Mean Girls' },
    { title: 'Hackers' },
    { title: 'The Grey' },
    { title: 'Sunshine' },
    { title: 'Ex Machina' },
  ];
  return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Movie Name</th>
          </tr>
        </thead>
        <tbody>
          {
            movies.map((film) => (
              <Film film={film} />
            ))
            }
        </tbody>
      </Table>
  );
};

export default AllMovies;
