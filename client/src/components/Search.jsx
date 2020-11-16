import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

const Search = (setSearch, setResults, searchInput) => {
  
  const handleSearch = (e) => {
    // if movie name is in all movies state
    // return array of movies with full or partial match
    // else
    // return could not find movie gif
    setSearch(String(e.target.value));
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setResults(searchInput);
  }

  return (
    <Form inline>
        <Form.Control 
          as="textarea"
          placeholder="Search"
          rows="1"
          value={searchInput}
          onChange={handleSearch}
          className="search-input"
          />
        <Button 
          className="search-button"
        >
        Search
        </Button>
    </Form>
  )
}

Search.propTypes = {
  setSearch: PropTypes.func.isRequired,
  setResults: PropTypes.func.isRequired,
  searchInput: PropTypes.string.isRequired,
}

export default Search;
