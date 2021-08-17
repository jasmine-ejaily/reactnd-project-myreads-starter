import React, { Component } from "react";
import Book from "./Book";

class ListBooks extends Component {
  render() {
    return (
      <div>
        <div className='bookshelf'>
          <h2 className='bookshelf-title'>Currently Reading</h2>
          <div className='bookshelf-books'>
            <ol className='books-grid'>
              {this.props.books
                .filter((book) => book.shelf === "currentlyReading")
                .map((book) => (
                  <li key={book.id}>
                    <Book
                      id={book.id}
                      title={book.title}
                      author={book.authors}
                      cover={book.imageLinks.thumbnail}
                      shelf={book.shelf}
                      book={book}
                      update={this.props.update}
                    />
                  </li>
                ))}
            </ol>
          </div>
        </div>
        <div className='bookshelf'>
          <h2 className='bookshelf-title'>Want to Read</h2>
          <div className='bookshelf-books'>
            <ol className='books-grid'>
              {this.props.books
                .filter((book) => book.shelf === "wantToRead")
                .map((book) => (
                  <li key={book.id}>
                    <Book
                      id={book.id}
                      title={book.title}
                      author={book.authors}
                      cover={book.imageLinks.thumbnail}
                      shelf={book.shelf}
                      book={book}
                      update={this.props.update}
                    />
                  </li>
                ))}
            </ol>
          </div>
        </div>
        <div className='bookshelf'>
          <h2 className='bookshelf-title'>Read</h2>
          <div className='bookshelf-books'>
            <ol className='books-grid'>
              {this.props.books
                .filter((book) => book.shelf === "read")
                .map((book) => (
                  <li key={book.id}>
                    <Book
                      id={book.id}
                      title={book.title}
                      author={book.authors}
                      cover={book.imageLinks.thumbnail}
                      shelf={book.shelf}
                      book={book}
                      update={this.props.update}
                    />
                  </li>
                ))}
            </ol>
          </div>
        </div>
      </div>
    );
  }
}

export default ListBooks;

//   <div>
//     <div className='bookshelf'>
//       <h2 className='bookshelf-title'>Currently Reading</h2>
//       <div className='bookshelf-books'>
//         <ListBooks books={this.state.books} />
//       </div>
//     </div>
//     <div className='bookshelf'>
//       <h2 className='bookshelf-title'>Want to Read</h2>
//       <div className='bookshelf-books' />
//     </div>
//     <div className='bookshelf'>
//       <h2 className='bookshelf-title'>Read</h2>
//       <div className='bookshelf-books' />
//     </div>
//   </div>;
