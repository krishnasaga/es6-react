import React from 'react'
import Book from './Book.js'
export default class BooksList extends React.Component {

  render(): any {

    var books = this.props.list
    .map(book => <li key={book.key}> <Book info={book} /> </li>);

    return <ul>{books}</ul>;
  }
}
