import React from "react";

const Book = (props) => {
  const { title, author, cover, shelf, update, book } = props;

  const handleChange = (e) => {
    update(book, e.target.value);
  };

  return (
    <div className='book'>
      <div className='book-top'>
        <div
          className='book-cover'
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url("${cover}")`,
          }}
        />
        <div className='book-shelf-changer'>
          <select onChange={handleChange} value={shelf}>
            <option value='move' disabled>
              Move to...
            </option>
            <option value='currentlyReading'>Currently Reading</option>
            <option value='wantToRead'>Want to Read</option>
            <option value='read'>Read</option>
            <option value='none'>None</option>
          </select>
        </div>
      </div>
      <div className='book-title'>{title}</div>
      <div className='book-authors'>{author}</div>
    </div>
  );
};

export default Book;
