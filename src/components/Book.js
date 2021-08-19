import React from "react";

const Book = (props) => {
  const { title, authors, cover, shelf, update, book } = props;

  //sends a search request every time the user types something
  const handleChange = (e) => {
    update(book, e.target.value);
  };

  return (
    <div className="book">
      <div className="book-top">
        <div
          title={title}
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url("${cover}")`,
          }}
        />
        <div className="book-shelf-changer">
          <select onChange={handleChange} value={shelf}>
            <option value="move" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">
        {authors &&
          authors.map((author, i) =>
            i !== authors.length - 1 ? `${author}, ` : author
          )}
      </div>
    </div>
  );
};

export default Book;
