import React from "react";
import Book from "./Book";

const ListBooks = (props) => {
  const { books, update, shelf } = props;
  //only display books if the book's own shelf matches the assigned shelf
  return books
    .filter((book) => book.shelf === shelf)
    .map((book) => (
      <li key={book.id}>
        <Book
          id={book.id}
          title={book.title}
          authors={book.authors}
          cover={book.imageLinks.thumbnail}
          shelf={book.shelf}
          book={book}
          update={update}
        />
      </li>
    ));
};
export default ListBooks;
