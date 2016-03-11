import React from 'react';
import ReactDOM from 'react-dom';
import BooksList from './components/BooksList.js';
import 'whatwg-fetch';
const books = [
  {
    key: '1',
    name: 'Clean Code',
    author: 'Robert Martin',
    description: 'Agile crafts man'
  },
  {
    key: '2',
    name: 'Pragmatic Programmers',
    author: 'Andy Hunt, Dave Thomas',
    description: 'Hello world'
  },
  {
    key: '3',
    name: 'Software Systems Architecture',
    description: 'Hello world'
  },
  {
    key: '4',
    name: 'Patterns of Enterprise Application Architecture',
    author: 'Martin Fowler',
    description: 'Hello world'
  }
];

fetch('./books.json').then(function(data){
    console.log(data);
  });

ReactDOM.render(<BooksList list={books} />, document.getElementById('comps'));
