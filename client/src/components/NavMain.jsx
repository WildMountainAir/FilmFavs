/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Search from './Search.jsx';

const NavMain = (setSearch, setResults, searchInput) => {
  console.log('nav');
  return (
    <Navbar>
      <Navbar.Brand href="#home">
        <img src="https://film-favs.s3.us-east-2.amazonaws.com/FilmFavs_Logo.png" className="nav-logo" />
      </Navbar.Brand>
      {/* <Nav className=""> */}
        {/* <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link> */}
      {/* </Nav> */}
      <Search 
        setSearch={setSearch}
      />
    </Navbar>
  );
};

NavMain.propTypes = {
  setSearch: PropTypes.func.isRequired,
  setResults: PropTypes.func.isRequired,
  searchInput: PropTypes.string.isRequired,
}

export default NavMain;
