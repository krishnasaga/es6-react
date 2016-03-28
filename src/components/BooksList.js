import React from 'react'
import Book from './Book.js'
import '../../sass/style.scss'
export default class BooksList extends React.Component {

  componentDidMount() {
    this.props.loadBooks();
  }

  render(): any {

    var books = this.props.list
    .map(book => <li key={book.key}> <Book info={book} /> </li>);

    return <ul>{books}</ul>;
  }
}
