import React from "react";
import { Link } from "react-router-dom";
import ListRes from "./ListRes";

const Search = (props) => {
  const handleChange = (e) => {
    const value = e.target.value;
    console.log("term", value);
    props.search(value);
  };
  return (
    <div className='search-books'>
      <div className='search-books-bar'>
        <Link className='close-search' to='/'>
          Close
        </Link>
        <div className='search-books-input-wrapper'>
          <input
            type='text'
            placeholder='Search by title or author'
            name='query'
            onChange={handleChange}
          />
        </div>
      </div>
      <div className='search-books-results'>
        <ol className='books-grid'>
          {props.res && <ListRes books={props.res} update={props.update} />}
        </ol>
      </div>
    </div>
  );
};

export default Search;
