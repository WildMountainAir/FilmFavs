/* eslint-disable no-console */
import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import NavMain from './components/NavMain.jsx';
import AllMovies from './components/AllMovies.jsx';

const App = () => {
  // searchInput will hold the state of the Search Component
  // setSearch will be passed as props to NavMain which will pass to Search
  const [searchInput, setSearch] = useState('');
  const [allFilms, setAllFilms] = useState([]);
  const [searchResults, setResults] = useState([]);

  console.log('hello');
  return (
    <Container maxWidth="sm" className="main">
      <NavMain 
        setSearch={setSearch}
        setResults={setResults}
        searchInput={searchInput}
      />
      <AllMovies />
    </Container>
  );
};

export default App;
