import React from "react";
import Book from "./Book";

const ListRes = (props) => {
  //if results exist, display them as Book component
  return props.books
    ? props.books.map((book) => (
        <li key={book.id}>
          <Book
            title={book.title}
            authors={book.authors} //for books with no cover, keep it empty
            cover={book.imageLinks ? book.imageLinks.thumbnail : ""}
            // if a book has no assigned shelf, assign it to "none"
            shelf={book.shelf || "none"}
            //carry the whole book object for the "update" method
            book={book}
            update={props.update}
          />
        </li>
      ))
    : "";
};

export default ListRes;
