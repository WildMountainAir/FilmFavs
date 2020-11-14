import React from 'react';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

const Search = () => {
  return (
    <Form inline>
      <FormControl type="text" placeholder="Search" className="search-input" />
      <Button className="search-button">Search</Button>
    </Form>
  )
}

export default Search;
