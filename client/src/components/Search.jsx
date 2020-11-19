import React from 'react';
import Row from 'react-bootstrap/Row';

var Search = (props) => (
    <Row className="search">
      <input id="formInput" className="search-input" type="text" maxLength="80" placeholder="Search For or Add A Movie"/>
      <button 
        className='button-root search-button'
        onClick={
          (e) => {e.preventDefault();
          props.searchHandler(document.getElementById('formInput').value);
          document.getElementById('formInput').value=""}
        }
      >
        Search
      </button>
      <button
        className='button-root add-button'
        onClick={(e) => {
          e.preventDefault();
          props.addHandler(document.getElementById('formInput').value);
          document.getElementById('formInput').value=""}
        }
      >
        Add
      </button>
    </Row>
)

export default Search;