/* eslint-disable no-console */
import React from 'react';
import Container from 'react-bootstrap/Container';
import NavMain from './components/NavMain.jsx';
import AllMovies from './components/AllMovies.jsx';

const App = () => {
  console.log('hello');
  return (
    <Container maxWidth="sm" className="main">
      <NavMain />
      <AllMovies />
    </Container>
  );
};

export default App;
