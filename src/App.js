import React from "react";
import * as BooksAPI from "./utils/BooksAPI";
import "./App.css";
import { Link, Route, Switch } from "react-router-dom";
import Shelf from "./components/Shelf";
import Search from "./components/Search";

class BooksApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { books: [], searchRes: [] };

    this.getBooks = this.getBooks.bind(this);
    this.updateShelf = this.updateShelf.bind(this);
    this.searchLibrary = this.searchLibrary.bind(this);
    this.filterBooks = this.filterBooks.bind(this);
  }

  //Getting the books currently in database and filling the array
  getBooks() {
    BooksAPI.getAll().then((books) => {
      this.setState(() => ({ books }));
    });
  }

  //initial books fetch
  componentDidMount() {
    this.getBooks();
  }

  //updating the book shelf and then refreshing the books library with the updated data
  updateShelf(bookId, shelf) {
    BooksAPI.update(bookId, shelf).then(() => this.getBooks());
  }

  //if the search term is empty, re-render using setState and keep searchRes empty, otherwise fetch books that match the term
  searchLibrary(term) {
    term
      ? BooksAPI.search(term)
          .then((res) => {
            this.setState(() => ({ searchRes: this.filterBooks(res) }));
          })
          .catch((rej) => console.log("rejected", rej))
      : this.setState(() => ({ searchRes: "" }));
  }

  /*this function takes the result of the search and compares the books in the search with the ones already in the library, then replaces the books in the search with the existing books to maintain their status*/
  filterBooks(res) {
    //a new array with the filtered search result that maintain the status
    const filteredResult =
      !res.error &&
      res.map(
        (resBook) =>
          //if the a book in the search matches a book in the library, return it, if not, keep search item
          this.state.books.find((book) => book.id === resBook.id) || resBook
      );
    return filteredResult;
  }

  render() {
    return (
      <div className="app">
        <Switch>
          {/*landing page*/}
          <Route
            exact
            path="/"
            render={() => (
              <div className="list-books">
                <div className="list-books-title">
                  <h1>My Reads</h1>
                </div>
                <div className="list-books-content">
                  {/*displaying shelves*/}
                  <Shelf
                    shelf="currentlyReading"
                    title="Currently Reading"
                    books={this.state.books}
                    updateShelf={this.updateShelf}
                  />
                  <Shelf
                    shelf="wantToRead"
                    title="Want To Read"
                    books={this.state.books}
                    updateShelf={this.updateShelf}
                  />
                  <Shelf
                    shelf="read"
                    title="Read"
                    books={this.state.books}
                    updateShelf={this.updateShelf}
                  />
                </div>
                {/*search button*/}
                <div className="open-search">
                  <Link to="/search">Add a book</Link>
                </div>
              </div>
            )}
          />
          {/*search page*/}
          <Route
            exact
            path="/search"
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
