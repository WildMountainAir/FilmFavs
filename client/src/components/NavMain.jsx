/* eslint-disable no-console */
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Search from './Search';

const NavMain = () => {
  console.log('nav');
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">FilmFavs</Navbar.Brand>
      <Nav className="mr-auto">
        {/* <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link> */}
      </Nav>
      <Search />
    </Navbar>
  );
};

export default NavMain;
