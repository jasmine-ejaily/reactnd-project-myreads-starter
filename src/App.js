import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import { Link, Route, Switch } from "react-router-dom";
import Shelf from "./Shelf";
import Search from "./Search";

class BooksApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchRes: [],
    };
    this.getBooks = this.getBooks.bind(this);
    this.updateShelf = this.updateShelf.bind(this);
    this.searchLibrary = this.searchLibrary.bind(this);
  }

  getBooks() {
    BooksAPI.getAll().then((books) => {
      this.setState(() => ({ books }));
    });
  }
  componentDidMount() {
    this.getBooks();
  }

  updateShelf(id, shelf) {
    BooksAPI.update(id, shelf).then(() => this.getBooks());
  }

  searchLibrary(term) {
    term
      ? BooksAPI.search(term)
          .then((res) => {
            const filteredResult =
              !res.error &&
              res.map(
                (resBook) =>
                  this.state.books.find((book) => book.id === resBook.id) ||
                  resBook
              );
            this.setState(() => ({ searchRes: filteredResult }));
          })

          .catch((rej) => console.log("rejected", rej))
      : this.setState(() => ({ searchRes: [] }));
  }

  render() {
    return (
      <div className='app'>
        <Switch>
          <Route
            exact
            path='/'
            render={() => (
              <div className='list-books'>
                <div className='list-books-title'>
                  <h1>MyReads</h1>
                </div>
                <div className='list-books-content'>
                  <Shelf
                    shelf='currentlyReading'
                    title='Currently Reading'
                    books={this.state.books}
                    updateShelf={this.updateShelf}
                  />

                  <Shelf
                    shelf='wantToRead'
                    title='Want To Read'
                    books={this.state.books}
                    updateShelf={this.updateShelf}
                  />
                  <Shelf
                    shelf='read'
                    title='Read'
                    books={this.state.books}
                    updateShelf={this.updateShelf}
                  />
                </div>
                <div className='open-search'>
                  <Link to='/search'>Add a book</Link>
                </div>
              </div>
            )}
          />
          <Route
            exact
            path='/search'
            render={() => (
              <Search
                search={this.searchLibrary}
                res={this.state.searchRes}
                update={this.updateShelf}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default BooksApp;
