import React from "react";
import { Link } from "react-router-dom";
import ListRes from "./ListRes";

const Search = (props) => {
  const handleChange = (e) => {
    const value = e.target.value;
    props.search(value);
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        {/*button to homepage*/}
        <Link className="close-search" to="/">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title or author"
            name="query"
            onChange={handleChange}
          />
        </div>
      </div>
      {/*display search results*/}
      <div className="search-books-results">
        <ol className="books-grid">
          {/*if results exist, display*/}
          {props.res && <ListRes books={props.res} update={props.update} />}
        </ol>
      </div>
    </div>
  );
};

export default Search;
