/* eslint-disable no-console */
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

const NavMain = () => {
  return (
    <Navbar>
      <Navbar.Brand href="https://github.com/WildMountainAir/FilmFavs">
        <img src="https://film-favs.s3.us-east-2.amazonaws.com/FilmFavs_Logo.png" className="nav-logo" />
      </Navbar.Brand>
    </Navbar>
  );
};

export default NavMain;
