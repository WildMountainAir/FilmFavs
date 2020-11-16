import React from 'react';

const Film = ({ film }) => (
  <tr classNmae="film-list-film">
    <td>{film.title}</td>
  </tr>
);

export default Film;
