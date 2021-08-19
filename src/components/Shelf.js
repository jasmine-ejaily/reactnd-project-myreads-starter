import React from "react";
import ListBooks from "./ListBooks";

const Shelf = (props) => {
  const { shelf, books, updateShelf, title } = props;

  return (
    <div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {/*displays books on the assigned shelf*/}
            <ListBooks books={books} update={updateShelf} shelf={shelf} />
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Shelf;
