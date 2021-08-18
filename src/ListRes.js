import React from "react";
import Book from "./Book";

const ListRes = (props) => {
  console.log(props.books);
  return props.books
    ? props.books.map((book) => (
        <li key={book.id}>
          <Book
            id={book.id}
            title={book.title}
            author={book.authors}
            cover={book.imageLinks ? book.imageLinks.thumbnail : ""}
            shelf={book.shelf || "none"}
            book={book}
            update={props.update}
          />
        </li>
      ))
    : "";
};

export default ListRes;
